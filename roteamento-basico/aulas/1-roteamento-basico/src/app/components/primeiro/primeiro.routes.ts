import { Routes } from "@angular/router";
import { PrimeiroComponent } from "./primeiro.component";
import { FilhoAComponent } from "./components/filho-a/filho-a.component";
import { FilhoBComponent } from "./components/filho-b/filho-b.component";

export const PrimeiroRoutes: Routes = [
    {
        path: "",
        component: PrimeiroComponent,
        children: [
            {
                path: "",
                component: FilhoAComponent
            },
            {
                path: "filho-b",
                component: FilhoBComponent
            },
            {
                path: "redirect-a",
                redirectTo: ""
            },
            {
                path: "redirect-b",
                redirectTo: "filho-b"
            }
        ]
    }
];