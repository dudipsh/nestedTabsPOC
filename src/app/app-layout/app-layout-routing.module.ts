import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { AppLayoutComponent } from "./app-layout.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

const routes: Routes = [
    {
        path: "default",
        component: AppLayoutComponent,
        children: [
            {
                path: "home",
                component: NSEmptyOutletComponent,
                outlet: "homeTab",
                loadChildren: "~/app/home/home.module#HomeModule"
            },
            {
                path: "browse",
                component: NSEmptyOutletComponent,
                outlet: "browseTab",
                loadChildren:  "~/app/browse/browse.module#BrowseModule"
            }
        ]
    }
];
//
//
//
//         {
//             path: "browse",
//             component: NSEmptyOutletComponent,
//             loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule),
//             outlet: "browseTab"
//         },
//         {
//             path: "search",
//             component: NSEmptyOutletComponent,
//             loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
//             outlet: "searchTab"
//         }
//     ]
// },
@NgModule({
    imports: [
        // NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)]
})
export class AppLayoutRoutingModule {
}
