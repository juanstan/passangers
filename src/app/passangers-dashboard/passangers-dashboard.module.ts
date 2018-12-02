import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassangersDashboardComponent } from './containers/passangers-dashboard.component';
import { PassangersDashboardTotalComponent } from './components/passangers-dashboard-total/passangers-dashboard-total.component';
import { PassangersDashboardDetailsComponent } from './components/passangers-dashboard-details/passangers-dashboard-details.component';

@NgModule({
    declarations: [
        PassangersDashboardComponent,
        PassangersDashboardTotalComponent,
        PassangersDashboardDetailsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PassangersDashboardComponent
    ],
    providers: []
})

export class PassangersDashboardModule { }

