import { Button } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

const FeedbackButtons = ({ handlePlayAgain, handleRanking }) => (
  <Box
    sx={ {
      display: 'flex',
      justifyContent: 'center',
      mt: '10px',
    } }
  >
    <Button
      data-testid="btn-play-again"
      variant="contained"
      onClick={ handlePlayAgain }
      sx={ { mr: '5px' } }
    >
      Play Again
    </Button>
    <Button
      data-testid="btn-ranking"
      variant="contained"
      onClick={ handleRanking }
    >
      Ranking
    </Button>
  </Box>
);

FeedbackButtons.propTypes = {
  handlePlayAgain: PropTypes.func.isRequired,
  handleRanking: PropTypes.func.isRequired,
};

export default FeedbackButtons;
