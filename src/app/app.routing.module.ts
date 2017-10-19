import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/frontend/home' },
    { path: 'frontend', loadChildren: 'app/frontend/frontend.module#FrontendModule' },
    { path: 'backend', loadChildren: 'app/backend/backend.module#BackendModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }