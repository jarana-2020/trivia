import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Proptypes from 'prop-types';
import React from 'react';

const BoxAnswers = ({ answer, correctAnswer, handleClick, answered }) => {
  const alterBorderColor = () => {
    if (answer === correctAnswer) {
      return '3px solid rgb(6, 240, 15)';
    }
    return '3px solid rgb(255, 0, 0)';
  };

  return (
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
        onClick={ handleClick }
        sx={ {
          border: answered ? alterBorderColor() : null,
        } }
      >
        {answer}

      </Button>
    </Box>
  );
};

BoxAnswers.propTypes = {
  correctAnswer: Proptypes.string.isRequired,
  answer: Proptypes.string.isRequired,
  handleClick: Proptypes.func.isRequired,
  answered: Proptypes.bool.isRequired,
};

export default BoxAnswers;
