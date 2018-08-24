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
import { PromoTwoComponent } from './promo-two/promo-two.component';
import { PromoThreeComponent } from './promo-three/promo-three.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    PromotionSectionComponent,
    PromoTwoComponent,
    PromoThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
