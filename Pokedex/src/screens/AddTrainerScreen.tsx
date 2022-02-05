/* eslint-disable react-native/no-inline-styles */
import {CommonActions} from '@react-navigation/core';
import React from 'react';
import {
  TextInput,
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect, useDispatch} from 'react-redux';
import {AddTrainer} from '../actions/TrainersActions';
import {useForm} from '../hooks/useForm';
import {Trainer} from '../interfaces/pokemoninterfaces';

//interface Props extends StackScreenProps<RootStackParams, 'AddTrainerScreen'> {}

export const AddTrainerScreen = (trainerStore: any) => {
  const {navigation} = trainerStore;
  const dispatch = useDispatch();
  const {top} = useSafeAreaInsets();
  const {state, name, lastname, gender, address, phone, birthdate, onChange} =
    useForm({} as Trainer);

  const saveTrainer = () => {
    var trainerSelected = state;
    //console.log(state);
    //console.log(navigation);
    //console.log(trainerStore);
    console.log(trainerStore.allSubjects);
    trainerSelected.id = 1;
    dispatch(AddTrainer(trainerSelected));
    goToTrainers();
  };

  const goToTrainers = () => {
    navigation.dispatch(CommonActions.goBack());
  };
  return (
    <>
      <View
        style={{
          ...styles.headerContainer,
        }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
          style={{
            ...styles.backButton,
            top: top + 10,
          }}>
          <Icon name="arrow-back-outline" size={40} />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
          }}>
          Entrenador
        </Text>
      </View>
      <View style={{marginLeft: 20}}>
        <TextInput
          style={styles.InputsStyle}
          placeholder="Nombre"
          value={name}
          onChange={({nativeEvent}) => onChange('name', nativeEvent.text)}
        />
        <TextInput
          style={styles.InputsStyle}
          placeholder="Apellido"
          value={lastname}
          onChange={({nativeEvent}) => onChange('lastname', nativeEvent.text)}
        />
        <TextInput
          style={styles.InputsStyle}
          placeholder="Sexo"
          value={gender}
          onChange={({nativeEvent}) => onChange('gender', nativeEvent.text)}
        />
        <TextInput
          style={styles.InputsStyle}
          placeholder="Direccion"
          value={address}
          onChange={({nativeEvent}) => onChange('address', nativeEvent.text)}
        />
        <TextInput
          style={styles.InputsStyle}
          placeholder="Telefono"
          value={phone}
          onChange={({nativeEvent}) => onChange('phone', nativeEvent.text)}
        />
        <TextInput
          style={styles.InputsStyle}
          placeholder="Fecha de nacimiento"
          value={birthdate}
          onChange={({nativeEvent}) => onChange('birthdate', nativeEvent.text)}
        />
      </View>
      <View style={{margin: 10, borderRadius: 20}}>
        <Button title="Agregar" onPress={() => saveTrainer()} />
      </View>
    </>
  );
};

const mapStateToProps = (state: {trainers: any}) => {
  return {
    trainerStore: state.trainers,
  };
};

const styles = StyleSheet.create({
  InputsStyle: {
    fontSize: 20,
  },
  headerContainer: {
    zIndex: 999,
    alignItems: 'center',
    borderRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
});

export default connect(mapStateToProps)(AddTrainerScreen);
