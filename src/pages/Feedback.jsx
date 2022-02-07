import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FeedbackButtons from '../components/FeedbackButtons';
import FeedbackMessage from '../components/FeedbackMessage';
import Header from '../components/Header';
import { selectAssertions, selectEmail,
  selectName, selectScore } from '../features/player/playerSlice';
import getGravatar from '../services/requestGravatar';

const getFeedbackMessage = (assertions) => {
  const MIN_RESULT = 3;
  if (assertions < MIN_RESULT) {
    return '"Could be better..."';
  }
  if (assertions >= MIN_RESULT) {
    return '"Nice job!"';
  }
};

const redirectPage = (history, route) => {
  history.push(route);
};

const Feedback = () => {
  const assertions = useSelector(selectAssertions);
  const score = useSelector(selectScore);
  const history = useHistory();
  const playerName = useSelector(selectName);
  const playerEmail = useSelector(selectEmail);

  const saveRankingStorage = () => {
    const playerRanking = [
      { name: playerName, score, picture: getGravatar(playerEmail) }];

    if (localStorage.getItem('ranking')) {
      const { name, gravatarEmail, score: playerScore } = JSON
        .parse(localStorage.getItem('player'));

      const ranking = JSON.parse(localStorage.getItem('ranking'));
      ranking.push({ name, score: playerScore, picture: getGravatar(gravatarEmail) });
      localStorage.setItem('ranking', JSON.stringify(ranking));
      return;
    }
    localStorage.setItem('ranking', JSON.stringify(playerRanking));
  };

  useEffect(() => {
    saveRankingStorage();
  }, []);

  return (
    <>
      <Header />
      <FeedbackMessage
        score={ score }
        assertions={ assertions }
        getMessage={ getFeedbackMessage }
      />
      <FeedbackButtons
        handlePlayAgain={ () => redirectPage(history, '/') }
        handleRanking={ () => redirectPage(history, '/ranking') }
      />
    </>
  );
};

export default Feedback;
