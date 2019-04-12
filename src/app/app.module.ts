import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { StyleComponent } from './style/style.component';
import {FormsModule} from '@angular/forms';
import { RainbowDirective } from './rainbow.directive';
import { PipetestPipe } from './pipetest.pipe';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ListrouteComponent } from './listroute/listroute.component';
import { DetailcvComponent } from './detailcv/detailcv.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from '@angular/common/http';
import { AddpersonComponent } from './addperson/addperson.component';
import { SearchComponent } from './search/search.component';
import {AuthenticationInterceptorProvider} from './intercepteurs/login.service';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    StyleComponent,
    RainbowDirective,
    PipetestPipe,
    TodoComponent,
    EmbaucheComponent,
    LoginComponent,
    HeaderComponent,
    ListrouteComponent,
    DetailcvComponent,
    ObservableComponent,
    HttpComponent,
    AddpersonComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthenticationInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
