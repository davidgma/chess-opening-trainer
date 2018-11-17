import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MovesComponent } from './moves.component';

const routes: Routes = [
  { path: 'moves', component: MovesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class MovesRoutingModule { }
