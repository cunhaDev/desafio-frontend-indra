import { HttpClient } from '@angular/common/http';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-read',
  templateUrl: './pokemon-read.component.html',
  styleUrls: ['./pokemon-read.component.sass']
})
export class PokemonReadComponent implements OnInit {

  pokemonsBase: string[];
  fullResults: object[];
  newResults: object[];
  nextUrl: string;
  prevUrl: string;

  constructor(private pokemonService: PokemonService, private http: HttpClient) { }

  ngOnInit(): void {

    this.pokemonsBase = []
    this.fullResults = []
    this.newResults = []

    this.pokemonService.read('https://pokeapi.co/api/v2/pokemon').subscribe((results: any) => {

      this.pokemonsBase.push(...results.results)

      this.nextUrl = results.next ? results.next : null;
      this.prevUrl = results.prev ? results.rev : null;


      this.pokemonsBase.forEach((pokemon: any) => {

        this.pokemonService.read(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).subscribe((result: any) => {
          this.fullResults.push(result)
        })
      })
    })
  }

  nextPage(): void {

    this.pokemonService.read(this.nextUrl).subscribe((results : any) => {

      this.pokemonsBase.splice(0, Number.MAX_VALUE)
      this.pokemonsBase.push(...results.results)
      this.fullResults.splice(0, Number.MAX_VALUE)
      console.log(results);

      this.nextUrl = results.next ? results.next : null;
      this.prevUrl = results.previous ? results.previous : null;

      this.pokemonsBase.forEach((pokemon: any) => {
        this.pokemonService.read(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).subscribe((result: any) => {

          this.fullResults.push(result)

        })
      })
    })
  }

  prevPage(): void {

    this.pokemonService.read(this.prevUrl).subscribe((results : any) => {

      this.pokemonsBase.splice(0, Number.MAX_VALUE)
      this.pokemonsBase.push(...results.results)
      this.fullResults.splice(0, Number.MAX_VALUE)

      this.nextUrl = results.next ? results.next : null;
      this.prevUrl = results.previous ? results.previous : null;

      this.pokemonsBase.forEach((pokemon: any) => {
        this.pokemonService.read(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).subscribe((result: any) => {

          this.fullResults.push(result)
        })
      })
    })
  }


}
