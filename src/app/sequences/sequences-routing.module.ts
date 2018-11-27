import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SequencesComponent } from './sequences.component';

const routes: Routes = [
  { path: 'sequences', component: SequencesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class SequencesRoutingModule { }
