import React from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Proptypes from 'prop-types';
import Settings from '@mui/icons-material/SettingsApplications';
import { useHistory } from 'react-router-dom';
import Logo from '../images/trivia.png';

const renderPageSettings = (history) => {
  history.push('/settings');
};

const Header = ({ playerName }) => {
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
        <Typography
          variant="caption"
          component="p"
        >
          {playerName}

        </Typography>
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

Header.propTypes = {
  playerName: Proptypes.string.isRequired,
};

export default Header;
