import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home';

const routes: Routes = [
    {
        path: '',
        component: FrontendComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: '/frontend/home' },
            { path: 'home', component: HomeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontendRoutingModule { }