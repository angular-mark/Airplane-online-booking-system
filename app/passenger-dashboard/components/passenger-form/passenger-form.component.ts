import { Component, Input } from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>
            tt{{ detail | json }}
            <div>
                Passenger name:
                <input
                type="text"
                name="fullname"
                required
                #fullname="ngModel"
                [ngModel]="detail?.fullname"
                >
                <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
                   Passenger name is required 
                </div>
            </div>
            <div>
                Passenger ID:
                <input
                        type="number"
                        name="id"
                        [ngModel]="detail?.id"
                >
            </div>
            <div>
                CheckedIn:
                <label>
                    <input type="radio"
                           [value]="true"
                           name="checkedIn"
                           [ngModel]="detail?.checkedIn"
                           (ngModelChange)="toggleCheckIn($event)" 
                    />
                    Yes
                </label>
                <label>
                    <input type="radio"
                           [value]="false"
                           name="checkedIn"
                           [ngModel]="detail?.checkedIn"
                           (ngModelChange)="toggleCheckIn($event)" 
                    />
                    No
                </label>
            </div>
            <div *ngIf="form.value.checkedIn">
                Check in date:
                <input type="number"
                       name="checkInDate"
                       [ngModel]="detail?.checkedDate"
                >
            </div>
            <div>
                Luggage:
                <select name="baggage" [ngModel]="detail?.baggage">
                    <option 
                    *ngFor="let item of baggage"
                    [value]="item.key"
                    [selected]="item.key === detail?.baggage"
                    >
                        {{ item.value }}
                    </option>
                </select>
            </div>
            <div>{{ form.value | json }}</div>
            <div>
                Valid:{{ form.valid | json }}
            </div>
            <div>
                Invalid:{{ form.invalid | json }}
            </div>
        </form> 
    `
})

export class PassengerFormComponent {
   @Input() detail: Passenger
    baggage: Baggage[] = [{
       key: 'none',
        value: 'No baggage'
    },{
       key: 'hand-only',
        value: 'Hand baggage'
    },{
       key: 'hold-only',
        value: 'Hold baggage'
    }]

    toggleCheckIn(event: boolean): void {
       if(event && this.detail) {
           this.detail.checkedDate = Date.now()
           console.log(event)
       }

    }
}