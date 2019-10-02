import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { LoginComponent } from "~/app/login/login.component";

const routes: Routes = [

    {path: "login", component: LoginComponent},

    //  { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: "tabs",
        loadChildren: "~/app/app-layout/app-layout.module#AppLayoutModule"
    },
    { path: "", redirectTo: "/login", pathMatch: "full" }

    // {
    //     path: "",
    //     redirectTo: "login",
    //     pathMatch: "full"
    // }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
