import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: "", redirectTo: "/dashboard", pathMatch: "full"},
    {path: "dashboard", component: DashboardComponent },
    {path: "contact", component: ContactComponent}
];
