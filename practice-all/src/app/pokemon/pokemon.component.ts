import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../pokemon.service";


export interface pokemoninterface {
  name: string;
  url: string;
}
  

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  pokemon: any;
  count: number;
  pokemons: Array<any> = [];
  name: string;
  url: string;
  changeText: boolean;
   dataSource = 'pokemons';
   displayedColumns= [ 'name', 'url', 'action']; 
  lastTenPokemon: Array<any> = [];



  constructor(private pokemonService: PokemonService) {
    this.changeText = false;
   }

  ngOnInit() {
    this.pokemonService.get().subscribe(data => {
      this.pokemon = data;
      this.count = this.pokemon.count;
      this.pokemons = this.pokemon.results.splice((this.pokemon.results.length-10), this.pokemon.results.length);
      this.lastTenPokemon = this.pokemons;
    });
  }

  pokinter: pokemoninterface = {
    name: null,
    url: null
  }

  onSubmit() {

/*     if (this.lastTenPokemon.length <= 10){
    console.log(this.lastTenPokemon);
    } */
  /*   let newPokemons: pokemoninterface = {
      name: this.name,
      url: this.url
    }
    this.pokemons.push(newPokemons);
    this.pokemon.data = this.pokemon.results */
    this.lastTenPokemon.push({ name: this.name, url: this.url });
    for (let index = this.lastTenPokemon.length-10; index < this.lastTenPokemon.length; index++) {
      const element = this.lastTenPokemon[index];
      console.log(this.lastTenPokemon[index]);
      
    }
    this.lastTenPokemon = this.lastTenPokemon
/*     this.pokemons = this.pokemon.results.splice((this.pokemon.results.length-10), this.pokemon.results.length);
 */  }

  removeItem(value) {
    const index: number = this.pokemons.indexOf(value);
    this.pokemons.splice(index, 1);
/*     this.pokemons = this.pokemon.results.splice((this.pokemon.results.length-10), this.pokemon.results.length);
 */  }
  removeAll(){
    this.pokemons = [];
  }

  onIt(){
    if (this.changeText) {
      return "green"
    }
    return"white"
  }

  delete(elm) {
    this.lastTenPokemon = this.lastTenPokemon
      .filter(i => i !== elm)
      .map((i, idx) => (i.position = (idx + 1), i));
  }
    
}

