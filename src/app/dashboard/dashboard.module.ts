import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardNavComponent } from './dashboard-nav';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    DashboardNavComponent
  ]
})
export class DashboardModule { }
