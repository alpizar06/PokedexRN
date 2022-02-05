import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeDex} from '../screens/HomeDex';
import {DetailPokemon} from '../screens/DetailPokemon';
import {PokemonInfo} from '../interfaces/pokemoninterfaces';

export type RootStackParams = {
  HomeDex: undefined;
  DetailPokemon: {pokemonInfo: PokemonInfo; color: string};
  AddTrainerScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeDex" component={HomeDex} />
      <Stack.Screen name="DetailPokemon" component={DetailPokemon} />
    </Stack.Navigator>
  );
};
