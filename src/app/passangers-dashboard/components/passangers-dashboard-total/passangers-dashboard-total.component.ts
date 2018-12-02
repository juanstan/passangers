import { Component, OnInit, Input } from '@angular/core';
import { Passanger } from '../../../models/passanger.interface';


@Component({
    selector: 'passangers-dashboard-total',
    templateUrl: './passangers-dashboard-total.component.html',
    styleUrls: ['./passangers-dashboard-total.component.scss'],
})


export class PassangersDashboardTotalComponent implements OnInit {
    @Input() passangers: Passanger[];

    private total: number;
    private checkedIn: number;

    ngOnInit() {
        this.calculateTotal();
        this.calculateTotalChecked();
    }

    calculateTotal() {
        this.total = this.passangers.length;
    }

    calculateTotalChecked() {
        this.checkedIn = this.passangers.filter(passanger => passanger.checking).length;
    }


}
