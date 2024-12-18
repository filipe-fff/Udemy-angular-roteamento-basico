import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./components/start/start.component').then(m => m.StartComponent)
    },
    {
        path: "general",
        loadChildren: () => import('./components/general/general.routes').then(m => m.GeneralRoutes)
    },
    {
        path: "transactions",
        loadChildren: () => import('./components/transactions/transactions.routes').then(m => m.TransactionsRoutes)
    },
    {
        path: "**",
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];