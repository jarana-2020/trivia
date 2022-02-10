import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BoxAnswers from '../components/BoxAnswers';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Timer from '../components/Timer';
import { getQuestions, selectQuestions, selectUrl } from '../features/game/gameSlice';
import { addEmail, addName } from '../features/player/playerSlice';
import maxTimer, { b64ToUtf8, oneSecond } from '../helper/helper';

let timeout;

const getPlayerInfo = (dispatch) => {
  if (localStorage.getItem('player')) {
    const data = JSON.parse(localStorage.getItem('player'));
    const { name, gravatarEmail } = data;
    dispatch(addEmail(gravatarEmail));
    dispatch(addName(name));
  }
};

const renderCategoryAndQuestion = (questionObj, timer) => {
  const { category, question } = questionObj;
  return (
    <>
      <Typography
        sx={ { textAlign: 'center', mt: '10px' } }
        data-testid="question-category"
        variant="h6"
        component="p"
      >
        { b64ToUtf8(category) }

      </Typography>
      <Typography
        sx={ { textAlign: 'center' } }
        data-testid="question-text"
        variant="h6"
        component="p"
      >
        { b64ToUtf8(question) }

      </Typography>
      <Timer timer={ timer } />
    </>
  );
};

const stopTimer = () => clearTimeout(timeout);

const redirectPage = (history) => {
  history.push('/feedback');
};

const verifyIndexQuestion = (setQuestionIndex, setIsAnswered,
  setTimer) => {
  setQuestionIndex((prevTimer) => prevTimer + 1);
  setIsAnswered(false);
  setTimer(maxTimer);
};

const Game = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const url = useSelector(selectUrl);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(maxTimer);
  const [isAnswered, setIsAnswered] = useState(false);
  const history = useHistory();

  const decreaseNum = () => { setTimer(timer - 1); };

  const alterQuestion = () => {
    const MAX_QUESTIONS = 4;
    if (questionIndex === MAX_QUESTIONS) {
      redirectPage(history);
    } else verifyIndexQuestion(setQuestionIndex, setIsAnswered, setTimer);
  };

  useEffect(() => {
    dispatch(getQuestions(url));
    getPlayerInfo(dispatch);
  }, []);

  useEffect(() => {
    if (timer === 0) return;
    timeout = setInterval(decreaseNum, oneSecond);
    return () => clearInterval(timeout);
  }, [timer]);

  if (!questions.length > 0) return <Loading />;
  return (
    <>
      <Header />
      {renderCategoryAndQuestion(questions[questionIndex], timer)}
      <BoxAnswers
        arrayQuestions={ questions }
        time={ timer }
        questionIndex={ questionIndex }
        stopTimer={ stopTimer }
        handleClick={ alterQuestion }
        isAnswered={ isAnswered }
        setIsAnswered={ setIsAnswered }
      />
    </>);
};

export default Game;
