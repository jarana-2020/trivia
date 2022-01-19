import { Button } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

const FeedbackButtons = ({ handlePlayAgain }) => (
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
    >
      Play Again
    </Button>
  </Box>
);

FeedbackButtons.propTypes = {
  handlePlayAgain: PropTypes.func.isRequired,
};

export default FeedbackButtons;
