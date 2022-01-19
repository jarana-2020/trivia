import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { selectAssertions } from '../features/player/playerSlice';

const getFeedbackMessage = (assertions) => {
  const MIN_RESULT = 3;
  if (assertions < MIN_RESULT) {
    return '"Could be better..."';
  }
  if (assertions >= MIN_RESULT) {
    return '"Nice job!"';
  }
};

const Feedback = () => {
  const assertions = useSelector(selectAssertions);
  return (
    <>
      <Header />
      <Box
        sx={ {
          mt: '20px',
          border: '1px black solid',
          justifyContent: 'center',
          display: 'flex',
          width: '100%' } }
      >
        <Typography
          data-testid="player-name"
          variant="h6"
          component="p"
          style={ { marginRight: '5px' } }
        >
          {getFeedbackMessage(assertions)}

        </Typography>
      </Box>
    </>
  );
};

export default Feedback;
