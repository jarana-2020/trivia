import { IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Settings from '@mui/icons-material/SettingsApplications';
import Logo from '../images/trivia.png';

const Game = () => (
  <header>
    <Box
      sx={ {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center' } }
    >
      <img
        className="logo"
        src={ Logo }
        alt="logo-trivia"
      />
      <Tooltip title="Settings">
        <IconButton
          aria-label="configuration"
          fontSize="large"
        >
          <Settings fontSize="large" />
        </IconButton>
      </Tooltip>
    </Box>
  </header>
);

export default Game;
