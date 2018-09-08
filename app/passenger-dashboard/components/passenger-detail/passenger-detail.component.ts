import {Component, Input, Output, OnChanges, EventEmitter} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status"
                  [class.checked-in]="detail.checkedIn"
            ></span>
            <div *ngIf="editing">
               <input type="text" [value]="detail.fullname"
                 (input)="onNameChange(name.value)"     
                      #name
               > 
            </div>
            <div *ngIf="!editing">
                {{ detail.fullname }}
            </div>
            <div class="date">
                Check in date: {{ detail.checkedDate | date: 'yMMMd' | uppercase}}
            </div>
            <button (click)="toggleEdit()"> {{ editing ? 'Done' : 'Edit' }}</button>
            <button (click)="onRemove()"> Remove </button>
            <button (click)="goToPassenger()"> View </button>
        </div>
    `
})

export class PassengerDetailComponent implements OnChanges {
    @Input() detail: Passenger

    @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>()
    @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>()
    @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>()

    editing: boolean = false

    constructor() {}
    ngOnChanges(changes) {
        if(changes.detail) {
            this.detail = {...this.detail, ...changes.detail.currentValue}
        }
        console.log(changes)
    }

    goToPassenger() {
        this.view.emit(this.detail)
    }

    onNameChange(value: string) {
        this.detail.fullname = value
    }

    toggleEdit() {

        // send emit to parent
        if(this.editing) {
            this.edit.emit(this.detail)
        }

        this.editing = !this.editing
    }

    onRemove() {
        this.remove.emit(this.detail)
    }
}
