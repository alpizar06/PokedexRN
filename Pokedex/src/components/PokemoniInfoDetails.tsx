/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {usePokemonEvos} from '../hooks/usePokemonEvos';
import {PokemonDetails} from '../interfaces/pokemoninterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonDetails;
}

export const PokemonInfoDetails = ({pokemon}: Props) => {
  const {isLoadingEvo, evolutions} = usePokemonEvos(pokemon.id);
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View
        style={{
          ...styles.container,
          marginTop: 370,
        }}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight}kg</Text>
        <Text style={styles.title}>Altura</Text>
        <Text style={styles.regularText}>{pokemon.height}m</Text>
      </View>

      <Text style={{...styles.title, left: 125}}>Movimientos</Text>
      <View style={{flexDirection: 'column'}}>
        {pokemon.moves.map(({move}) => (
          <Text style={{...styles.regularText, left: 125}} key={move.name}>
            {move.name}
          </Text>
        ))}
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Evoluciones</Text>
        {isLoadingEvo ? (
          <View style={styles.loadingIndicator}>
            <ActivityIndicator size={50} />
          </View>
        ) : (
          <View>
            <Text style={styles.regularText}>
              {evolutions.chain.species.name}
            </Text>
            <FadeInImage
              uri={evolutions.chain.species.url}
              style={{
                ...styles.pokemonImage,
              }}
            />
            {!evolutions.chain.evolves_to.length ? (
              <View />
            ) : (
              <View>
                <Text style={styles.regularText}>
                  {evolutions.chain.evolves_to[0].species.name}
                </Text>
                <FadeInImage
                  uri={evolutions.chain.evolves_to[0].species.url}
                  style={{
                    ...styles.pokemonImage,
                  }}
                />
                {!evolutions.chain.evolves_to[0].evolves_to.length ? (
                  <View />
                ) : (
                  <View>
                    <Text style={styles.regularText}>
                      {
                        evolutions.chain.evolves_to[0].evolves_to[0].species
                          .name
                      }
                    </Text>
                    <FadeInImage
                      uri={
                        evolutions.chain.evolves_to[0].evolves_to[0].species.url
                      }
                      style={{
                        ...styles.pokemonImage,
                      }}
                    />
                  </View>
                )}
              </View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
});
