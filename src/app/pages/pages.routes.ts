import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ObservableComponent } from './observables/observable.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
            children: [
                {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
                {path: 'graficas1', component: Graficas1Component, data: {titulo: 'Graficas'}},
                {path: 'observables', component: ObservableComponent, data: {titulo: 'Rxjs'}},
                {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
                {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress bar'}},
                {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Temas'}},
                {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
            ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);