import { Component, OnInit} from '@angular/core';
import { GridModule } from "@progress/kendo-angular-grid";
import { Pokemon } from '../models/pokemon.models'
import { CommonModule } from "@angular/common";
import { LabelModule } from '@progress/kendo-angular-label';
import { SwitchModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { DataStorage } from '../dataStorage'

@Component({
  selector: 'list_card',
  standalone: true,
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css',
  imports: [GridModule, CommonModule, LabelModule, SwitchModule, FormsModule, LayoutModule]
})
export class ListCardComponent implements OnInit {

  title = 'ListCard';
  public pokemonGridData: Pokemon[] = [];
  public detailView = false;

  constructor(private dataStorage: DataStorage) {
  }

  ngOnInit(): void {
    this.pokemonGridData = this.dataStorage.getPokemonData();
    this.pokemonGridData.sort((a, b) => a.Name > b.Name ? 1 : -1);
    debugger;
  }
}
