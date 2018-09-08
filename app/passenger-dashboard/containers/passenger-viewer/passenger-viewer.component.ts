import {Component, OnInit} from "@angular/core";
import { PassengereDashboardService} from "../../passengere-dashboard.service";
import { Passenger} from "../../models/passenger.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
        <div>
            <button (click)="goBack()">Go back</button>
            <passenger-form
                    [detail]="passenger"
                    (update)="onUpdatePassenger($event)"
            ></passenger-form>
        </div> 
    `
})

export class PassengerViewerComponent implements OnInit{
    passenger: Passenger
    constructor(private router: Router,
                private route: ActivatedRoute,
                private passengerService: PassengereDashboardService) {

    }

    ngOnInit() {
        this.route.params
            .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
            .subscribe((data: Passenger) => this.passenger = data)
    }

    onUpdatePassenger(passenger: Passenger) {
        this.passengerService
            .updatePassengers(passenger)
            .subscribe((data: Passenger)  => {
                this.passenger = Object.assign({}, this.passenger, data)
            })
    }

    goBack() {
        this.router.navigate(['/passengers'])
    }

}