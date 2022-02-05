/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TrainerRowProps} from './trainerRow.props';

export function TrainerRow(props: TrainerRowProps) {
  const {trainerName, trainerPhone} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 5,
        marginRight: 190,
        backgroundColor: 'grey',
        margin: 10,
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'column',
          padding: 10,
          paddingLeft: 16,
          borderRadius: 16,
          marginEnd: 20,
        }}>
        <Text>{trainerName}</Text>
        <Text>{trainerPhone}</Text>
      </View>
      <Icon name="person" size={80} />
    </View>
  );
}
