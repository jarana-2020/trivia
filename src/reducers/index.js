import { combineReducers } from 'redux';
import playerReducer from '../features/player/playerSlice';

export default combineReducers({
  player: playerReducer,
});
