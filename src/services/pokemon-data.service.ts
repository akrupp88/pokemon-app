import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, Generation } from '../models/pokemon.models'
import { Observable, map } from 'rxjs'

const baseUrl = 'https://pokeapi.co/api/v2/';
const limit = 10000; //number of pokemon to show

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor(private http: HttpClient) {
  }

  getAllPokemonData() {
    return this.http.get(baseUrl + 'pokemon?limit=' + `${limit}`);
  }

  getAllGenerationData() {
    return this.http.get(baseUrl + 'generation');
  }

  getSinglePokemonData(name: string) {
    return this.http.get<Pokemon>(baseUrl + 'pokemon/' + `${name}`).pipe(map((data) => {
      return this.convertDataToPokemonModel(data);
    })
    );
  }

  getSingleGenerationData(name: string) {
    return this.http.get<Generation>(baseUrl + 'generation/' + `${name}`).pipe(map((data) => {
      return this.convertDataToGenerationModel(data);
    })
    );
  }

  convertDataToPokemonModel(data: any): Pokemon {
    const pokemon: Pokemon = {
      Name: data.name || '',
      Type: data.types[0] ? data.types[0].type.name : '',
      Height: data.height || 0,
      Weight: data.weight || 0,
      HP: data.stats[0] ? data.stats[0].base_stat : 0,
      Attack: data.stats[1] ? data.stats[1].base_stat : 0,
      Defense: data.stats[2] ? data.stats[2].base_stat : 0,
      SpecialAttack: data.stats[3] ? data.stats[3].base_stat : 0,
      SpecialDefense: data.stats[4] ? data.stats[4].base_stat : 0,
      Speed: data.stats[5] ? data.stats[5].base_stat : 0,
      Img: data.sprites ? data.sprites.front_default : 0,
      StatsSum: (data.stats[0] ? data.stats[0].base_stat : 0) + (data.stats[1] ? data.stats[1].base_stat : 0) + (data.stats[2] ? data.stats[2].base_stat : 0) + (data.stats[3] ? data.stats[3].base_stat : 0)
    };
    return pokemon;
  }

  convertDataToGenerationModel(data: any): Generation {
    const generation: Generation = {
      Id: data.name || '',
      NumberOfNewAbilities: data.abilities ? data.abilities.length : 0
    };
    return generation;
  }
}

