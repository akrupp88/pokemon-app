import { Component, OnInit } from '@angular/core';
import { Pokemon, Generation } from '../models/pokemon.models'
import { ChartsModule, SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';
import { DataStorage } from '../dataStorage'

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [ChartsModule]
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';

  public pokemonChartData: Pokemon[] = [];
  private generationsChartData: Generation[] = [];

  //Donut chart
  public donutChartTypeData: any[] = [];
  public autofit = true;

  //column chart
  public columnChartAbilityCategories: any[] = [];
  public columnChartAbilityData: any[] = [];

  //bar chart
  public barChartStatsCategories: any[] = [];
  public barChartStatHPData: any[] = [];
  public barChartStatAttackData: any[] = [];
  public barChartStatDefenseData: any[] = [];
  public barChartStatSpecialAttackData: any[] = [];


  constructor(private dataStorage: DataStorage) {
  }

  ngOnInit() {
    this.pokemonChartData = this.dataStorage.getPokemonData();
    this.pokemonChartData.sort((a, b) => a.Name > b.Name ? 1 : -1);
    this.generationsChartData = this.dataStorage.getGenerationData();
    this.generationsChartData.sort((a, b) => a.Id > b.Id ? 1 : -1);
    this.prepareData();
  }

  private prepareData() {
    let rangeOfStrongestPokemon: any[] = [];

    //verteilung nach typen
    for (const pokemon of this.pokemonChartData) {
      let existedType = this.donutChartTypeData.filter(type => type.type == pokemon.Type);
      if (existedType.length > 0) {
        existedType[0].total += 1;
      }
      else {
        this.donutChartTypeData.push({ type: pokemon.Type, total: 1 });
      }
    }

    this.donutChartTypeData.map(data => {
      data.total = data.total * 100 / this.pokemonChartData.length
    });

    // bar chart
    rangeOfStrongestPokemon = JSON.parse(JSON.stringify(this.pokemonChartData)); //deep copy
    rangeOfStrongestPokemon.sort((a, b) => a.StatsSum > b.StatsSum ? -1 : 1);
    rangeOfStrongestPokemon = rangeOfStrongestPokemon.slice(0, 4);

    this.barChartStatsCategories = rangeOfStrongestPokemon.map(pokemon => pokemon.Name);
    this.barChartStatHPData = rangeOfStrongestPokemon.map(pokemon => pokemon.HP);
    this.barChartStatAttackData = rangeOfStrongestPokemon.map(pokemon => pokemon.Attack);
    this.barChartStatDefenseData = rangeOfStrongestPokemon.map(pokemon => pokemon.Defense);
    this.barChartStatSpecialAttackData = rangeOfStrongestPokemon.map(pokemon => pokemon.SpecialAttack);

    //neue fähigkeiten in generationen
    for (const generation of this.generationsChartData) {
      this.columnChartAbilityCategories.push(generation.Id);
      this.columnChartAbilityData.push(generation.NumberOfNewAbilities);
    }
  }

  public labelContent(e: SeriesLabelsContentArgs): string {
    return e.category;
  }
}
