import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IphoneXComponent } from './iphoneX/iphoneX.component';
import { MacComponent } from './mac/mac.component';
import { IpadComponent } from './ipad/ipad.component';
import { RedcrossComponent } from './redcross/redcross.component';
import { AppleWatchComponent } from './apple-watch/apple-watch.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IphoneXComponent,
    MacComponent,
    IpadComponent,
    RedcrossComponent,
    AppleWatchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
