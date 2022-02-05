import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonResponse,
  PokemonInfo,
  Result,
} from '../interfaces/pokemoninterfaces';

export const usePokemonPagination = () => {
  //   const url = 'https://pokeapi.co/api/v2/pokemon?limit=40';
  const [isLoading, setisLoading] = useState(true);
  const [PokemonInfoList, setPokemonInfoList] = useState<PokemonInfo[]>([]);
  const pokePage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    setisLoading(true);
    const resp = await pokemonApi.get<PokemonResponse>(pokePage.current);
    //console.log(resp.data);
    pokePage.current = resp.data.next;
    mapPokemonlist(resp.data.results);
  };

  const mapPokemonlist = (pokemonList: Result[]) => {
    // pokemonList.forEach(poke => console.log(poke.name));
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

    setPokemonInfoList([...PokemonInfoList, ...newPokemonList]);
    setisLoading(false);
  };

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    PokemonInfoList,
    loadPokemons,
  };
};
