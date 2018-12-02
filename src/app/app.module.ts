import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassangersDashboardModule } from './passangers-dashboard/passangers-dashboard.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    // custom modules
    PassangersDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
