import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  imports: [
    // angular module
    BrowserModule,
    FormsModule,
    // custom modules
    PassengerDashboardModule,
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
