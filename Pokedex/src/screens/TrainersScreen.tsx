/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {SelectedTrainer} from '../actions/TrainersActions';
import {TrainerListProps} from './trainerList.props';
import {TrainerRow} from '../components/trainerRow.component';
import Icon from 'react-native-vector-icons/Ionicons';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <TrainerRow
      key={item.id}
      trainerId={item.id}
      traineLocation={item.location}
      trainerImage={item.picture}
      trainerName={item.name}
      trainerPhone={item.phone}
    />
  </TouchableOpacity>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TrainerListScreen = (props: TrainerListProps) => {
  const {trainerStore, navigation} = props;
  const dispatch = useDispatch();

  const getTrainerDetail = (trainerId: number | null) => {
    if (trainerId) {
      dispatch(SelectedTrainer(trainerStore.trainers[trainerId]));
    }
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AddTrainerScreen',
      }),
    );
  };

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => getTrainerDetail(item.id)} />;
  };

  return (
    <>
      <FlatList
        data={trainerStore.trainers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity onPress={() => getTrainerDetail(null)}>
        <Icon
          name="person-add"
          size={60}
          color={'blue'}
          style={{
            left: 320,
          }}
        />
      </TouchableOpacity>
    </>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    trainerStore: state.trainers,
  };
};

export default connect(mapStateToProps)(TrainerListScreen);
