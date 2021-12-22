import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Proptypes from 'prop-types';
import React from 'react';

const BoxAnswers = ({ answer, correctAnswer, handleClick }) => (
  <Box
    sx={ {
      mt: '10px',
      justifyContent: 'center',
      display: 'flex',
      width: '100%' } }
  >
    <Button
      data-testid={ answer === correctAnswer
        ? 'correct-answer'
        : 'wrong-answer' }
      sx={ {
        border: answer === correctAnswer
          ? '3px solid rgb(6, 240, 15)'
          : '3px solid rgb(255, 0, 0)' } }
    >
      {answer}

    </Button>
  </Box>
);

BoxAnswers.propTypes = {
  correctAnswer: Proptypes.string.isRequired,
  answer: Proptypes.string.isRequired,
  handleClick: Proptypes.func.isRequired,
};

export default BoxAnswers;
