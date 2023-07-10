import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <div class="container">
            <poke-header></poke-header>
        </div>
        <main class="container">
            <router-outlet></router-outlet>
        </main>
    `,
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "pokedex-angular";
}
