import {Component, OnInit} from "@angular/core";
import {Child, Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                    [items]="passengers"
            ></passenger-count>
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

    constructor() {
        this.title = ''
    }

    ngOnInit() {
        this.passengers = [{
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkedDate: 1491606000000,
            children: null
        }, {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkedDate: null,
            children: [{name: 'Ted', age: 12}, {name: 'Chloe', age: 7}]
        }, {
            id: 4,
            fullname: 'Louise',
            checkedIn: true,
            checkedDate: 1491606000000,
            children: [{name: 'Tobe', age: 12}]
        }, {
            id: 5,
            fullname: 'Mark',
            checkedIn: false,
            checkedDate: 1491606000000
        }
        ]
    }

    handleRemove(event) {

        console.log(event)
    }

    handleEdit(event) {
        console.log(event)
    }
}