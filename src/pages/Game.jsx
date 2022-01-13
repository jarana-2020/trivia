import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoxAnswers from '../components/BoxAnswers';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Timer from '../components/Timer';
import { getQuestions, selectQuestions } from '../features/game/gameSlice';
import maxTimer from '../helper/helper';

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

const renderQuestions = (paramsQuestions) => {
  const { questions, questionIndex,
    isAnswered, setIsAnswered, timer } = paramsQuestions;
  const correctAnswer = questions[questionIndex].correct_answer;
  const { shuffledQuestions } = questions[questionIndex];

  const handleClickAnswer = () => {
    setIsAnswered(true);
  };

  return (
    <>
      {shuffledQuestions.map((answer, index) => (
        <BoxAnswers
          key={ index }
          answer={ answer }
          answered={ isAnswered }
          correctAnswer={ correctAnswer }
          handleClick={ handleClickAnswer }
          time={ timer }
        />
      ))}
    </>
  );
};

const Game = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const [questionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState(maxTimer);
  const haveData = questions.length > 0;
  let countDown = maxTimer;

  const paramsQuestions = {
    questions,
    questionIndex,
    isAnswered,
    setIsAnswered,
    timer,
  };

  const startTimer = () => {
    const oneSecond = 1000;
    if (countDown > 0) {
      countDown -= 1;
      setTimer((prevTimer) => prevTimer - 1);
    }
    setTimeout(startTimer, oneSecond);
  };

  useEffect(() => {
    dispatch(getQuestions());
    startTimer();
    return () => clearTimeout(startTimer);
  }, []);

  if (!haveData) {
    return (
      <Loading />
    );
  }
  const { category, question } = questions[questionIndex];
  return (
    <>
      <Header />
      {renderCategoryAndQuestion(category, question, timer)}
      {renderQuestions(paramsQuestions)}
    </>

  );
};

export default Game;
