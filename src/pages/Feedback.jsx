import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FeedbackButtons from '../components/FeedbackButtons';
import FeedbackMessage from '../components/FeedbackMessage';
import Header from '../components/Header';
import { selectAssertions, selectScore } from '../features/player/playerSlice';

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
