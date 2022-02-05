import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonInfoDetails} from '../components/PokemoniInfoDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailPokemon'> {}

export const DetailPokemon = ({navigation, route}: Props) => {
  const {pokemonInfo, color} = route.params;
  const {id, name, image} = pokemonInfo;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon} = usePokemon(id);
  // const {isLoadingSpe, chain} = usePokemonSpecies(id);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <View
        style={{
          ...style.headerContainer,
          backgroundColor: color,
        }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{
            ...style.backButton,
            top: top + 10,
          }}>
          <Icon name="arrow-back-outline" color={color} size={40} />
        </TouchableOpacity>

        <Text
          style={{
            ...style.pokemonName,
          }}>
          {name}
          {'\n# ' + id}
        </Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={{
            ...style.pokeball,
            top: top + 5,
          }}
        />
        <FadeInImage
          uri={image}
          style={{
            ...style.pokemonImage,
          }}
        />
      </View>

      {isLoading ? (
        <View style={style.loadingIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonInfoDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    top: 10,
  },
  pokeball: {
    width: 350,
    height: 350,
    opacity: 0.5,
    position: 'absolute',
  },
  pokemonImage: {
    width: 250,
    height: 250,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
