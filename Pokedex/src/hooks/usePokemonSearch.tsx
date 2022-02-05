import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonResponse,
  PokemonInfo,
  Result,
} from '../interfaces/pokemoninterfaces';

export const usePokemonSearch = () => {
  //   const url = 'https://pokeapi.co/api/v2/pokemon?limit=40';
  const [isFetching, setisFetching] = useState(true);
  const [PokemonInfoList, setPokemonInfoList] = useState<PokemonInfo[]>([]);

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
    );
    mapPokemonlist(resp.data.results);
  };

  const mapPokemonlist = (pokemonList: Result[]) => {
    const newPokemonList: PokemonInfo[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        image,
        name,
      };
    });

    setPokemonInfoList(newPokemonList);
    setisFetching(false);
  };

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isFetching,
    PokemonInfoList,
  };
};
