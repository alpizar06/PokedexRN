import {
  addTeam,
  addTrainer,
  selectedTeam,
  selectedTrainer,
} from '../actions/TrainesActionsTypes';
import {Team, Trainer} from '../interfaces/pokemoninterfaces';

interface TrainerState {
  trainers: Trainer[];
  selectedTrainer: Trainer;
  allSubjects: string[];
  teams: Team[];
}

const INITIAL_STATE: TrainerState = {
  trainers: [],
  selectedTrainer: {} as Trainer,
  allSubjects: ['Matematica', 'Fisica', 'Sistemas operativos', 'Economia'],
  teams: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case selectedTrainer:
      return {
        ...state,
        selectedTrainer: action.payload,
      };
    case addTrainer:
      console.log('addTrainer', action.payload);
      return {
        ...state,
        trainers: [...state.trainers, action.payload],
      };
    case addTeam:
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };
    case selectedTeam:
      return {
        ...state,
        selectedTeam: action.payload,
      };
    default:
      return state;
  }
};
