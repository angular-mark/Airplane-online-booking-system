import {Passenger} from "./models/passenger.interface";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable() // tell Angular, we can inject things into constructor
export class PassengereDashboardService {
    constructor(private http: Http) {
        console.log(this.http)
    }

    getPassengers(): Passenger[] {
        return [{
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
        }]
    }
}