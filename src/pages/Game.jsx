import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoxAnswers from '../components/BoxAnswers';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Timer from '../components/Timer';
import { getQuestions, selectQuestions } from '../features/game/gameSlice';
import { addEmail, addName, alterScore,
  selectAssertions, selectScore } from '../features/player/playerSlice';
import maxTimer, { calcScore, oneSecond } from '../helper/helper';

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

const getScore = async (timer, level, valueQuestion, dispatch) => {
  if (valueQuestion === 'correct') {
    dispatch(alterScore(calcScore(timer, level)));
  }
};

const saveScoreStorage = (assertions, score) => {
  const dataStorage = JSON.parse(localStorage.getItem('player'));
  const playerInfo = { ...dataStorage, assertions, score };
  localStorage.setItem('player', JSON.stringify(playerInfo));
};

const renderQuestions = (paramsQuestions) => {
  const { questions, questionIndex,
    isAnswered, setIsAnswered, timer,
    dispatch } = paramsQuestions;
  const correctAnswer = questions[questionIndex].correct_answer;
  const { shuffledQuestions } = questions[questionIndex];

  const handleClickAnswer = ({ target: { value } }) => {
    const valueQuestion = value;
    const level = questions[questionIndex].difficulty;
    stopTimer();
    getScore(timer, level, valueQuestion, dispatch);
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
  const assertions = useSelector(selectAssertions);
  const score = useSelector(selectScore);
  const [questionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState(maxTimer);

  const paramsQuestions = { questions,
    questionIndex,
    isAnswered,
    setIsAnswered,
    timer,
    dispatch };

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
      {renderQuestions(paramsQuestions)}
    </>

  );
};

export default Game;
