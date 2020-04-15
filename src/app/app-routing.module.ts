import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OeuvreComponent} from './oeuvre/oeuvre.component';
import {LieuComponent} from './lieu/lieu.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '', component: OeuvreComponent },
  { path: 'places', component: LieuComponent},
  { path: 'login', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
