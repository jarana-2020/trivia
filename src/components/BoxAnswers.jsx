import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Proptypes from 'prop-types';
import React from 'react';

const BoxAnswers = ({ index, answer, correctAnswer }) => (
  <Box
    sx={ {
      mt: '10px',
      justifyContent: 'center',
      display: 'flex',
      width: '100%' } }
    key={ index }
  >
    <Button
      data-testid={ answer === correctAnswer
        ? 'correct-answer'
        : 'wrong-answer' }
    >
      {answer}

    </Button>
  </Box>
);

BoxAnswers.propTypes = {
  index: Proptypes.number.isRequired,
  correctAnswer: Proptypes.string.isRequired,
  answer: Proptypes.string.isRequired,
};

export default BoxAnswers;
