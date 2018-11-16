import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerComponent } from './trainer.component';

const routes: Routes = [
  { path: 'trainer/:name', component: TrainerComponent },
  { path: 'trainer', component: TrainerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class TrainerRoutingModule { }