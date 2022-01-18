import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoxAnswers from '../components/BoxAnswers';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Timer from '../components/Timer';
import { getQuestions, selectQuestions } from '../features/game/gameSlice';
import { addEmail, addName,
  selectAssertions, selectScore } from '../features/player/playerSlice';
import maxTimer, { oneSecond } from '../helper/helper';

let timeout;
let countDown = maxTimer;

const getPlayerInfo = (dispatch) => {
  if (localStorage.getItem('player')) {
    const data = JSON.parse(localStorage.getItem('player'));
    const { name, gravatarEmail } = data;
    dispatch(addEmail(gravatarEmail));
    dispatch(addName(name));
  }
};

const renderCategoryAndQuestion = (category, question, timer) => (
  <>
    <Typography
      sx={ { textAlign: 'center', mt: '10px' } }
      data-testid="question-category"
      variant="h6"
      component="p"
    >
      {category}

    </Typography>
    <Typography
      sx={ { textAlign: 'center' } }
      data-testid="question-text"
      variant="h6"
      component="p"
    >
      {question}

    </Typography>
    <Timer timer={ timer } />
  </>
);

const stopTimer = () => clearTimeout(timeout);

const saveScoreStorage = (assertions, score) => {
  const dataStorage = JSON.parse(localStorage.getItem('player'));
  const playerInfo = { ...dataStorage, assertions, score };
  localStorage.setItem('player', JSON.stringify(playerInfo));
};

const alterQuestionIndex = (setQuestionIndex) => {
  setQuestionIndex((prevTimer) => prevTimer + 1);
};

const Game = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const assertions = useSelector(selectAssertions);
  const score = useSelector(selectScore);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(maxTimer);

  const startTimer = () => {
    if (countDown > 0) {
      countDown -= 1;
      setTimer((prevTimer) => prevTimer - 1);
    }
    timeout = setTimeout(startTimer, oneSecond);
  };

  useEffect(() => {
    dispatch(getQuestions());
    getPlayerInfo(dispatch);
    startTimer();
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    saveScoreStorage(assertions, score);
  }, [score]);

  if (!questions.length > 0) {
    return (
      <Loading />
    );
  }
  const { category, question } = questions[questionIndex];
  return (
    <>
      <Header />
      {renderCategoryAndQuestion(category, question, timer)}
      <BoxAnswers
        arrayQuestions={ questions }
        time={ timer }
        questionIndex={ questionIndex }
        stopTimer={ stopTimer }
        handleClick={ () => alterQuestionIndex(setQuestionIndex) }
      />
    </>

  );
};

export default Game;
