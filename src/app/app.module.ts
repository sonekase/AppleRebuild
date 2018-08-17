import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IphoneXComponent } from './iphoneX/iphoneX.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IphoneXComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
