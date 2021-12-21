import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { getQuestions, selectQuestions } from '../features/game/gameSlice';

const Game = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <Header />
  );
};

export default Game;
