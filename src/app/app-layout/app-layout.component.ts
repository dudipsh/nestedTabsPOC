import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "ns-app-layout",
    templateUrl: "./app-layout.component.html",
    moduleId: module.id
})
export class AppLayoutComponent implements OnInit {

    constructor(private active: ActivatedRoute, private router: RouterExtensions) {
    }

    ngOnInit() {
        this.router.navigate(
            [{ outlets: { homeTab: ["home"], browseTab: ["browse"] } }],
            { relativeTo: this.active }
        );
        console.log(123)
        console.log(this.active)
        // this.router.navigate([{
        //     outlets: {
        //         homeTab: ["home"]
        //     }
        // }], {
        //     relativeTo: this.active
        //     }
        // );
    }

}
