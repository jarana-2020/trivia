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

const renderGravatar = (email) => (
  <Box
    sx={ {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    } }
  >
    <img
      src={ getGravatar(email) }
      alt="img-gravatar"
    />
  </Box>
);

const renderPlayerInfo = (name, score) => (

  <Box
    component="section"
  >
    <Typography
      data-testid="player-name"
      variant="h6"
      component="p"
      style={ { marginRight: '5px' } }
    >
      {`Player Name: ${name}`}

    </Typography>
    <Typography
      data-testid="player-email"
      variant="h6"
      component="p"
    >
      {`Score:${score}`}

    </Typography>
  </Box>

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
          justifyContent: 'space-between' } }
      >
        {renderGravatar(email)}
        <img
          className="logo"
          src={ Logo }
          style={ { alignSelf: 'flex-end' } }
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
      {renderPlayerInfo(name, score)}
    </header>
  );
};

export default Header;
