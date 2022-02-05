import {PokemonInfo} from '../interfaces/pokemoninterfaces';
import {
  filterPokemons,
  loadPokemons,
  loadPokemonsServer,
  updatePokemon,
} from './PokemonActionsTypes';

export const LoadPokemonsFromServer = (pokemons: PokemonInfo[]) => ({
  type: loadPokemonsServer,
  payload: pokemons,
});

export const LoadPokemons = (pokemons: PokemonInfo[]) => ({
  type: loadPokemons,
  payload: pokemons,
});

export const UpdatePokemon = (pokemon: PokemonInfo) => ({
  type: updatePokemon,
  payload: pokemon,
});

export const FilterPokemons = (term: string) => ({
  type: filterPokemons,
  payload: term,
});
