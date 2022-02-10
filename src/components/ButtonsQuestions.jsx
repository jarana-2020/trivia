import { Box, Button } from '@mui/material';
import React from 'react';
import Proptypes from 'prop-types';
import { b64ToUtf8 } from '../helper/helper';

const alterBorderColor = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    return '3px solid rgb(6, 240, 15)';
  }
  return '3px solid rgb(255, 0, 0)';
};

const ButtonsQuestions = (
  { answer, correctAnswer, handleClickAnswer, time, isAnswered },
) => (
  <Box className="box-answers">
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
      {b64ToUtf8(answer)}
    </Button>
  </Box>
);

ButtonsQuestions.propTypes = {
  answer: Proptypes.string.isRequired,
  correctAnswer: Proptypes.string.isRequired,
  handleClickAnswer: Proptypes.func.isRequired,
  time: Proptypes.number.isRequired,
  isAnswered: Proptypes.bool.isRequired,
};

export default ButtonsQuestions;
