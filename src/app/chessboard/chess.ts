import { Colour, PieceType, Move } from './chess-enums';
import { EventEmitter } from '@angular/core';

/*
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/

/* minified license below  */

/* @license
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */

// export class ChessMove {
//     color;
//     from;
//     to;
//     flags;
//     piece;
//     // dgm: these needed to exist for typescript
//     promotion;
//     captured;
// }

export class Chess {

    /* jshint indent: false */

    // public BLACK = 'b';
    // public WHITE = 'w';

    public EMPTY = -1;
    public onChange: EventEmitter<void> = new EventEmitter<void>();


    SYMBOLS = 'pnbrqkPNBRQK';

    DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

    POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];

    PAWN_OFFSETS = {
        b: [16, 32, 17, 15],
        w: [-16, -32, -17, -15]
    };

    PIECE_OFFSETS = {
        n: [-18, -33, -31, -14, 18, 33, 31, 14],
        b: [-17, -15, 17, 15],
        r: [-16, 1, 16, -1],
        q: [-17, -16, -15, 1, 17, 16, 15, -1],
        k: [-17, -16, -15, 1, 17, 16, 15, -1]
    };

    ATTACKS = [
        20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20, 0,
        0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0,
        0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0,
        0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0,
        0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
        24, 24, 24, 24, 24, 24, 56, 0, 56, 24, 24, 24, 24, 24, 24, 0,
        0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0,
        0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0,
        0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0,
        0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0,
        20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20
    ];

    RAYS = [
        17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0,
        0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0,
        0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0,
        0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0,
        0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 17, 0, 16, 0, 15, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 17, 16, 15, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0,
        0, 0, 0, 0, 0, 0, -15, -16, -17, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, -15, 0, -16, 0, -17, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0,
        0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0,
        0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0,
        0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0,
        -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17
    ];

    SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };

    public FLAGS = {
        NORMAL: 'n',
        CAPTURE: 'c',
        BIG_PAWN: 'b',
        EP_CAPTURE: 'e',
        PROMOTION: 'p',
        KSIDE_CASTLE: 'k',
        QSIDE_CASTLE: 'q'
    };

    BITS = {
        NORMAL: 1,
        CAPTURE: 2,
        BIG_PAWN: 4,
        EP_CAPTURE: 8,
        PROMOTION: 16,
        KSIDE_CASTLE: 32,
        QSIDE_CASTLE: 64
    };

    RANK_1 = 7;
    RANK_2 = 6;
    RANK_3 = 5;
    RANK_4 = 4;
    RANK_5 = 3;
    RANK_6 = 2;
    RANK_7 = 1;
    RANK_8 = 0;

    SQUARES = {
        a8: 0, b8: 1, c8: 2, d8: 3, e8: 4, f8: 5, g8: 6, h8: 7,
        a7: 16, b7: 17, c7: 18, d7: 19, e7: 20, f7: 21, g7: 22, h7: 23,
        a6: 32, b6: 33, c6: 34, d6: 35, e6: 36, f6: 37, g6: 38, h6: 39,
        a5: 48, b5: 49, c5: 50, d5: 51, e5: 52, f5: 53, g5: 54, h5: 55,
        a4: 64, b4: 65, c4: 66, d4: 67, e4: 68, f4: 69, g4: 70, h4: 71,
        a3: 80, b3: 81, c3: 82, d3: 83, e3: 84, f3: 85, g3: 86, h3: 87,
        a2: 96, b2: 97, c2: 98, d2: 99, e2: 100, f2: 101, g2: 102, h2: 103,
        a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
    };

    ROOKS = {
        w: [{ square: this.SQUARES.a1, flag: this.BITS.QSIDE_CASTLE },
        { square: this.SQUARES.h1, flag: this.BITS.KSIDE_CASTLE }],
        b: [{ square: this.SQUARES.a8, flag: this.BITS.QSIDE_CASTLE },
        { square: this.SQUARES.h8, flag: this.BITS.KSIDE_CASTLE }]
    };

    board = new Array<ChessPiece>(128);
    kings = { w: this.EMPTY, b: this.EMPTY };
    public turn = Colour.WHITE;
    castling: Castling = { w: 0, b: 0 };
    ep_square = this.EMPTY;
    half_moves = 0;
    move_number = 1;
    history = [];
    header: any = {};

    constructor(fen?: string) {
        /* if the user passes in a fen string, load it, else default to
         * starting position
         */
        if (typeof fen === 'undefined') {
            this.load(this.DEFAULT_POSITION);
        } else {
            this.load(fen);
        }
    }

    public clear() {
        this.board = new Array(128);
        this.kings = { w: this.EMPTY, b: this.EMPTY };
        this.turn = Colour.WHITE;
        this.castling = { w: 0, b: 0 };
        this.ep_square = this.EMPTY;
        this.half_moves = 0;
        this.move_number = 1;
        this.history = [];
        this.header = {};
        this.update_setup(this.generate_fen());
    }

    public reset() {
        this.load(this.DEFAULT_POSITION);
    }

    public load(fen) {
        const tokens = fen.split(/\s+/);
        const position = tokens[0];
        let square = 0;

        if (!this.validate_fen(fen).valid) {
            return false;
        }

        this.clear();

        for (let i = 0; i < position.length; i++) {
            const piece = position.charAt(i);

            if (piece === '/') {
                square += 8;
            } else if (this.is_digit(piece)) {
                square += parseInt(piece, 10);
            } else {
                const color = (piece < 'a') ? Colour.WHITE : Colour.BLACK;
                this.put({ type: piece.toLowerCase(), color: color }, this.algebraic(square));
                square++;
            }
        }

        this.turn = tokens[1];

        if (tokens[2].indexOf('K') > -1) {
            this.castling.w |= this.BITS.KSIDE_CASTLE;
        }
        if (tokens[2].indexOf('Q') > -1) {
            this.castling.w |= this.BITS.QSIDE_CASTLE;
        }
        if (tokens[2].indexOf('k') > -1) {
            this.castling.b |= this.BITS.KSIDE_CASTLE;
        }
        if (tokens[2].indexOf('q') > -1) {
            this.castling.b |= this.BITS.QSIDE_CASTLE;
        }

        this.ep_square = (tokens[3] === '-') ? this.EMPTY : this.SQUARES[tokens[3]];
        this.half_moves = parseInt(tokens[4], 10);
        this.move_number = parseInt(tokens[5], 10);

        this.update_setup(this.generate_fen());
        this.onChange.emit();
        return true;
    }

    /* TODO: this function is pretty much crap - it validates structure but
     * completely ignores content (e.g. doesn't verify that each side has a king)
     * ... we should rewrite this, and ditch the silly error_number field while
     * we're at it
     */
    public validate_fen(fen): FenValidationResult {
        const errors = {
            0: 'No errors.',
            1: 'FEN string must contain six space-delimited fields.',
            2: '6th field (move number) must be a positive integer.',
            3: '5th field (half move counter) must be a non-negative integer.',
            4: '4th field (en-passant square) is invalid.',
            5: '3rd field (castling availability) is invalid.',
            6: '2nd field (side to move) is invalid.',
            7: '1st field (piece positions) does not contain 8 \'/\'-delimited rows.',
            8: '1st field (piece positions) is invalid [consecutive numbers].',
            9: '1st field (piece positions) is invalid [invalid piece].',
            10: '1st field (piece positions) is invalid [row too large].',
            11: 'Illegal en-passant square',
        };

        /* 1st criterion: 6 space-seperated fields? */
        const tokens = fen.split(/\s+/);
        if (tokens.length !== 6) {
            return { valid: false, error_number: 1, error: errors[1] };
        }

        /* 2nd criterion: move number field is a integer value > 0? */
        if (isNaN(tokens[5]) || (parseInt(tokens[5], 10) <= 0)) {
            return { valid: false, error_number: 2, error: errors[2] };
        }

        /* 3rd criterion: half move counter is an integer >= 0? */
        if (isNaN(tokens[4]) || (parseInt(tokens[4], 10) < 0)) {
            return { valid: false, error_number: 3, error: errors[3] };
        }

        /* 4th criterion: 4th field is a valid e.p.-string? */
        if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
            return { valid: false, error_number: 4, error: errors[4] };
        }

        /* 5th criterion: 3th field is a valid castle-string? */
        if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
            return { valid: false, error_number: 5, error: errors[5] };
        }

        /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */
        if (!/^(w|b)$/.test(tokens[1])) {
            return { valid: false, error_number: 6, error: errors[6] };
        }

        /* 7th criterion: 1st field contains 8 rows? */
        const rows = tokens[0].split('/');
        if (rows.length !== 8) {
            return { valid: false, error_number: 7, error: errors[7] };
        }

        /* 8th criterion: every row is valid? */
        for (let i = 0; i < rows.length; i++) {
            /* check for right sum of fields AND not two numbers in succession */
            let sum_fields = 0;
            let previous_was_number = false;

            for (let k = 0; k < rows[i].length; k++) {
                if (!isNaN(rows[i][k])) {
                    if (previous_was_number) {
                        return { valid: false, error_number: 8, error: errors[8] };
                    }
                    sum_fields += parseInt(rows[i][k], 10);
                    previous_was_number = true;
                } else {
                    if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
                        return { valid: false, error_number: 9, error: errors[9] };
                    }
                    sum_fields += 1;
                    previous_was_number = false;
                }
            }
            if (sum_fields !== 8) {
                return { valid: false, error_number: 10, error: errors[10] };
            }
        }

        if ((tokens[3][1] === '3' && tokens[1] === 'w') ||
            (tokens[3][1] === '6' && tokens[1] === 'b')) {
            return { valid: false, error_number: 11, error: errors[11] };
        }

        /* everything's okay! */
        return { valid: true, error_number: 0, error: errors[0] };
    }

    generate_fen() {
        let empty = 0;
        let fen = '';

        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            if (this.board[i] === undefined) {
                empty++;
            } else {
                if (empty > 0) {
                    fen += empty;
                    empty = 0;
                }
                const color = this.board[i].color;
                const piece = this.board[i].type;

                fen += (color === Colour.WHITE) ?
                    piece.toUpperCase() : piece.toLowerCase();
            }

            if ((i + 1) & 0x88) {
                if (empty > 0) {
                    fen += empty;
                }

                if (i !== this.SQUARES.h1) {
                    fen += '/';
                }

                empty = 0;
                i += 8;
            }
        }

        let cflags = '';
        if (this.castling[Colour.WHITE] & this.BITS.KSIDE_CASTLE) { cflags += 'K'; }
        if (this.castling[Colour.WHITE] & this.BITS.QSIDE_CASTLE) { cflags += 'Q'; }
        if (this.castling[Colour.BLACK] & this.BITS.KSIDE_CASTLE) { cflags += 'k'; }
        if (this.castling[Colour.BLACK] & this.BITS.QSIDE_CASTLE) { cflags += 'q'; }

        /* do we have an empty castling flag? */
        cflags = cflags || '-';
        const epflags = (this.ep_square === this.EMPTY) ? '-' : this.algebraic(this.ep_square);

        return [fen, this.turn, cflags, epflags, this.half_moves, this.move_number].join(' ');
    }

    set_header(args) {
        for (let i = 0; i < args.length; i += 2) {
            if (typeof args[i] === 'string' &&
                typeof args[i + 1] === 'string') {
                this.header[args[i]] = args[i + 1];
            }
        }
        return this.header;
    }

    /* called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object.  if the FEN is
     * equal to the default position, the SetUp and FEN are deleted
     * the setup is only updated if history.length is zero, ie moves haven't been
     * made.
     */
    update_setup(fen) {
        if (history.length > 0) { return; }

        if (fen !== this.DEFAULT_POSITION) {
            this.header['SetUp'] = '1';
            this.header['FEN'] = fen;
        } else {
            delete this.header['SetUp'];
            delete this.header['FEN'];
        }
    }

    public get(square) {
        const piece = this.board[this.SQUARES[square]];
        return (piece) ? { type: piece.type, color: piece.color } : undefined;
    }

    public put(piece, square) {
        /* check for valid piece object */
        if (!('type' in piece && 'color' in piece)) {
            return false;
        }

        /* check for piece */
        if (this.SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
            return false;
        }

        /* check for valid square */
        if (!(square in this.SQUARES)) {
            return false;
        }

        const sq = this.SQUARES[square];

        /* don't let the user place more than one king */
        if (piece.type === PieceType.KING &&
            !(this.kings[piece.color] === this.EMPTY || this.kings[piece.color] === sq)) {
            return false;
        }

        this.board[sq] = { type: piece.type, color: piece.color };
        if (piece.type === PieceType.KING) {
            this.kings[piece.color] = sq;
        }

        this.update_setup(this.generate_fen());
        return true;
    }

    public remove(square) {
        const piece = this.get(square);
        this.board[this.SQUARES[square]] = undefined;
        if (piece && piece.type === PieceType.KING) {
            this.kings[piece.color] = this.EMPTY;
        }

        this.update_setup(this.generate_fen());
        return piece;
    }

    build_move(board, from, to, flags, promotion?) {
        const move = {
            color: this.turn,
            from: from,
            to: to,
            flags: flags,
            piece: board[from].type,
            // dgm: these needed to exist for typescript
            promotion: undefined,
            captured: undefined
        };

        if (promotion) {
            move.flags |= this.BITS.PROMOTION;
            move.promotion = promotion;
        }

        if (board[to]) {
            move.captured = board[to].type;
        } else if (flags & this.BITS.EP_CAPTURE) {
            move.captured = PieceType.PAWN;
        }
        return move;
    }

    private add_move(board, moves, from, to, flags) {
        /* if pawn promotion */
        if (board[from].type === PieceType.PAWN &&
            (this.rank(to) === this.RANK_8 || this.rank(to) === this.RANK_1)) {
            const pieces = [PieceType.QUEEN, PieceType.ROOK, PieceType.BISHOP, PieceType.KNIGHT];
            for (let i = 0, len = pieces.length; i < len; i++) {
                moves.push(this.build_move(board, from, to, flags, pieces[i]));
            }
        } else {
            moves.push(this.build_move(board, from, to, flags));
        }
    }

    generate_moves(options?) {


        const moves = [];
        const us = this.turn;
        const them = this.swap_color(us);
        const second_rank = { b: this.RANK_7, w: this.RANK_2 };

        let first_sq = this.SQUARES.a8;
        let last_sq = this.SQUARES.h1;
        let single_square = false;

        /* do we want legal moves? */
        const legal = (typeof options !== 'undefined' && 'legal' in options) ?
            options.legal : true;

        /* are we generating moves for a single square? */
        if (typeof options !== 'undefined' && 'square' in options) {
            if (options.square in this.SQUARES) {
                first_sq = last_sq = this.SQUARES[options.square];
                single_square = true;
            } else {
                /* invalid square */
                return [];
            }
        }

        for (let i = first_sq; i <= last_sq; i++) {
            /* did we run off the end of the board */
            if (i & 0x88) { i += 7; continue; }

            const piece = this.board[i];
            if (piece === undefined || piece.color !== us) {
                continue;
            }

            if (piece.type === PieceType.PAWN) {
                /* single square, non-capturing */
                const square1 = i + this.PAWN_OFFSETS[us][0];
                if (this.board[square1] === undefined) {
                    this.add_move(this.board, moves, i, square1, this.BITS.NORMAL);

                    /* double square */
                    const square = i + this.PAWN_OFFSETS[us][1];
                    if (second_rank[us] === this.rank(i) && this.board[square] === undefined) {
                        this.add_move(this.board, moves, i, square, this.BITS.BIG_PAWN);
                    }
                }

                /* pawn captures */
                for (let j = 2; j < 4; j++) {
                    const square = i + this.PAWN_OFFSETS[us][j];
                    if (square & 0x88) { continue; }

                    if (this.board[square] !== undefined &&
                        this.board[square].color === them) {
                        this.add_move(this.board, moves, i, square, this.BITS.CAPTURE);
                    } else if (square === this.ep_square) {
                        this.add_move(this.board, moves, i, this.ep_square, this.BITS.EP_CAPTURE);
                    }
                }
            } else {
                for (let j = 0, len = this.PIECE_OFFSETS[piece.type].length; j < len; j++) {
                    const offset = this.PIECE_OFFSETS[piece.type][j];
                    let square = i;

                    while (true) {
                        square += offset;
                        if (square & 0x88) { break; }

                        if (this.board[square] === undefined) {
                            this.add_move(this.board, moves, i, square, this.BITS.NORMAL);
                        } else {
                            if (this.board[square].color === us) { break; }
                            this.add_move(this.board, moves, i, square, this.BITS.CAPTURE);
                            break;
                        }

                        /* break, if knight or king */
                        if (piece.type === 'n' || piece.type === 'k') { break; }
                    }
                }
            }
        }

        /* check for castling if: a) we're generating all moves, or b) we're doing
         * single square move generation on the king's square
         */
        if ((!single_square) || last_sq === this.kings[us]) {
            /* king-side castling */
            if (this.castling[us] & this.BITS.KSIDE_CASTLE) {
                const castling_from = this.kings[us];
                const castling_to = castling_from + 2;

                if (this.board[castling_from + 1] === undefined &&
                    this.board[castling_to] === undefined &&
                    !this.attacked(them, this.kings[us]) &&
                    !this.attacked(them, castling_from + 1) &&
                    !this.attacked(them, castling_to)) {
                    this.add_move(this.board, moves, this.kings[us], castling_to,
                        this.BITS.KSIDE_CASTLE);
                }
            }

            /* queen-side castling */
            if (this.castling[us] & this.BITS.QSIDE_CASTLE) {
                const castling_from = this.kings[us];
                const castling_to = castling_from - 2;

                if (this.board[castling_from - 1] === undefined &&
                    this.board[castling_from - 2] === undefined &&
                    this.board[castling_from - 3] === undefined &&
                    !this.attacked(them, this.kings[us]) &&
                    !this.attacked(them, castling_from - 1) &&
                    !this.attacked(them, castling_to)) {
                    this.add_move(this.board, moves, this.kings[us], castling_to,
                        this.BITS.QSIDE_CASTLE);
                }
            }
        }

        /* return all pseudo-legal moves (this includes moves that allow the king
         * to be captured)
         */
        if (!legal) {
            return moves;
        }

        /* filter out illegal moves */
        const legal_moves = [];
        for (let i = 0, len = moves.length; i < len; i++) {
            this.make_move(moves[i]);
            if (!this.king_attacked(us)) {
                legal_moves.push(moves[i]);
            }
            this.undo_move();
        }

        return legal_moves;
    }

    /* convert a move from 0x88 coordinates to Standard Algebraic Notation
     * (SAN)
     *
     * @param {boolean} sloppy Use the sloppy SAN generator to work around over
     * disambiguation bugs in Fritz and Chessbase.  See below:
     *
     * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
     * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
     * 4. ... Ne7 is technically the valid SAN
     */
    move_to_san(move, sloppy?) {

        let output = '';

        if (move.flags & this.BITS.KSIDE_CASTLE) {
            output = 'O-O';
        } else if (move.flags & this.BITS.QSIDE_CASTLE) {
            output = 'O-O-O';
        } else {
            const disambiguator = this.get_disambiguator(move, sloppy);

            if (move.piece !== PieceType.PAWN) {
                output += move.piece.toUpperCase() + disambiguator;
            }

            if (move.flags & (this.BITS.CAPTURE | this.BITS.EP_CAPTURE)) {
                if (move.piece === PieceType.PAWN) {
                    output += this.algebraic(move.from)[0];
                }
                output += 'x';
            }

            output += this.algebraic(move.to);

            if (move.flags & this.BITS.PROMOTION) {
                output += '=' + move.promotion.toUpperCase();
            }
        }

        this.make_move(move);
        if (this.in_check()) {
            if (this.in_checkmate()) {
                output += '#';
            } else {
                output += '+';
            }
        }
        this.undo_move();

        return output;
    }

    // parses all of the decorators out of a SAN string
    stripped_san(move) {
        return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '');
    }

    attacked(color, square) {
        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            /* did we run off the end of the board */
            if (i & 0x88) { i += 7; continue; }

            /* if empty square or wrong color */
            if (this.board[i] === undefined || this.board[i].color !== color) { continue; }

            const piece = this.board[i];
            const difference = i - square;
            const index = difference + 119;

            if (this.ATTACKS[index] & (1 << this.SHIFTS[piece.type])) {
                if (piece.type === PieceType.PAWN) {
                    if (difference > 0) {
                        if (piece.color === Colour.WHITE) { return true; }
                    } else {
                        if (piece.color === Colour.BLACK) { return true; }
                    }
                    continue;
                }

                /* if the piece is a knight or a king */
                if (piece.type === 'n' || piece.type === 'k') { return true; }

                const offset = this.RAYS[index];
                let j = i + offset;

                let blocked = false;
                while (j !== square) {
                    if (this.board[j] !== undefined) { blocked = true; break; }
                    j += offset;
                }

                if (!blocked) { return true; }
            }
        }

        return false;
    }

    king_attacked(color) {
        return this.attacked(this.swap_color(color), this.kings[color]);
    }

    public in_check() {
        return this.king_attacked(this.turn);
    }

    public in_checkmate() {
        return this.in_check() && this.generate_moves().length === 0;
    }

    public in_stalemate() {
        return !this.in_check() && this.generate_moves().length === 0;
    }

    public insufficient_material() {
        const pieces = {};
        const bishops = [];
        let num_pieces = 0;
        let sq_color = 0;

        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            sq_color = (sq_color + 1) % 2;
            if (i & 0x88) { i += 7; continue; }

            const piece = this.board[i];
            if (piece) {
                pieces[piece.type] = (piece.type in pieces) ?
                    pieces[piece.type] + 1 : 1;
                if (piece.type === PieceType.BISHOP) {
                    bishops.push(sq_color);
                }
                num_pieces++;
            }
        }

        /* k vs. k */
        if (num_pieces === 2) { return true; } else if (num_pieces === 3 && (pieces[PieceType.BISHOP] === 1 ||
            pieces[PieceType.KNIGHT] === 1)) { return true; } else if (num_pieces === pieces[PieceType.BISHOP] + 2) {
            let sum = 0;
            const len = bishops.length;
            for (let i = 0; i < len; i++) {
                sum += bishops[i];
            }
            if (sum === 0 || sum === len) { return true; }
        }

        return false;
    }

    public in_threefold_repetition() {
        /* TODO: while this function is fine for casual use, a better
         * implementation would use a Zobrist key (instead of FEN). the
         * Zobrist key would be maintained in the make_move/undo_move functions,
         * avoiding the costly that we do below.
         */
        const moves = [];
        const positions = {};
        let repetition = false;

        while (true) {
            const move = this.undo_move();
            if (!move) { break; }
            moves.push(move);
        }

        while (true) {
            /* remove the last two fields in the FEN string, they're not needed
             * when checking for draw by rep */
            const fen = this.generate_fen().split(' ').slice(0, 4).join(' ');

            /* has the position occurred three or move times */
            positions[fen] = (fen in positions) ? positions[fen] + 1 : 1;
            if (positions[fen] >= 3) {
                repetition = true;
            }

            if (!moves.length) {
                break;
            }
            this.make_move(moves.pop());
        }

        return repetition;
    }

    push(move) {
        this.history.push({
            move: move,
            kings: { b: this.kings.b, w: this.kings.w },
            turn: this.turn,
            castling: { b: this.castling.b, w: this.castling.w },
            ep_square: this.ep_square,
            half_moves: this.half_moves,
            move_number: this.move_number
        });
    }

    make_move(move) {
        const us: Colour = this.turn;
        const them = this.swap_color(us);
        this.push(move);

        this.board[move.to] = this.board[move.from];
        this.board[move.from] = undefined;

        /* if ep capture, remove the captured pawn */
        if (move.flags & this.BITS.EP_CAPTURE) {
            if (this.turn === Colour.BLACK) {
                this.board[move.to - 16] = undefined;
            } else {
                this.board[move.to + 16] = undefined;
            }
        }

        /* if pawn promotion, replace with new piece */
        if (move.flags & this.BITS.PROMOTION) {
            this.board[move.to] = { type: move.promotion, color: us };
        }

        /* if we moved the king */
        if (this.board[move.to].type === PieceType.KING) {
            this.kings[this.board[move.to].color] = move.to;

            /* if we castled, move the rook next to the king */
            if (move.flags & this.BITS.KSIDE_CASTLE) {
                const castling_to = move.to - 1;
                const castling_from = move.to + 1;
                this.board[castling_to] = this.board[castling_from];
                this.board[castling_from] = undefined;
            } else if (move.flags & this.BITS.QSIDE_CASTLE) {
                const castling_to2 = move.to + 1;
                const castling_from2 = move.to - 2;
                this.board[castling_to2] = this.board[castling_from2];
                this.board[castling_from2] = undefined;
            }

            /* turn off castling */
            this.castling[us] = '';
        }

        /* turn off castling if we move a rook */
        if (this.castling[us]) {
            for (let i = 0, len = this.ROOKS[us].length; i < len; i++) {
                if (move.from === this.ROOKS[us][i].square &&
                    this.castling[us] & this.ROOKS[us][i].flag) {
                    this.castling[us] ^= this.ROOKS[us][i].flag;
                    break;
                }
            }
        }

        /* turn off castling if we capture a rook */
        if (this.castling[them]) {
            for (let i = 0, len = this.ROOKS[them].length; i < len; i++) {
                if (move.to === this.ROOKS[them][i].square &&
                    this.castling[them] & this.ROOKS[them][i].flag) {
                    this.castling[them] ^= this.ROOKS[them][i].flag;
                    break;
                }
            }
        }

        /* if big pawn move, update the en passant square */
        if (move.flags & this.BITS.BIG_PAWN) {
            if (this.turn === 'b') {
                this.ep_square = move.to - 16;
            } else {
                this.ep_square = move.to + 16;
            }
        } else {
            this.ep_square = this.EMPTY;
        }

        /* reset the 50 move counter if a pawn is moved or a piece is captured */
        if (move.piece === PieceType.PAWN) {
            this.half_moves = 0;
        } else if (move.flags & (this.BITS.CAPTURE | this.BITS.EP_CAPTURE)) {
            this.half_moves = 0;
        } else {
            this.half_moves++;
        }

        if (this.turn === Colour.BLACK) {
            this.move_number++;
        }
        this.turn = this.swap_color(this.turn);
    }

    undo_move() {
        const old = this.history.pop();
        if (old === undefined) { return undefined; }

        const move = old.move;
        this.kings = old.kings;
        this.turn = old.turn;
        this.castling = old.castling;
        this.ep_square = old.ep_square;
        this.half_moves = old.half_moves;
        this.move_number = old.move_number;

        const us = this.turn;
        const them = this.swap_color(this.turn);

        this.board[move.from] = this.board[move.to];
        this.board[move.from].type = move.piece;  // to undo any promotions
        this.board[move.to] = undefined;

        if (move.flags & this.BITS.CAPTURE) {
            this.board[move.to] = { type: move.captured, color: them };
        } else if (move.flags & this.BITS.EP_CAPTURE) {
            let index;
            if (us === Colour.BLACK) {
                index = move.to - 16;
            } else {
                index = move.to + 16;
            }
            this.board[index] = { type: PieceType.PAWN, color: them };
        }


        if (move.flags & (this.BITS.KSIDE_CASTLE | this.BITS.QSIDE_CASTLE)) {
            let castling_to, castling_from;
            if (move.flags & this.BITS.KSIDE_CASTLE) {
                castling_to = move.to + 1;
                castling_from = move.to - 1;
            } else if (move.flags & this.BITS.QSIDE_CASTLE) {
                castling_to = move.to - 2;
                castling_from = move.to + 1;
            }

            this.board[castling_to] = this.board[castling_from];
            this.board[castling_from] = undefined;
        }
        return move;
    }

    /* this function is used to uniquely identify ambiguous moves */
    get_disambiguator(move, sloppy) {
        const moves = this.generate_moves({ legal: !sloppy });

        const from = move.from;
        const to = move.to;
        const piece = move.piece;

        let ambiguities = 0;
        let same_rank = 0;
        let same_file = 0;

        for (let i = 0, len = moves.length; i < len; i++) {
            const ambig_from = moves[i].from;
            const ambig_to = moves[i].to;
            const ambig_piece = moves[i].piece;

            /* if a move of the same piece type ends on the same to square, we'll
             * need to add a disambiguator to the algebraic notation
             */
            if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
                ambiguities++;

                if (this.rank(from) === this.rank(ambig_from)) {
                    same_rank++;
                }

                if (this.file(from) === this.file(ambig_from)) {
                    same_file++;
                }
            }
        }

        if (ambiguities > 0) {
            /* if there exists a similar moving piece on the same rank and file as
             * the move in question, use the square as the disambiguator
             */
            if (same_rank > 0 && same_file > 0) {
                return this.algebraic(from);
            } else if (same_file > 0) {
                return this.algebraic(from).charAt(1);
            } else {
                return this.algebraic(from).charAt(0);
            }
        }

        return '';
    }

    public ascii() {
        let s = '   +------------------------+\n';
        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            /* display the rank */
            if (this.file(i) === 0) {
                s += ' ' + '87654321'[this.rank(i)] + ' |';
            }

            /* empty piece */
            if (this.board[i] === undefined) {
                s += ' . ';
            } else {
                const piece = this.board[i].type;
                const color = this.board[i].color;
                const symbol = (color === Colour.WHITE) ?
                    piece.toUpperCase() : piece.toLowerCase();
                s += ' ' + symbol + ' ';
            }

            if ((i + 1) & 0x88) {
                s += '|\n';
                i += 8;
            }
        }
        s += '   +------------------------+\n';
        s += '     a  b  c  d  e  f  g  h\n';

        return s;
    }

    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    move_from_san(move, sloppy) {
        // strip off any move decorations: e.g Nf3+?!
        const clean_move = this.stripped_san(move);

        // if we're using the sloppy parser run a regex to grab piece, to, and from
        // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
        const matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
        let piece;
        let from;
        let to;
        let promotion;
        if (sloppy) {
            if (matches) {
                piece = matches[1];
                from = matches[2];
                to = matches[3];
                promotion = matches[4];
            }
        }

        const moves = this.generate_moves();
        for (let i = 0, len = moves.length; i < len; i++) {
            // try the strict parser first, then the sloppy parser if requested
            // by the user
            if ((clean_move === this.stripped_san(this.move_to_san(moves[i]))) ||
                (sloppy && clean_move === this.stripped_san(this.move_to_san(moves[i], true)))) {
                return moves[i];
            } else {
                if (matches &&
                    (!piece || piece.toLowerCase() === moves[i].piece) &&
                    this.SQUARES[from] === moves[i].from &&
                    this.SQUARES[to] === moves[i].to &&
                    (!promotion || promotion.toLowerCase() === moves[i].promotion)) {
                    return moves[i];
                }
            }
        }

        return undefined;
    }


    /*****************************************************************************
     * UTILITY FUNCTIONS
     ****************************************************************************/
    rank(i) {
        return i >> 4;
    }

    file(i) {
        return i & 15;
    }

    algebraic(i) {
        const f = this.file(i), r = this.rank(i);
        return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1);
    }

    swap_color(c) {
        return c === Colour.WHITE ? Colour.BLACK : Colour.WHITE;
    }

    is_digit(c) {
        return '0123456789'.indexOf(c) !== -1;
    }

    /* pretty = external move object */
    make_pretty(ugly_move) {
        const move = this.clone(ugly_move);
        move.san = this.move_to_san(move, false);
        move.to = this.algebraic(move.to);
        move.from = this.algebraic(move.from);

        let flags = '';

        for (const flag in this.BITS) {
            if (this.BITS[flag] & move.flags) {
                flags += this.FLAGS[flag];
            }
        }
        move.flags = flags;

        return move;
    }

    clone(obj) {
        const dupe: any = (obj instanceof Array) ? [] : {};

        for (const property in obj) {
            if (typeof property === 'object') {
                dupe[property] = this.clone(obj[property]);
            } else {
                dupe[property] = obj[property];
            }
        }

        return dupe;
    }

    trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }

    /*****************************************************************************
     * DEBUGGING UTILITIES
     ****************************************************************************/
    public perft(depth) {
        const moves = this.generate_moves({ legal: false });
        let nodes = 0;
        const color = this.turn;

        for (let i = 0, len = moves.length; i < len; i++) {
            this.make_move(moves[i]);
            if (!this.king_attacked(color)) {
                if (depth - 1 > 0) {
                    const child_nodes = this.perft(depth - 1);
                    nodes += child_nodes;
                } else {
                    nodes++;
                }
            }
            this.undo_move();
        }

        return nodes;
    }

    public getSquares() {
        /* from the ECMA-262 spec (section 12.6.4):
         * "The mechanics of enumerating the properties ... is
         * implementation dependent"
         * so: for (var sq in SQUARES) { keys.push(sq); } might not be
         * ordered correctly
         */
        const keys = [];
        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            if (i & 0x88) { i += 7; continue; }
            keys.push(this.algebraic(i));
        }
        return keys;
    }

    public getMoves(options) {
        /* The internal representation of a chess move is in 0x88 format, and
                 * not meant to be human-readable.  The code below converts the 0x88
                 * square coordinates to algebraic coordinates.  It also prunes an
                 * unnecessary move keys resulting from a verbose call.
                 */

        const ugly_moves = this.generate_moves(options);
        const moves = [];

        for (let i = 0, len = ugly_moves.length; i < len; i++) {

            /* does the user want a full move object (most likely not), or just
             * SAN
             */
            if (typeof options !== 'undefined' && 'verbose' in options &&
                options.verbose) {
                moves.push(this.make_pretty(ugly_moves[i]));
            } else {
                moves.push(this.move_to_san(ugly_moves[i], false));
            }
        }

        return moves;
    }

    public get in_draw() {
        return this.half_moves >= 100 ||
            this.in_stalemate() ||
            this.insufficient_material() ||
            this.in_threefold_repetition();
    }

    public get game_over() {
        return this.half_moves >= 100 ||
            this.in_checkmate() ||
            this.in_stalemate() ||
            this.insufficient_material() ||
            this.in_threefold_repetition();
    }

    public get fen() {
        return this.generate_fen();
    }

    public getPgn(options) {
        /* using the specification from http://www.chessclub.com/help/PGN-spec
                 * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
                 */
        const newline = (typeof options === 'object' &&
            typeof options.newline_char === 'string') ?
            options.newline_char : '\n';
        const max_width = (typeof options === 'object' &&
            typeof options.max_width === 'number') ?
            options.max_width : 0;
        const result = [];
        let header_exists = false;

        /* add the PGN header headerrmation */
        for (const i in this.header) {
            /* TODO: order of enumerated properties in header object is not
             * guaranteed, see ECMA-262 spec (section 12.6.4)
             */
            result.push('[' + i + ' \"' + this.header[i] + '\"]' + newline);
            header_exists = true;
        }

        if (header_exists && history.length) {
            result.push(newline);
        }

        /* pop all of history onto reversed_history */
        const reversed_history = [];
        while (history.length > 0) {
            reversed_history.push(this.undo_move());
        }

        const moves = [];
        let move_string = '';

        /* build the list of moves.  a move_string looks like: "3. e3 e6" */
        while (reversed_history.length > 0) {
            const move = reversed_history.pop();

            /* if the position started with black to move, start PGN with 1. ... */
            if (!history.length && move.color === 'b') {
                move_string = this.move_number + '. ...';
            } else if (move.color === 'w') {
                /* store the previous generated move_string if we have one */
                if (move_string.length) {
                    moves.push(move_string);
                }
                move_string = this.move_number + '.';
            }

            move_string = move_string + ' ' + this.move_to_san(move, false);
            this.make_move(move);
        }

        /* are there any other leftover moves? */
        if (move_string.length) {
            moves.push(move_string);
        }

        /* is there a result? */
        if (typeof this.header.Result !== 'undefined') {
            moves.push(this.header.Result);
        }

        /* history should be back to what is was before we started generating PGN,
         * so join together moves
         */
        if (max_width === 0) {
            return result.join('') + moves.join(' ');
        }

        /* wrap the PGN output at max_width */
        let current_width = 0;
        for (let i2 = 0; i2 < moves.length; i2++) {
            /* if the current move will push past max_width */
            if (current_width + moves[i2].length > max_width && i2 !== 0) {

                /* don't end the line with whitespace */
                if (result[result.length - 1] === ' ') {
                    result.pop();
                }

                result.push(newline);
                current_width = 0;
            } else if (i2 !== 0) {
                result.push(' ');
                current_width++;
            }
            result.push(moves[i2]);
            current_width += moves[i2].length;
        }

        return result.join('');
    }

    public load_pgn(pgn, options) {
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        const sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
            options.sloppy : false;

        function mask(str) {
            return str.replace(/\\/g, '\\');
        }

        function has_keys(object) {
            for (const key in object) {
                return true;
            }
            return false;
        }

        function parse_pgn_header(header, hOptions) {
            const hNewline_char = (typeof hOptions === 'object' &&
                typeof hOptions.newline_char === 'string') ?
                hOptions.newline_char : '\r?\n';
            const header_obj = {};
            const lHeaders = header.split(new RegExp(mask(hNewline_char)));
            let key = '';
            let value = '';

            for (let i = 0; i < lHeaders.length; i++) {
                key = lHeaders[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
                value = lHeaders[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, '$1');
                if (this.trim(key).length > 0) {
                    header_obj[key] = value;
                }
            }

            return header_obj;
        }

        const newline_char = (typeof options === 'object' &&
            typeof options.newline_char === 'string') ?
            options.newline_char : '\r?\n';
        const regex = new RegExp('^(\\[(.|' + mask(newline_char) + ')*\\])' +
            '(' + mask(newline_char) + ')*' +
            '1.(' + mask(newline_char) + '|.)*$', 'g');

        /* get header part of the PGN file */
        let header_string = pgn.replace(regex, '$1');

        /* no info part given, begins with moves */
        if (header_string[0] !== '[') {
            header_string = '';
        }

        this.reset();

        /* parse PGN header */
        const headers = parse_pgn_header(header_string, options);
        for (const key in headers) {
            this.set_header([key, headers[key]]);
        }

        /* load the starting position indicated by [Setup '1'] and
        * [FEN position] */
        if (headers['SetUp'] === '1') {
            if (!(('FEN' in headers) && this.load(headers['FEN']))) {
                return false;
            }
        }

        /* delete header to get the moves */
        let ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char), 'g'), ' ');

        /* delete comments */
        ms = ms.replace(/(\{[^}]+\})+?/g, '');

        /* delete recursive annotation variations */
        const rav_regex = /(\([^\(\)]+\))+?/g;
        while (rav_regex.test(ms)) {
            ms = ms.replace(rav_regex, '');
        }

        /* delete move numbers */
        ms = ms.replace(/\d+\.(\.\.)?/g, '');

        /* delete ... indicating black to move */
        ms = ms.replace(/\.\.\./g, '');

        /* delete numeric annotation glyphs */
        ms = ms.replace(/\$\d+/g, '');

        /* trim and get array of moves */
        let moves = this.trim(ms).split(new RegExp(/\s+/));

        /* delete empty entries */
        moves = moves.join(',').replace(/,,+/g, ',').split(',');
        let move = '';

        for (let half_move = 0; half_move < moves.length - 1; half_move++) {
            move = this.move_from_san(moves[half_move], sloppy);

            /* move not possible! (don't clear the board to examine to show the
             * latest valid position)
             */
            if (move === undefined) {
                return false;
            } else {
                this.make_move(move);
            }
        }

        /* examine last move */
        move = moves[moves.length - 1];
        if (this.POSSIBLE_RESULTS.indexOf(move) > -1) {
            if (has_keys(this.header) && typeof this.header.Result === 'undefined') {
                this.set_header(['Result', move]);
            }
        } else {
            move = this.move_from_san(move, sloppy);
            if (move === undefined) {
                return false;
            } else {
                this.make_move(move);
            }
        }
        return true;
    }

    public getHeader() {
        return this.set_header(arguments);
    }

    public move(move: Move | string, options?) {
        /* The move function can be called with in the following parameters:
                 *
                 * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
                 *
                 * .move({ from: 'h7', <- where the 'move' is a move object (additional
                 *         to :'h8',      fields are ignored)
                 *         promotion: 'q',
                 *      })
                 */

        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        const sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
            options.sloppy : false;

        let move_obj;

        if (typeof move === 'string') {
            move_obj = this.move_from_san(move, sloppy);
        } else if (typeof move === 'object') {
            const moves = this.generate_moves();

            /* convert the pretty move object to an ugly move object */
            for (let i = 0, len = moves.length; i < len; i++) {
                if (move.from === this.algebraic(moves[i].from) &&
                    move.to === this.algebraic(moves[i].to) &&
                    (!('promotion' in moves[i]) ||
                        move.promotion === moves[i].promotion)) {
                    move_obj = moves[i];
                    break;
                }
            }
        }

        /* failed to find move */
        if (!move_obj) {
            return undefined;
        }

        /* need to make a copy of move because we can't generate SAN after the
         * move is made
         */
        const pretty_move = this.make_pretty(move_obj);

        this.make_move(move_obj);
        this.onChange.emit();
        return pretty_move;
    }

    public undo() {
        const move = this.undo_move();
        this.onChange.emit();
        return (move) ? this.make_pretty(move) : undefined;
    }

    public square_color(square) {
        if (square in this.SQUARES) {
            const sq_0x88 = this.SQUARES[square];
            return ((this.rank(sq_0x88) + this.file(sq_0x88)) % 2 === 0) ? 'light' : 'dark';
        }

        return undefined;
    }

    public getHistory(options) {
        const reversed_history = [];
        const move_history = [];
        const verbose = (typeof options !== 'undefined' && 'verbose' in options &&
            options.verbose);

        while (history.length > 0) {
            reversed_history.push(this.undo_move());
        }

        while (reversed_history.length > 0) {
            const move = reversed_history.pop();
            if (verbose) {
                move_history.push(this.make_pretty(move));
            } else {
                move_history.push(this.move_to_san(move));
            }
            this.make_move(move);
        }

        return move_history;
    }

} // End of Chess class

export class FenValidationResult {
    // { valid: true, error_number: 0, error: errors[0] };
    valid: boolean;
    error_number: number;
    error: string;
}

export class ChessPiece {
    color;
    type;
}

// enum Colour {
//     WHITE = 'w',
//     BLACK = 'b'
// }

class Castling {
    w: any;
    b: any;
}



