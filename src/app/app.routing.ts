import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MacComponent } from './mac/mac.component';
import { IpadComponent } from './ipad/ipad.component';
import { IphoneXComponent } from './iphoneX/iphoneX.component';
import { PromotionSectionComponent } from './promotion-section/promotion-section.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'mac',
    component: MacComponent
  },
  {
    path: 'ipad',
    component: IpadComponent
  },
  {
    path: 'iphoneX',
    component: IphoneXComponent
  },
  {
    path: 'promotion-section',
    component: PromotionSectionComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
