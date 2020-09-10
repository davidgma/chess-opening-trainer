import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './builder.component';

const routes: Routes = [
  { path: 'builder', component: BuilderComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class BuilderRoutingModule { }
