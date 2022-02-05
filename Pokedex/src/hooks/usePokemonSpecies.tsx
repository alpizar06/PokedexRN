import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {PokemonSpecies} from '../interfaces/pokemoninterfaces';

export const usePokemonSpecies = (id: number) => {
  const [isLoadingSpe, setisLoadingSpe] = useState(true);
  const [chain, setchain] = useState<string>('0');
  const [species, setspecies] = useState<PokemonSpecies>({} as PokemonSpecies);
  const loadSpeciesChain = async () => {
    const resp = await pokemonApi.get<PokemonSpecies>(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
    );
    setspecies(resp.data);
    const urlParts = resp.data.evolution_chain.url.split('/');
    const idChain = urlParts[urlParts.length - 2];
    console.log(idChain);
    setchain(idChain);
    setisLoadingSpe(false);
  };

  useEffect(() => {
    loadSpeciesChain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoadingSpe,
    species,
    chain,
  };
};
