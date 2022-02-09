import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Proptypes from 'prop-types';

const RankingValues = ({ array }) => (
  <>
    <Typography
      data-testid="ranking-title"
      variant="h1"
      component="p"
      mb="0.2em"
    >
      Ranking
    </Typography>
    { array.map((player, index) => (
      <Box
        key={ index }
        className="box-ranking-data"
      >
        <img alt="img-player" src={ player.picture } />
        <Typography
          data-testid={ `player-name-${index}` }
          variant="h4"
          component="p"
          ml="0.5em"
        >
          {player.name}

        </Typography>
        <Typography
          data-testid={ `player-name-${index}` }
          variant="h4"
          component="p"
          ml="0.3em"
        >
          {player.score}

        </Typography>
      </Box>
    ))}
  </>

);

RankingValues.propTypes = {
  array: Proptypes.arrayOf(Proptypes.shape({
    name: Proptypes.string,
    picture: Proptypes.string,
    score: Proptypes.number,
  })).isRequired,
};

export default RankingValues;
