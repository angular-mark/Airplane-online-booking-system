import {Component, OnInit} from "@angular/core";
import {Child, Passenger } from '../../models/passenger.interface'
import {PassengereDashboardService} from "../../passengere-dashboard.service";
import {Router} from "@angular/router";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                    [items]="passengers"
            ></passenger-count>
            <div *ngFor="let passenger of passengers">
                {{ passenger.fullname }}
            </div>
            <passenger-detail
                   *ngFor="let passenger of passengers" 
                   [detail]="passenger"
                   (remove)="handleRemove($event)"
                   (edit)="handleEdit($event)"
                   (view)="handleView($event)"
            ></passenger-detail>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit{
    passengers: Passenger[]
    title: string = ''

    constructor(
        private router: Router,
        private passengerService: PassengereDashboardService) {
        this.title = ''
    }

    ngOnInit() {
        this.passengerService.getPassengers()
            .subscribe((passengers: Passenger[]) => this.passengers = passengers,
                (error: any) => console.log(error.toString()))
    }

    handleRemove(event: Passenger) {
        this.passengerService.removePassengers(event).subscribe((passenger: Passenger) => {
            this.passengers = this.passengers.filter((passenger: Passenger) =>
                event.id !== passenger.id
            )
        })
    }

    handleEdit(event: Passenger) {
        this.passengerService.updatePassengers(event).subscribe((passenger: Passenger) =>{
            if(passenger.id === event.id)
            {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (event.id === passenger.id) {
                        passenger = {...passenger, ...event}
                    }
                    return passenger
                })
            }
        })
    }

    handleView(event: Passenger) {
        this.router.navigate(['/passengers', event.id])
    }
}