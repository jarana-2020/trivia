import { Typography } from '@mui/material';
import Proptypes from 'prop-types';
import React from 'react';

const Timer = ({ timer }) => (
  <Typography
    sx={ {
      textAlign: 'center',
      marginTop: '25px',
    } }
    data-testid="question-text"
    variant="h3"
    component="p"
  >
    {timer}

  </Typography>
);

Timer.propTypes = {
  timer: Proptypes.number.isRequired,
};

export default Timer;
