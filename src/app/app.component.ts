import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service'
import { DataStorage } from '../dataStorage'
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, NavigationModule, ButtonsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'Pokemon';
  public appInitialized = false;

  constructor(private pokemonDataService: PokemonDataService, private dataStorage: DataStorage) {
    this.loadData();
  }

  ngOnInit() {
  }

  private loadData(): void {
    this.pokemonDataService.getAllPokemonData().subscribe((response: any) => {
      response.results.forEach((result: any, i: number) => {
        this.pokemonDataService.getSinglePokemonData(result.name).subscribe((data: any) => {
          this.dataStorage.addPokemonData(data);
          if (i == response.results.length - 1) {
            this.loadGenerations();
          }
        });
      });
    });
  }

  private loadGenerations(): void {
    this.pokemonDataService.getAllGenerationData().subscribe((response: any) => {
      response.results.forEach((result: any, i: number) => {
        this.pokemonDataService.getSingleGenerationData(result.name).subscribe((data: any) => {
          this.dataStorage.addGenerationData(data);
          if (i == response.results.length - 1) {
            this.appInitialized = true;
          }
        });
      });
    });
  }
}