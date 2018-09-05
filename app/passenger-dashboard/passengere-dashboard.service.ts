import {Passenger} from "./models/passenger.interface";

export class PassengereDashboardService {
    constructor() {}

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