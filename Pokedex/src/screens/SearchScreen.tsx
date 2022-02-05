/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';
import {PokemonInfo} from '../interfaces/pokemoninterfaces';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, PokemonInfoList} = usePokemonSearch();

  const [pokemonFiltred, setpokemonFiltred] = useState<PokemonInfo[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setpokemonFiltred([]);
    }

    if (isNaN(Number(term))) {
      setpokemonFiltred(
        PokemonInfoList.filter(poke =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = PokemonInfoList.find(poke => poke.id === term);
      setpokemonFiltred(pokemonById ? [pokemonById] : []);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput onDebounce={value => setTerm(value)} />
      <FlatList
        data={pokemonFiltred}
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
            {term}
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

// const style = StyleSheet.create({
//   activityContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
