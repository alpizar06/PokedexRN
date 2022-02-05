/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigator, RootStackParams} from './Navigator';
import {SearchScreen} from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailPokemon} from '../screens/DetailPokemon';
import {TeamsScreen} from '../screens/TeamsScreen';
import AddTrainerScreen from '../screens/AddTrainerScreen';
import TrainersScreen from '../screens/TrainersScreen';
//import {AddTrainerScreen} from '../screens/AddTrainerScreen';

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab2.Screen name="HomeDex" component={SearchScreen} />
      <Tab2.Screen name="DetailPokemon" component={DetailPokemon} />
    </Tab2.Navigator>
  );
};

const TabTrainer = createStackNavigator<RootStackParams>();

export const TabTrainerScreens = () => {
  return (
    <TabTrainer.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <TabTrainer.Screen name="HomeDex" component={TrainersScreen} />
      <TabTrainer.Screen name="AddTrainerScreen" component={AddTrainerScreen} />
    </TabTrainer.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: '#5856D6',
        labelStyle: {
          marginBottom: 10,
        },
        style: {
          borderWidth: 0,
          elevation: 0,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Pokedex"
        component={Navigator}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Busqueda',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="search-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="TrainersScreen"
        component={TabTrainerScreens}
        //component={AddTrainerScreen}
        options={{
          tabBarLabel: 'Entrenadores',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="people" />
          ),
        }}
      />
      <Tab.Screen
        name="TeamsScreen"
        component={TeamsScreen}
        options={{
          tabBarLabel: 'Equipos',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="git-network" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
