import { Routes } from "@angular/router";
import { GeneralComponent } from "./general.component";
import { BasicComponent } from "./components/basic/basic.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { AddressComponent } from "./components/address/address.component";

export const GeneralRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import('./general.component').then(m => m.GeneralComponent),
        children: [
            {
                path: "basic",
                pathMatch: "full",
                loadComponent: () => import('./components/basic/basic.component').then(m => m.BasicComponent)
            },
            {
                path: "contacts",
                pathMatch: "full",
                loadComponent: () => import('./components/contacts/contacts.component').then(m => m.ContactsComponent)
            },
            {
                path: "address",
                pathMatch: "full",
                loadComponent: () => import('./components/address/address.component').then(m => m.AddressComponent)
            },
            {
                path: "",
                redirectTo: "basic",
                pathMatch: "full"
            }
        ]
    }
]