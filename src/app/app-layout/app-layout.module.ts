import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { AppLayoutComponent } from "~/app/app-layout/app-layout.component";
import { NativeScriptRouterModule } from "nativescript-angular";
import { AppLayoutRoutingModule } from "./app-layout-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        AppLayoutRoutingModule
    ],
    declarations: [
        AppLayoutComponent
    ],

    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppLayoutModule { }
