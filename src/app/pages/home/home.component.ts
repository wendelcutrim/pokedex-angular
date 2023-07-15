import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Pokemon } from "src/app/interfaces/pokemon.interface";
import { PokeApiService } from "src/app/services/poke-api.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    title: string = "Pokedex | Home";
    inputOnFocus: boolean = false;
    pokemons!: Pokemon[];

    constructor(private titleService: Title, private pokeApiService: PokeApiService) {}

    ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.getAllPokemons();
        /* this.pokeApiService.getAllPokemons().subscribe({
            next: (res) => console.log("Home Response", res),
        }); */
    }

    getAllPokemons(): void {
        this.pokeApiService.getAllPokemons().subscribe({
            next: (res) => {
                this.pokemons = res.results;
                console.log(this.pokemons);
            },
        });
    }

    setFormOutline(): void {
        this.inputOnFocus = true;
    }

    removeFormOutline(): void {
        this.inputOnFocus = false;
    }
}
