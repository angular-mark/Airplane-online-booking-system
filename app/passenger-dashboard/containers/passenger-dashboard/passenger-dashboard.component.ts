import {Component, OnInit} from "@angular/core";
import {Child, Passenger } from '../../models/passenger.interface'
import {PassengereDashboardService} from "../../passengere-dashboard.service";

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
            ></passenger-detail>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit{
    passengers: Passenger[]
    title: string = ''

    constructor(private passengerService: PassengereDashboardService) {
        this.title = ''
    }

    ngOnInit() {
        this.passengers = this.passengerService.getPassengers()
    }

    handleRemove(event: Passenger) {
        this.passengers = this.passengers.filter((passenger: Passenger) =>
            event.id !== passenger.id
        )
    }

    handleEdit(event: Passenger) {
        this.passengers = this.passengers.map((passenger: Passenger) => {
            if (event.id === passenger.id) {
                passenger = {...passenger, ...event}
            }
            return passenger
        })
    }
}