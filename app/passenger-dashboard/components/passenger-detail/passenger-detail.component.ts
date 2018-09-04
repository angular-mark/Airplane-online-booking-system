import {Component, Input, Output, EventEmitter} from "@angular/core";
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
            <div class="children">
                <!--// here we use Safe Navigation Operator to aviod children propery error caused by random vacancy-->
                Children: {{detail.children?.length || 0}}
            </div>
            <button (click)="toggleEdit()"> {{ editing ? 'Done' : 'Edit' }}</button>
            <button (click)="onRemove()"> Remove </button>
        </div>
    `
})

export class PassengerDetailComponent {
    @Input() detail: Passenger

    @Output() remove: EventEmitter<any> = new EventEmitter()
    @Output() edit: EventEmitter<any> = new EventEmitter()

    editing: boolean = false

    constructor() {}

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
