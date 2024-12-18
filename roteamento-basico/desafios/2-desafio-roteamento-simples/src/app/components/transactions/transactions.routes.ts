import { Routes } from "@angular/router";

export const TransactionsRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import('./transactions.component').then(m => m.TransactionsComponent),
        children: [
            {
                path: "credit",
                loadComponent: () => import('./components/credit/credit.component').then(m => m.CreditComponent)
            },
            {
                path: "debit",
                loadComponent: () => import('./components/debit/debit.component').then(m => m.DebitComponent)
            },
            {
                path: "",
                redirectTo: "credit",
                pathMatch: "full"
            }
        ]
    }
]