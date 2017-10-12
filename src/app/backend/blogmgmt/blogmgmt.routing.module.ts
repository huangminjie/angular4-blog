import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogmgmtComponent } from './blogmgmt.component';

const routes: Routes = [
    { path: 'blogmgmt', component: BlogmgmtComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }