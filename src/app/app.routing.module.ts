import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/frontend/home' },
    { path: 'frontend', loadChildren: 'app/frontend/frontend.module#FrontendModule' },
    { path: 'backend', loadChildren: 'app/backend/backend.module#BackendModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }