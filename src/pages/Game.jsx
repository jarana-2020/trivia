import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { getQuestions, selectQuestions } from '../features/game/gameSlice';

const Game = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const [questionIndex] = useState(0);
  console.log(questions.length, questionIndex);

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <>
      <Header />
      <Typography
        data-testid="question-category"
        variant="h6"
        component="p"
      >
        {/* {category} */}

      </Typography>
      <Typography
        data-testid="question-text"
        variant="h6"
        component="p"
      >
        {/* {question} */}

      </Typography>
    </>
  );
};

export default Game;
