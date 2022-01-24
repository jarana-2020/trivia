import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Proptypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { alterScore } from '../features/player/playerSlice';
import { calcScore } from '../helper/helper';
import ButtonNext from './ButtonNext';

const alterBorderColor = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    return '3px solid rgb(6, 240, 15)';
  }
  return '3px solid rgb(255, 0, 0)';
};

const getScore = async (timerAndScore, level, valueQuestion, dispatch) => {
  const { time, playerScore } = timerAndScore;
  if (valueQuestion === 'correct') {
    dispatch(alterScore(calcScore(time, level) + playerScore));
  }
};

const BoxAnswers = ({ arrayQuestions, time, questionIndex,
  stopTimer, handleClick, isAnswered, setIsAnswered, playerScore }) => {
  const { shuffledQuestions } = arrayQuestions[questionIndex];
  const correctAnswer = arrayQuestions[questionIndex].correct_answer;
  const level = arrayQuestions[questionIndex].difficulty;
  const dispatch = useDispatch();

  const timeAndScore = {
    time,
    playerScore,
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
        <Box
          key={ index }
          className="box-answers"
        >
          <Button
            data-testid={ answer === correctAnswer
              ? 'correct-answer'
              : 'wrong-answer' }
            value={ answer === correctAnswer
              ? 'correct'
              : 'wrong' }
            onClick={ handleClickAnswer }
            disabled={ time === 0 || isAnswered }
            sx={ {
              border: isAnswered ? alterBorderColor(answer, correctAnswer) : null,
            } }
          >
            {answer}
          </Button>
        </Box>
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
  playerScore: Proptypes.number.isRequired,
};

export default BoxAnswers;
