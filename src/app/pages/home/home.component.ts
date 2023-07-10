import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    title: string = "Pokedex | Home";
    inputOnFocus: boolean = false;

    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle(this.title);
    }

    setFormOutline(): void {
        this.inputOnFocus = true;
    }

    removeFormOutline(): void {
        this.inputOnFocus = false;
    }
}
