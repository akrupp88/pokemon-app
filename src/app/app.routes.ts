import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard', loadComponent: () =>
            import('../dashboard/dashboard.component')
                .then(m => m.DashboardComponent)
    },
    {
        path: 'list-card', loadComponent: () =>
            import('../list-card/list-card.component')
                .then(m => m.ListCardComponent)
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];