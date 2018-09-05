import {Passenger} from "./models/passenger.interface";
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

const PASSENGER_API: string = '/api/passengers'
type ObPassenger = Observable<Passenger>

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
            .catch((error: any) => Observable.throw(error.json()))
    }

    updatePassengers(passenger: Passenger): ObPassenger {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'JwTestheader': 'test'
        })

        let options = new RequestOptions({
            headers
        })

        return this.http
            .put(PASSENGER_API + `/${passenger.id}`, passenger, options)
            .map((data: Response) => data.json())
            .catch((error: any) => Observable.throw(error.json()))
    }

    removePassengers(passenger: Passenger): ObPassenger {
        return this.http
            .delete(PASSENGER_API + `/${passenger.id}`)
            .map((data: Response) => data.json())
            .catch((error: any) => Observable.throw(error.json()))
    }
}