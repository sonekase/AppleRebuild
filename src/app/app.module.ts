import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IphoneXComponent } from './iphoneX/iphoneX.component';
import { MacComponent } from './mac/mac.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IphoneXComponent,
    MacComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
