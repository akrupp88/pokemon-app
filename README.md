# PokemonApp

## Description

This Pokemon App shows information about all exisiting pokemon and compares them to each other. The information comes from the [pokeapi](https://pokeapi.co/).

## Technologies

The Pokemon App uses following technoogies:

- Angular Version 17.3.12
- Kendo UI library Trial Version

Kendo UI is used because it has a lot of UI Components and data visualization gadgets. There are many Kendo charts and the kendo grid has filter functions. It is suitable for comparing and filtering the pokemon. You can also search for a specific pokemon.

## Structure

The Pokemon App has following :

- app.component
- dashboard.component
- list-card.component
- pokemon.models
- pokemon-data.service
- dataStorage

The app componennt represents the basis and includes pokemon logo and navigation bar.

The dashboard componennt represents the charts and data visualization.

The list-card componennt represents the list view and the card view of pokemon. You can toogle between these views.

The pokemon model holds relevant information of the pokemon needed for the app.

The pokemon data service provides http methods to get information needed.

The data storage provides methods to add and get pokemon data. So the information can be used in the entire app.  

## Build

Run `ng serve --open` to build and serve the project, rebuilding on file changes.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.