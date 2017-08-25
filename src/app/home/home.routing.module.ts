import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeNavComponent } from './home-nav';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: []
    },
    { path: 'home/nav', component: HomeNavComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }