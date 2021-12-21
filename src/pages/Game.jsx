import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getQuestions, selectQuestions } from '../features/game/gameSlice';

const Game = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const [questionIndex] = useState(0);
  const haveData = questions.length > 0;

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  if (!haveData) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Typography
        data-testid="question-category"
        variant="h6"
        component="p"
      >
        teste

      </Typography>
      <Typography
        data-testid="question-text"
        variant="h6"
        component="p"
      >
        teste

      </Typography>
    </>
  );
};

export default Game;
