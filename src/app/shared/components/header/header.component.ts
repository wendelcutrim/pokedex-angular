import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "poke-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    logo: string = "../../../../assets/img/logo.png";

    constructor(private router: Router) {}

    redirectHome(): void {
        this.router.navigate(["/"]);
    }
}
