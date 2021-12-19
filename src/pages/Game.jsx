import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { selectEmail, selectName, selectScore } from '../features/player/playerSlice';

const Game = () => {
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const playerScore = useSelector(selectScore);

  return (
    <Header
      playerName={ name }
      playerEmail={ email }
      score={ playerScore }
    />
  );
};

export default Game;
