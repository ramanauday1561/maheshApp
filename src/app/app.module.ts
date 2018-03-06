import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { BookNowComponent } from './book-now/book-now.component';
import { LiveTrackingComponent } from './live-tracking/live-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    BookNowComponent,
    LiveTrackingComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7U3hIcQq2BbPl4aU7fSSNcuQE89ZVg2c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
