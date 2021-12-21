import { combineReducers } from 'redux';
import playerReducer from '../features/player/playerSlice';
import gameReducer from '../features/game/gameSlice';

export default combineReducers({
  player: playerReducer,
  game: gameReducer,
});
