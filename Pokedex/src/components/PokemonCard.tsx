import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {PokemonInfo} from '../interfaces/pokemoninterfaces';
import {FadeInImage} from './FadeInImage';
import {useRef} from 'react';
import {useNavigation} from '@react-navigation/core';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: PokemonInfo;
}

export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setbgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation<any>();

  useEffect(() => {
    ImageColors.getColors(pokemon.image, {fallback: 'grey'}).then(colors => {
      if (!isMounted.current) {
        return;
      }
      if (colors.platform === 'android') {
        setbgColor(colors.dominant || 'grey');
      }
    });

    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetailPokemon', {
          pokemonInfo: pokemon,
          color: bgColor,
        })
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={{...styles.name}}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
          <FadeInImage uri={pokemon.image} style={styles.pokemonImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    // backgroundColor: 'grey',
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 5,
    left: 10,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0,
    bottom: -35,
  },
});
