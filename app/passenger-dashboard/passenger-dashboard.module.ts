import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { HttpModule} from "@angular/http";

// containers
import {PassengerDashboardComponent} from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent} from "./containers/passenger-viewer/passenger-viewer.component";

// components
import {PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";

// service
import {PassengereDashboardService} from "./passengere-dashboard.service";

@NgModule({
  declarations: [
      //container
      PassengerDashboardComponent,
      PassengerViewerComponent,
      //component
      PassengerCountComponent,
      PassengerDetailComponent,
  ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers: [
        PassengereDashboardService
    ]
})

export class PassengerDashboardModule {

}
