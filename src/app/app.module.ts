import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IphoneXComponent } from './iphoneX/iphoneX.component';
import { MacComponent } from './mac/mac.component';
import { IpadComponent } from './ipad/ipad.component';
import { RedcrossComponent } from './redcross/redcross.component';
import { AppleWatchComponent } from './apple-watch/apple-watch.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { PromotionSectionComponent } from './promotion-section/promotion-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IphoneXComponent,
    MacComponent,
    IpadComponent,
    RedcrossComponent,
    AppleWatchComponent,
    WelcomeComponent,
    PromotionSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
