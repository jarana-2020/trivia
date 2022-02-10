import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SelectSettings from '../components/SelectSettings';
import { alterUrl } from '../features/game/gameSlice';

const handleCategory = ({ target }, setCategory) => {
  const { value } = target;
  setCategory(value);
};
const handleLevel = ({ target }, setLevel) => {
  const { value } = target;
  setLevel(value);
};
const handleType = ({ target }, setType) => {
  const { value } = target;
  setType(value);
};

const redirectPage = async (dispatch, url, history) => {
  dispatch(alterUrl(url));
  history.push('/');
};

const Settings = () => {
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [type, setType] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const paramsUrl = `category=${category}&difficulty=${level}&type=${type}`;
  const url = `https://opentdb.com/api.php?amount=5&encode=base64&${paramsUrl}`;

  return (
    <>
      <Typography
        variant="h1"
        component="header"
        style={ { textAlign: 'center' } }
      >
        Settings
      </Typography>
      <SelectSettings
        category={ category }
        funcCategory={ (event) => handleCategory(event, setCategory) }
        level={ level }
        funcLevel={ (event) => handleLevel(event, setLevel) }
        type={ type }
        funcType={ (event) => handleType(event, setType) }
      />
      <Button
        className="btn-settings"
        variant="contained"
        endIcon={ <SendIcon /> }
        onClick={ () => redirectPage(dispatch, url, history) }
      >
        Apply and Play
      </Button>
    </>

  );
};

export default Settings;
