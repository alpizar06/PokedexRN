import {useEffect, useState} from 'react';
import {
  PokemonEvolutions,
  PokemonSpecies,
} from '../interfaces/pokemoninterfaces';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemonEvos = (id: number) => {
  const [isLoadingEvo, setisLoadingEvo] = useState(true);
  const [evolutions, setevolutions] = useState<PokemonEvolutions>(
    {} as PokemonEvolutions,
  );

  const loadEvolutions = async () => {
    const firstresp = await pokemonApi.get<PokemonSpecies>(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
    );
    const urlParts = firstresp.data.evolution_chain.url.split('/');
    const idChain = urlParts[urlParts.length - 2];

    const resp = await pokemonApi.get<PokemonEvolutions>(
      `https://pokeapi.co/api/v2/evolution-chain/${idChain}`,
    );

    const furl = resp.data.chain.species.url.split('/');
    const fid = furl[furl.length - 2];

    resp.data.chain.species.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fid}.png`;
    console.log(resp.data.chain.species);

    if (resp.data.chain.evolves_to.length !== 0) {
      const surl = resp.data.chain.evolves_to[0].species.url.split('/');
      const sid = surl[surl.length - 2];
      resp.data.chain.evolves_to[0].species.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${sid}.png`;
      console.log(resp.data.chain.evolves_to[0].species);

      if (resp.data.chain.evolves_to[0].evolves_to.length !== 0) {
        const turl =
          resp.data.chain.evolves_to[0].evolves_to[0].species.url.split('/');
        const tid = turl[turl.length - 2];
        resp.data.chain.evolves_to[0].evolves_to[0].species.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${tid}.png`;
        console.log(resp.data.chain.evolves_to[0].evolves_to[0].species);
      }
    }

    setevolutions(resp.data);
    console.log(resp.data.chain.species);
    setisLoadingEvo(false);
  };

  useEffect(() => {
    loadEvolutions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoadingEvo,
    evolutions,
  };
};
