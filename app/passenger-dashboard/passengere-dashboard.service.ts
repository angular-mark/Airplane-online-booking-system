import {Passenger} from "./models/passenger.interface";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

const PASSENGER_API: string = '/api/passengers'

@Injectable() // tell Angular, we can inject things into constructor,
// namely, this class is injectable
export class PassengereDashboardService {
    constructor(private http: Http) {
        console.log(this.http)
    }

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .map((response: Response) => response.json())
    }

    updatePassengers(passenger: Passenger): Observable<Passenger> {
        return this.http
            .put(PASSENGER_API + `/${passenger.id}`, passenger)
            .map((data: Response) => data.json())
    }

    removePassengers(passenger: Passenger): Observable<Passenger> {
        return this.http
            .delete(PASSENGER_API + `/${passenger.id}`)
            .map((data: Response) => data.json())
    }
}