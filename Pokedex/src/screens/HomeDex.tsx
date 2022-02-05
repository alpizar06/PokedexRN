/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, FlatList, ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {usePokemonPagination} from '../hooks/usePokemonPagination';

export const HomeDex = () => {
  const {top} = useSafeAreaInsets();
  const {PokemonInfoList, loadPokemons} = usePokemonPagination();
  //console.log(PokemonInfoList);
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View
        style={{
          ...styles.globalMargin,
          alignItems: 'center',
        }}>
        <FlatList
          data={PokemonInfoList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.tittle,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
