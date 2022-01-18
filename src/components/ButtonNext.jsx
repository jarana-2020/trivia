import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const ButtonNext = ({ isAnswered, handleClick }) => (
  <Button
    className="btn-next"
    data-testid="btn-next"
    sx={ {
      display: isAnswered ? 'initial' : 'none',
    } }
    variant="contained"
    onClick={ handleClick }
  >
    Next
  </Button>
);

ButtonNext.propTypes = {
  isAnswered: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonNext;
