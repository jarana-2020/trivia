import { Typography } from '@mui/material';
import React from 'react';
import Header from './Header';

const Loading = () => (
  <>
    <Header />
    <Typography
      data-testid="question-category"
      variant="h4"
      component="p"
    >
      Loading...Loading...Loading
    </Typography>
  </>
);

export default Loading;
