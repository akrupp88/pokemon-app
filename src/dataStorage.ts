import { Injectable } from '@angular/core';
import { Pokemon, Generation } from './models/pokemon.models'

@Injectable({
  providedIn: 'root'
})
export class DataStorage {
  private dataStorage: Data = new Data();

  addPokemonData(data: any) {
    this.dataStorage.pokemon.push(data);
  }

  addGenerationData(data: any) {
    this.dataStorage.generations.push(data);
  }

  getPokemonData() {
    return this.dataStorage.pokemon;
  }

  getGenerationData() {
    return this.dataStorage.generations;
  }
}

export class Data {
  pokemon: Pokemon[] = [];
  generations: Generation[] = [];
}
