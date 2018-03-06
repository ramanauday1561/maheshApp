import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { BookNowComponent } from './book-now/book-now.component';
import { LiveTrackingComponent } from './live-tracking/live-tracking.component';

const appRoutes: Routes = [
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: 'home', component: HomePageComponent },
    { path: 'bookNow', component: BookNowComponent },
    { path: 'liveTracking', component: LiveTrackingComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);