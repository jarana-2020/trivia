import { Box, Typography } from '@mui/material';
import React from 'react';

const compare = (a, b) => {
  const negative = -1;
  if (a.score < b.score) return 1;
  if (a.score > b.score) return negative;
  return 0;
};

const Ranking = () => {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  ranking.sort(compare);
  return (
    <Box
      className="box-ranking"
    >
      <Typography
        data-testid="ranking-title"
        variant="h1"
        component="p"
        mb="0.2em"
      >
        Ranking
      </Typography>
      { ranking.map((player, index) => (
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
    </Box>
  );
};

export default Ranking;
