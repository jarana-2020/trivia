import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { addName, addEmail, resetInfo } from '../features/player/playerSlice';
import logo from '../images/trivia.png';
import '../App.css';
import requestToken from '../services/requestToken';

const validateData = (name, email) => {
  const regEX = /\S+@\S+\.\S+/;
  return (!(regEX.test(email) && name.length > 0));
};

const saveTokenLocalStorage = async () => {
  const token = await requestToken();
  localStorage.setItem('token', JSON.stringify(token));
};

const savePlayerInfo = (name, email) => {
  const playerInfo = { name, gravatarEmail: email };
  localStorage.setItem('player', JSON.stringify(playerInfo));
};

const startGame = (history, name, email, dispatch) => {
  saveTokenLocalStorage();
  savePlayerInfo(name, email);
  dispatch(addName(name));
  dispatch(addEmail(email));
  history.push('/game');
};

const renderInputs = (name, setName, email, setEmail) => (
  <>
    <TextField
      autoComplete="off"
      id="outlined-name"
      label="Player Name"
      variant="standard"
      value={ name }
      fullWidth
      onChange={ ({ target }) => setName(target.value) }
      InputProps={ {
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      } }
    />
    <TextField
      autoComplete="off"
      type="email"
      id="outlined-email"
      label="E-mail"
      variant="standard"
      value={ email }
      margin="normal"
      fullWidth
      onChange={ ({ target }) => setEmail(target.value) }
      InputProps={ {
        startAdornment: (
          <InputAdornment position="start">
            <MailIcon />
          </InputAdornment>
        ),
      } }
    />
  </>
);

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetInfo());
  }, []);

  return (
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
      {renderInputs(name, setName, email, setEmail)}
      <Button
        variant="contained"
        endIcon={ <SendIcon /> }
        disabled={ validateData(name, email) }
        onClick={ () => startGame(history, name,
          email, dispatch) }
      >
        Play
      </Button>
    </Box>
  );
};

export default Login;
