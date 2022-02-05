import {combineReducers, createStore} from 'redux';
import PokemonReducer from './reducers/PokemonReducer';
import TrainersReducer from './reducers/TrainersReducer';

const reducers = combineReducers({
  pokemons: PokemonReducer,
  trainers: TrainersReducer,
});

export default createStore(reducers);
