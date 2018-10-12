import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TrainerComponent } from './trainer.component';

const routes: Routes = [
  { path: 'simple', component: TrainerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class TrainerRoutingModule { }