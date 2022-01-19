import { Box } from '@mui/system';
import React from 'react';
import Header from '../components/Header';

const Feedback = () => (
  <>
    <Header />
    <Box
      sx={ {
        mt: '20px',
        border: '1px black solid',
        justifyContent: 'center',
        display: 'flex',
        width: '100%' } }
    />
  </>

);

export default Feedback;
