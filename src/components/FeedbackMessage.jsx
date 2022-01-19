import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

const FeedbackMessage = ({ assertions, score, getMessage }) => (
  <Box
    className="box-feedback"
  >
    <Typography
      data-testid="player-name"
      variant="h6"
      component="p"
      style={ { marginRight: '5px' } }
    >
      {getMessage(assertions)}

    </Typography>
    <Typography
      data-testid="player-name"
      variant="h6"
      component="p"
      style={ { marginRight: '5px' } }
    >
      {`Total Score: ${score}`}

    </Typography>
    <Typography
      data-testid="player-name"
      variant="h6"
      component="p"
      style={ { marginRight: '5px' } }
    >
      {`Total Assertions: ${assertions}`}

    </Typography>
  </Box>
);

FeedbackMessage.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  getMessage: PropTypes.func.isRequired,
};

export default FeedbackMessage;
