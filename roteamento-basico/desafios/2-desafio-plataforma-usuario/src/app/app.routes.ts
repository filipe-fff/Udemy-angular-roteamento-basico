import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartComponent } from './components/start/start.component';

export const routes: Routes = [
    {
        path: "",
        component: StartComponent
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
        component: NotFoundComponent
    }
];