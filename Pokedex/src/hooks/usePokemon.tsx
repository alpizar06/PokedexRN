import {useEffect, useState} from 'react';
import {PokemonDetails} from '../interfaces/pokemoninterfaces';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemon = (id: string) => {
  const [isLoading, setisLoading] = useState(true);
  const [pokemon, setpokemon] = useState<PokemonDetails>({} as PokemonDetails);

  const loadPokemon = async () => {
    const resp = await pokemonApi.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setpokemon(resp.data);
    setisLoading(false);
  };

  useEffect(() => {
    loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
