import { Box, Button } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useHistory } from 'react-router-dom';
import RankingValues from '../components/RankingValues';

const compare = (a, b) => {
  const negative = -1;
  if (a.score < b.score) return 1;
  if (a.score > b.score) return negative;
  return 0;
};

const Ranking = () => {
  const history = useHistory();
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  ranking.sort(compare);
  return (
    <Box
      className="box-ranking"
    >
      <RankingValues array={ ranking } />
      <Button
        variant="contained"
        endIcon={ <SendIcon /> }
        onClick={ () => history.push('/') }
        sx={ { mt: '5px' } }
      >
        Play again
      </Button>
    </Box>
  );
};

export default Ranking;
