import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OeuvreComponent } from './oeuvre/oeuvre.component';
import { AppRoutingModule } from './app-routing.module';
import { LieuComponent } from './lieu/lieu.component';
import { UserComponent } from './user/user.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    OeuvreComponent,
    LieuComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
