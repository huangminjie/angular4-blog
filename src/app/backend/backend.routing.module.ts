import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/auth-guard.service';

import { BackendComponent } from './backend.component';
import { DashboardComponent } from './dashboard';
import { LoginComponent } from './login';
import { NewPostComponent } from './newpost';
import { TypesMgMtComponent } from './typesmgmt';
import { PostsMgMtComponent } from './postsmgmt';

const routes: Routes = [
    {
        path: '',
        component: BackendComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '', pathMatch: 'full', redirectTo: '/backend/dashboard'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'newpost',
                component: NewPostComponent
            },
            {
                path: 'typesmgmt',
                component: TypesMgMtComponent
            },
            {
                path: 'postsmgmt',
                component: PostsMgMtComponent
            }
        ]
    },
    {
        path: 'login', component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackendRoutingModule { }