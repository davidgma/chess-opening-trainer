import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService, Sequence } from '../data.service';
import { MatTable } from '@angular/material';
import {Router} from '@angular/router';

@Component({
    selector: 'app-moves',
    templateUrl: './moves.component.html',
    styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
    public dataSource: Array<Sequence> = new Array<Sequence>();
    displayedColumns: string[] = ['name', 'practice'];
    @ViewChild(MatTable) table: MatTable<any>;

    constructor(public dataService: DataService, private router: Router) {
        this.dataSource = dataService.sequencies;

    }

    ngOnInit() {
        console.log('datasource.length: ' + this.dataSource.length);
    }

    practice(seq: Sequence): void {
        console.log('practice sequence ' + seq.name + '...');
        this.router.navigate(['/trainer',
        {name: seq.name, header: 'showHeader'}]);
    }


} // End of class MovesComponent
