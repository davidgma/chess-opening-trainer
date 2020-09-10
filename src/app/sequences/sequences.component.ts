import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../services/data.service';
import { Sequence} from '../shared-classes/sequence';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sequences',
    templateUrl: './sequences.component.html',
    styleUrls: ['./sequences.component.css']
})
export class SequencesComponent implements OnInit {
    public dataSource: DataService;
    displayedColumns: string[] = ['name', 'practice'];
    @ViewChild(MatTable, null) table: MatTable<any>;

    constructor(public dataService: DataService, private router: Router) {
        
    }

    ngOnInit() {
        this.dataSource = this.dataService;
    }

    practice(seq: Sequence): void {
        console.log('practice sequence ' + seq.name + '...');
        this.router.navigate(['/trainer',
        //{name: seq.name, header: 'showHeader'}]);
        {name: seq.name}]);
    }
    


} // End of class SequencesComponent
