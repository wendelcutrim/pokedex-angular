import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { debounceTime, filter, switchMap } from "rxjs";
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
    private filteredPokemons!: Pokemon[];
    searchForm!: FormGroup;

    constructor(private titleService: Title, private pokeApiService: PokeApiService) {
        this.searchForm = new FormGroup({
            q: new FormControl(""),
        });
    }

    ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.getAllPokemons();
        console.log(this.pokemons);
        this.searchForm.valueChanges.subscribe((value) => {
            this.pokemons = this.filteredPokemons;
        });
    }

    getAllPokemons(): void {
        this.pokeApiService.getAllPokemons().subscribe({
            next: (res) => {
                this.pokemons = res.results;
                this.filteredPokemons = res.results;
                console.log(this.pokemons);
            },
        });
    }

    searchPokemon(): void {
        /*  const target = event as HTMLInputElement;
        console.log(target);
        const result: Pokemon[] = this.pokemons.filter((p) => !p.name.indexOf(target.value));

        console.log(result);
        this.pokemons = result; */
        // const result: Pokemon[] = this.pokemons.filter((p) => !p.name.indexOf(this.searchForm.get("q")?.value));
        const result: Pokemon[] = this.pokemons.filter((p) => p.name.includes(this.searchForm.get("q")?.value));

        this.pokemons = result;
    }

    setFormOutline(): void {
        this.inputOnFocus = true;
    }

    removeFormOutline(): void {
        this.inputOnFocus = false;
    }
}
