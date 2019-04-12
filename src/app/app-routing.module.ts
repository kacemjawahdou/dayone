import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {LoginComponent} from './login/login.component';
import {DetailcvComponent} from './detailcv/detailcv.component';
import {AddpersonComponent} from './addperson/addperson.component';

const routes: Routes = [
  {path: '', redirectTo: 'cv', pathMatch: 'full'},
  {path: 'cv', children: [

    {path: '', component: CvComponent},

    {path: ':id', component: DetailcvComponent},
    ],
  },
  {path: 'login' , component: LoginComponent},
  {path: 'todo' , component: TodoComponent},
  {path: ':add', component: AddpersonComponent},

  {path: '**', component: TodoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
