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

const renderCategoryAndQuestion = (category, question) => (
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
  </>
);

const Game = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const [questionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const haveData = questions.length > 0;

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  const handleClickAnswer = () => {
    setIsAnswered(true);
  };

  if (!haveData) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }
  const { category, question } = questions[questionIndex];
  const correctAnswer = questions[questionIndex].correct_answer;
  const incorrectAnswers = questions[questionIndex].incorrect_answers;
  const arrayQuestions = [...incorrectAnswers, correctAnswer];
  shuffleArray(arrayQuestions);

  return (
    <>
      <Header />
      {renderCategoryAndQuestion(category, question)}
      {arrayQuestions.map((answer, index) => (
        <BoxAnswers
          key={ index }
          answer={ answer }
          answered={ isAnswered }
          correctAnswer={ correctAnswer }
          handleClick={ handleClickAnswer }
        />
      ))}
    </>
  );
};

export default Game;
