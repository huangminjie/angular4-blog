import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavComponent } from './dashboard-nav';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    DashboardNavComponent
  ]
})
export class DashboardModule { }
