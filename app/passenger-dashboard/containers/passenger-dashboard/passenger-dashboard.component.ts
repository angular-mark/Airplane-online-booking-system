import {Component, OnInit} from "@angular/core";
import {Child, Passenger } from '../../models/passenger-dashboard.interface'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <passenger-count></passenger-count>
            <passenger-detail></passenger-detail>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index">
        <span class="status"
              [class.checked-in]="passenger.checkedIn"
        ></span>
                    {{i}}:{{ passenger.fullname }}
                    <div class="date">
                        Check in date: {{ passenger.checkedDate | date: 'yMMMd' | uppercase}}
                    </div>
                    <div class="children">
                        <!--// here we use Safe Navigation Operator to aviod children propery error caused by random vacancy-->
                        Children: {{passenger.children?.length || 0}}
                    </div>
                </li>
            </ul>
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

    handleBlur($event): void {
        console.log($event.target.value)
    }
}