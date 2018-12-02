import { Component, OnInit } from '@angular/core';
import { Passanger } from './../../models/passanger.interface';

@Component({
    selector: 'passangers-dashboard',
    templateUrl: './passangers-dashboard.component.html',
    styleUrls: [ './passangers-dashboard.component.scss' ]
})

export class PassangersDashboardComponent implements OnInit {

    private passangers: Passanger[];

    ngOnInit() {
        this.passangers = [
            {
                id: 1,
                name: 'Juan Piqueras Acevedo',
                age: 39,
                children: [{id: 3, name: 'Leon' }, {id: 4, name: 'Luis'}],
                checking: true
            },
            {
                id: 2,
                name: 'Kasia Sobieralski',
                age: 39,
                children: [{ id: 1, name: 'Leon'}, {id: 2, name: 'Luis'}],
                checking: false
            },
        ];
    }

    removePassanger(passanger: Passanger) {
        this.passangers = this.passangers.filter(o => o.id !== passanger.id);
    }

    updatePassanger(passanger: Passanger) {
        this.passangers = this.passangers.map((passangerCopy: Passanger) => {
            if (passangerCopy.id === passanger.id) {
                passangerCopy = Object.assign({}, passangerCopy, passanger);
            }
            return passangerCopy;
        });


    }

}
