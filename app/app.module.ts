import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from "./home.component";
import {FormsModule} from "@angular/forms";
import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'}
]
@NgModule({
  imports: [
    // angular module
    BrowserModule,
      RouterModule.forRoot(routes),
    FormsModule,
    // custom modules
    PassengerDashboardModule,
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
      HomeComponent,
  ]
})
export class AppModule {}
