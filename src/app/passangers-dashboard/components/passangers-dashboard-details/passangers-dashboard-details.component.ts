import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passanger } from '../../../models/passanger.interface';


@Component({
    selector: 'passangers-dashboard-details',
    templateUrl: './passangers-dashboard-details.component.html',
    styleUrls: ['./passangers-dashboard-details.component.scss'],
})


export class PassangersDashboardDetailsComponent implements OnChanges {
    private editing: boolean;
    @Input() passanger: Passanger;
    @Output() clickUpdatePassanger: EventEmitter<any> = new EventEmitter<any>();
    @Output() clickremovePassanger: EventEmitter<any> = new EventEmitter<any>();


    ngOnChanges(changes) {
        console.log(changes);
        if (changes.passanger) {
            this.passanger = Object.assign({}, changes.passanger.currentValue);
        }
    }

    updatePassanger() {
        if (this.editing) {
            this.clickUpdatePassanger.emit(this.passanger);
        }
        this.editing = !this.editing;
    }

    removePassanger() {
        this.clickremovePassanger.emit(this.passanger);
    }

    onNameChange(name: string) {
        this.passanger.name = name;
    }

}
