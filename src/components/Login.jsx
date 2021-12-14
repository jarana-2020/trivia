import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import logo from '../images/trivia.png';
import '../App.css';

const validateEmail = (email) => {
  const regEX = /\S+@\S+\.\S+/;
  return regEX.test(email);
};

const getDataInfo = (email, name) => {
  if (validateEmail(email) && name.length > 0) {
    return false;
  }
  return true;
};

const renderLoginEntries = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const verifyValues = getDataInfo(email, name);
  return (
    <>
      <TextField
        autoComplete="off"
        id="outlined-name"
        InputProps={ {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        } }
        label="Player Name"
        variant="standard"
        value={ name }
        fullWidth
        onChange={ ({ target }) => setName(target.value) }
      />
      <TextField
        autoComplete="off"
        type="email"
        id="outlined-email"
        InputProps={ {
          startAdornment: (
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          ),
        } }
        label="E-mail"
        variant="standard"
        value={ email }
        margin="normal"
        fullWidth
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <Button
        variant="contained"
        endIcon={ <SendIcon /> }
        disabled={ verifyValues }
      >
        Play
      </Button>
    </>
  );
};

const Login = () => (
  <Box
    component="section"
    className="section-login"
    sx={ { maxWidth: 'sm' } }
  >
    <img
      alt="logo-trivia"
      className="img-logo"
      src={ logo }
    />
    {renderLoginEntries()}
  </Box>
);

export default Login;
