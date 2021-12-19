import React from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import Settings from '@mui/icons-material/SettingsApplications';
import { useHistory } from 'react-router-dom';
import Logo from '../images/trivia.png';
import getGravatar from '../services/requestGravatar';
import { selectEmail, selectName, selectScore } from '../features/player/playerSlice';

const renderPageSettings = (history) => {
  history.push('/settings');
};

const renderDataPlayer = (name, score) => (
  <>
    <Typography
      variant="caption"
      component="p"
    >
      {name}

    </Typography>
    <Typography
      variant="caption"
      component="p"
    >
      {score}

    </Typography>
  </>

);

const Header = () => {
  const history = useHistory();
  const email = useSelector(selectEmail);
  const name = useSelector(selectName);
  const score = useSelector(selectScore);

  return (
    <header>
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center' } }
      >
        <img
          src={ getGravatar(email) }
          alt="img-gravatar"
        />
        {renderDataPlayer(name, score)}
        <img
          className="logo"
          src={ Logo }
          alt="logo-trivia"
        />
        <Tooltip title="Settings">
          <IconButton
            aria-label="configuration"
            fontSize="large"
            onClick={ () => renderPageSettings(history) }
          >
            <Settings fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
    </header>
  );
};

export default Header;
