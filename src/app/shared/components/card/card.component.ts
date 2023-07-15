import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/interfaces/pokemon.interface";

@Component({
    selector: "poke-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
})
export class CardComponent {
    @Input() pokemon!: Pokemon;
}
