import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  { path: 'list', component: ListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
