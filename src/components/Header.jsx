import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Settings from '@mui/icons-material/SettingsApplications';
import { useHistory } from 'react-router-dom';
import Logo from '../images/trivia.png';

const renderPageSettings = (history) => {
  history.push('/settings');
};

const Header = () => {
  const history = useHistory();

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
