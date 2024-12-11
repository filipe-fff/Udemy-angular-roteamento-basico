import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./components/start/start.component").then((m) => m.StartComponent)
    },
    {
        path: "informations",
        loadComponent: () => import("./components/informations/informations.component").then((m) => m.InformationsComponent)
    },
    {
        path: "contacts",
        loadComponent: () => import("./components/contacts/contacts.component").then((m) => m.ContactsComponent)
    },
    {
        path: "about",
        loadComponent: () => import("./components/about/about.component").then((m) => m.AboutComponent)
    },
    {
        path: "out",
        loadComponent: () => import("./components/out/out.component").then((m) => m.OutComponent)
    }
];
