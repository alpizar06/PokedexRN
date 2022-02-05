import {Trainer, Team} from '../interfaces/pokemoninterfaces';
import {
  selectedTrainer,
  addTrainer,
  addTeam,
  selectedTeam,
} from './TrainesActionsTypes';

export const SelectedTrainer = (trainer: Trainer) => {
  return {
    type: selectedTrainer,
    payload: trainer,
  };
};

export const AddTrainer = (trainer: Trainer) => {
  return {
    type: addTrainer,
    payload: trainer,
  };
};

export const AddTeam = (team: Team) => {
  return {
    type: addTeam,
    payload: team,
  };
};

export const SelectedTeam = (team: Team) => {
  return {
    type: selectedTeam,
    payload: team,
  };
};
