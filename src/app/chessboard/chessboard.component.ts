
import {
    Component, OnInit, ChangeDetectorRef,
    EventEmitter, ElementRef, ViewChild, AfterViewInit
} from '@angular/core';
import { ChessSquare } from './chess-square';
import { files, Move, Colour, PieceType } from './chess-enums';
import { Chess, FenValidationResult, ChessPiece } from './chess';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-chessboard',
    templateUrl: './chessboard.component.html',
    styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit, AfterViewInit {

    public squaresMap = new Map<string, ChessSquare>();
    public mouseMoveLocal = new EventEmitter<MouseEvent>();
    public touchMoveLocal = new EventEmitter<TouchEvent>();
    public mouseUpLocal = new EventEmitter<MouseEvent>();
    public touchEndLocal = new EventEmitter<TouchEvent>();
    public movingByDrag = false;
    public movingByClick = false;
    public movingFromByDrag: ChessSquare;
    public movingFromByClick: ChessSquare;
    public chess: Chess;
    public boardSide: Colour = Colour.WHITE;
    public moveMade: EventEmitter<Move> = new EventEmitter<Move>();
    @ViewChild('svgRegion', null) svgRegion: ElementRef;
    // @ViewChild(PromotionComponent) promotion: PromotionComponent;
    // private tempPiece: PieceType;

    // For piece promotion
    // public promSquaresMap = new Map<string, ChessSquare>();
    public showProm = false;
    public promPieceSelected = new EventEmitter<PieceType>();
    // private promPieceSubject: Subscription;

    constructor(private cd: ChangeDetectorRef) {
        this.calculateSizes();
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const coord = files[i]
                    + (j + 1).toString();
                const cs = new ChessSquare(coord, this);
                cs.init();
                this.squaresMap.set(coord, cs);
            }
        }
        // https://github.com/jhlywa/chess.js
        this.chess = new Chess();
        this.chess.onChange.subscribe(() => {
            this.positionPieces();
        });

        // For promotion dialog
        // const promotionSquares = ['a8', 'a7', 'a6', 'a5'];
        // for (let coord of promotionSquares) {
        //     const cs = new ChessSquare(coord, this);
        //     cs.init();
        //     this.promSquaresMap.set(coord, cs);
        // }

    }

    async ngAfterViewInit() {
        // The ViewChild component is available now
    }

    async getPromotionPiece(square: ChessSquare): Promise<PieceType> {
        let p = new Promise<PieceType>((resolve) => {
            // console.log("getPromotionPiece");
            this.showProm = true;
            this.showPromotionChoices(this.squaresMap.get(square.coordinate));
            let promPieceSubject = this.promPieceSelected.subscribe((pt: PieceType) => {
                // console.log("showPromotionDialog: "
                //     + pt);
                resolve(pt);
                promPieceSubject.unsubscribe();
            });

        });
        return p;
    }

    showPromotionChoices(promSquare: ChessSquare) {
        // console.log("showPromotionChoices");
        let useSquares: string[];
        let boardSide: Colour;
        let file = promSquare.coordinate.substr(0, 1);
        if (promSquare.coordinate.endsWith('8')) {
            boardSide = Colour.WHITE;
            useSquares = [file + 8, file + 7, file + 6, file + 5];
        }
        else {
            boardSide = Colour.BLACK;
            useSquares = [file + 1, file + 2, file + 3, file + 4];
        }

        this.squaresMap.get(useSquares[0]).pieceColour = boardSide;
        this.squaresMap.get(useSquares[0]).pieceType = PieceType.QUEEN;
        this.squaresMap.get(useSquares[1]).pieceColour = boardSide;
        this.squaresMap.get(useSquares[1]).pieceType = PieceType.ROOK;
        this.squaresMap.get(useSquares[2]).pieceColour = boardSide;
        this.squaresMap.get(useSquares[2]).pieceType = PieceType.BISHOP;
        this.squaresMap.get(useSquares[3]).pieceColour = boardSide;
        this.squaresMap.get(useSquares[3]).pieceType = PieceType.KNIGHT;

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const coord = files[i]
                    + (j + 1).toString();
                if (!useSquares.includes(coord)) {
                    this.squaresMap.get(coord).removePiece();
                }
            }
        }
    }

    get viewBox(): string {
        return '0 0 '
            + (this.wholeSize).toString()
            + ' ' + (this.wholeSize).toString();

    }


    // this is needed in the component because the template
    // needs it to calculate the total svg size of the area.
    public squareSize: number;
    public wholeSize: number;

    public resize = new EventEmitter<void>();
    public flipBoard() {
        this.boardSide === Colour.WHITE ? this.boardSide = Colour.BLACK
            : this.boardSide = Colour.WHITE;
        this.flip();
    }

    private flip() {
        this.squaresMap.forEach((cs: ChessSquare, key: string) => {
            cs.calculateRowColumn();
            this.positionPieces();
        });
    }

    public flipBoardTo(colour: Colour) {
        this.boardSide = colour;
        this.flip();
    }

    public load(fen: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') {
        const r: FenValidationResult = this.chess.validate_fen(fen);
        if (!r.valid) {
            throw new Error('Error: Invalid Fen. Fen=\'' + fen
                + '\', error=' + r.error);
        }
        // console.log('fen is valid');
        this.chess.load(fen);
        // Set board pieces to be the same
        this.positionPieces();

        // Reminder of how to iterate through a Map:
        // this.squaresMap.forEach((cs: ChessSquare, key: string) => {
        // });
    }

    // Puts the pieces on the board in line with the chess position
    public positionPieces() {
        // console.log("positionPieces called");
        for (const key of Object.keys(this.chess.SQUARES)) {
            const coord: string = key;
            const index: number = this.chess.SQUARES[key];
            const piece: ChessPiece = this.chess.board[index];
            const cs = this.squaresMap.get(coord);
            // console.log("coord: " + coord
            // + ", index: " + index
            // );
            if ((typeof piece) !== 'undefined'
                && piece !== undefined) {
                // console.log("piece: " + piece.type
                // + ", piece colour: " + piece.color);
                // if (cs.pieceColour != piece.color
                //  || cs.pieceType != piece.type) {
                cs.pieceColour = piece.color;
                cs.pieceType = piece.type;
                // }

            } else {
                // console.log("empty square");
                cs.removePiece();
            }

        }
    }

    ngOnInit() {
        window.addEventListener('resize', ($event) => {
            this.calculateSizes();
        });

    } // end of ngOnInit

    private calculateSizes() {
        if (window.innerHeight > window.innerWidth) {
            this.wholeSize = 280;
        } else {
            this.wholeSize = 400;
        }
        this.squareSize = this.wholeSize / 8;
        this.resize.emit();
    }

    mouseMove(event: MouseEvent) {
        this.mouseMoveLocal.emit(event);
    }

    touchMove(event: TouchEvent) {
        event.preventDefault();
        this.touchMoveLocal.emit(event);
    }

    touchEnd(event: TouchEvent) {

        if (this.movingByDrag) {
            event.preventDefault();
            let t: Touch;
            if (event.targetTouches.length > 0)
                t = event.targetTouches[0];
            else
                t = event.changedTouches[0];
            console.log("touchEnd ended at "
                + Math.round(t.clientX)
                + "," + Math.round(t.clientY));
            this.endMoveByDrag(t.clientX, t.clientY);

        }
        this.touchEndLocal.emit(event);
    }

    mouseUp(event: MouseEvent) {
        if (this.movingByDrag) {
            this.endMoveByDrag(event.clientX, event.clientY);

        }
        this.mouseUpLocal.emit(event);
    }

    endMoveByDrag(clientX: number, clientY: number) {
        let boardClientX = this.svgRegion.nativeElement.getBoundingClientRect().left;
        let boardClientY = this.svgRegion.nativeElement.getBoundingClientRect().top;
        // console.log('board x: ' + boardClientX + ', board y: ' + boardClientY);
        let mouseClientX = clientX;
        let mouseClientY = clientY;
        let column =
            files[Math.floor((mouseClientX - boardClientX) / this.squareSize)];
        let row = 8 - Math.floor((mouseClientY - boardClientY) / this.squareSize);
        // console.log('row: ' + row);
        if (this.boardSide === Colour.BLACK) {
            const columnNumber = 7 - files.indexOf(column);
            column = files[columnNumber];
            row = 9 - row;
        }

        const coord = column + row.toString();
        // check whether no move was actually made
        if (this.movingFromByDrag.coordinate === coord) {
            // If there's a piece on the square
            if (this.movingFromByDrag.pieceType !== undefined) {
                this.movingFromByDrag.pieceClicked();
            }
            return;
        }
        // console.log("endMove calling makeMoveTo");
        this.movingByDrag = false;
        this.makeMoveTo(this.movingFromByDrag,
            this.squaresMap.get(coord));


    }

    public endMoveByClick(toSquare: ChessSquare) {
        this.movingByClick = false;
        this.makeMoveTo(this.movingFromByClick, toSquare);
    }

    public makeMoveTo(fromSquare: ChessSquare, toSquare: ChessSquare) {
        // check if it needs a pawn promotion
        let isPromotion = false;
        if (fromSquare.pieceType === PieceType.PAWN) {
            if (
                (fromSquare.pieceColour === Colour.WHITE
                    && toSquare.coordinate.substr(1, 1) === '8')
                ||
                (fromSquare.pieceColour === Colour.BLACK
                    && toSquare.coordinate.substr(1, 1) === '1')
            ) {
                isPromotion = true;
            }
        }
        if (isPromotion) {
            // console.log("makeMoveTo: pawn promotion");
            this.getPromotionPiece(toSquare).then((pieceType) => {
                // console.log("makeMoveTo: piece chosen: " + pieceType);
                // check whether the move is valid
                const move = new Move(fromSquare.coordinate,
                    toSquare.coordinate, pieceType);
                const chessMove = this.chess.move(move);
                if (chessMove === undefined) {
                    this.positionPieces();
                    console.log('invalid move');
                } else { // valid move
                    this.moveMade.emit(move);
                }
            });

        }
        else {

            // check whether the move is valid
            const move = new Move(fromSquare.coordinate,
                toSquare.coordinate);
            const chessMove = this.chess.move(move);
            if (chessMove === undefined) {
                this.positionPieces();
                console.log('invalid move');
            } else { // valid move
                this.moveMade.emit(move);
            }
        }
    }


} // End of class ChessBoardComponent

