import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NewBlogComponent } from '../newblog/newblog.component';

const routes: Routes = [
    {
        path: 'dasboard',
        component: DashboardComponent,
        children: [
            { path: 'newblog', component: NewBlogComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }