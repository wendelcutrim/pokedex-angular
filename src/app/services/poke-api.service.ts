import { Pokemon, AllPokemons, PokemonStatus } from "./../interfaces/pokemon.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class PokeApiService {
    private BASE_URL: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";

    constructor(private http: HttpClient) {}

    getAllPokemons(): Observable<AllPokemons> {
        return this.http.get<AllPokemons>(this.BASE_URL).pipe(
            tap((res) => console.log("[API RESPONSE]", res)),
            tap((res) => {
                res.results.forEach((pokemon: Pokemon) => {
                    this.getPokemon(pokemon.url).subscribe((res) => (pokemon.status = res));
                    /* this.http
                        .get<Abilities>(pokemon.url)
                        .pipe(map((res) => res))
                        .subscribe((res) => (pokemon.status = res)); */
                });
            }),
        );
    }

    getPokemon(url: string): Observable<PokemonStatus> {
        return this.http.get<PokemonStatus>(url).pipe(map((res) => res));
    }
}
