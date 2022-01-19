import React from 'react';
import { useSelector } from 'react-redux';
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

const Feedback = () => {
  const assertions = useSelector(selectAssertions);
  const score = useSelector(selectScore);
  return (
    <>
      <Header />
      <FeedbackMessage
        score={ score }
        assertions={ assertions }
        getMessage={ getFeedbackMessage }
      />
    </>
  );
};

export default Feedback;
