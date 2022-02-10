import Proptypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alterScore, selectAssertions,
  selectScore } from '../features/player/playerSlice';
import { b64ToUtf8, calcScore } from '../helper/helper';
import ButtonNext from './ButtonNext';
import ButtonsQuestions from './ButtonsQuestions';

const getScore = async (timerAndScore, level, valueQuestion, dispatch) => {
  const { time, score } = timerAndScore;
  if (valueQuestion === 'correct') {
    dispatch(alterScore(calcScore(time, b64ToUtf8(level)) + score));
  }
};

const saveScoreStorage = (assertions, score) => {
  const dataStorage = JSON.parse(localStorage.getItem('player'));
  const playerInfo = { ...dataStorage, assertions, score };
  localStorage.setItem('player', JSON.stringify(playerInfo));
};

const BoxAnswers = ({ arrayQuestions, time, questionIndex,
  stopTimer, handleClick, isAnswered, setIsAnswered }) => {
  const { shuffledQuestions } = arrayQuestions[questionIndex];
  const correctAnswer = arrayQuestions[questionIndex].correct_answer;
  const level = arrayQuestions[questionIndex].difficulty;
  const score = useSelector(selectScore);
  const assertions = useSelector(selectAssertions);
  const dispatch = useDispatch();

  useEffect(() => saveScoreStorage(assertions, score), [score]);

  const timeAndScore = {
    time,
    score,
  };

  const handleClickAnswer = ({ target }) => {
    const { value } = target;
    stopTimer();
    getScore(timeAndScore, level, value, dispatch);
    setIsAnswered(true);
  };

  return (
    <>
      {shuffledQuestions.map((answer, index) => (
        <ButtonsQuestions
          key={ index }
          answer={ answer }
          correctAnswer={ correctAnswer }
          handleClickAnswer={ handleClickAnswer }
          isAnswered={ isAnswered }
          time={ time }
        />

      ))}
      <ButtonNext
        isAnswered={ isAnswered }
        handleClick={ handleClick }
      />
    </>
  );
};

BoxAnswers.propTypes = {
  arrayQuestions: Proptypes.arrayOf(Proptypes.object).isRequired,
  questionIndex: Proptypes.number.isRequired,
  time: Proptypes.number.isRequired,
  stopTimer: Proptypes.func.isRequired,
  handleClick: Proptypes.func.isRequired,
  setIsAnswered: Proptypes.func.isRequired,
  isAnswered: Proptypes.bool.isRequired,
};

export default BoxAnswers;
