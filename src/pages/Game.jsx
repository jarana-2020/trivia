import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoxAnswers from '../components/BoxAnswers';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getQuestions, selectQuestions } from '../features/game/gameSlice';

// consulted page https://www.horadecodar.com.br/2021/05/10/como-embaralhar-um-array-em-javascript-shuffle/

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
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
    <Typography
      sx={ {
        textAlign: 'center',
        marginTop: '25px',
      } }
      data-testid="question-text"
      variant="h3"
      component="p"
    >
      {timer}

    </Typography>
  </>
);

const renderQuestions = (paramsQuestions) => {
  const { questions, questionIndex,
    isAnswered, setIsAnswered, timer } = paramsQuestions;
  const correctAnswer = questions[questionIndex].correct_answer;
  const incorrectAnswers = questions[questionIndex].incorrect_answers;
  const arrayQuestions = [...incorrectAnswers, correctAnswer];
  shuffleArray(arrayQuestions);

  const handleClickAnswer = () => {
    setIsAnswered(true);
  };

  return (
    <>
      {arrayQuestions.map((answer, index) => (
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
  const maxTimer = 30;
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

  function startTimer() {
    const oneSecond = 1000;
    if (countDown > 0) {
      countDown -= 1;
      setTimer((prevTimer) => prevTimer - 1);
    }
    setTimeout(startTimer, oneSecond);
  }

  useEffect(() => {
    dispatch(getQuestions());
    startTimer();
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
