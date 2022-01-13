import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { shuffleArray } from '../../helper/helper';

const url = 'https://opentdb.com/api.php?amount=5';

export const getQuestions = createAsyncThunk(
  'game/getQuestions',
  async () => {
    const fetchData = await fetch(url);
    const result = await fetchData.json();
    const { results } = result;
    const newResults = results.map((question) => {
      const { incorrect_answers: incorrect, correct_answer: correct } = question;
      const alteredQuestion = { ...question,
        shuffledQuestions: shuffleArray([...incorrect, correct]) };
      return alteredQuestion;
    });
    return newResults;
  },
);

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    questions: [],
  },
  reducers: {},
  extraReducers: {
    [getQuestions.fulfilled]: (state, { payload }) => {
      state.questions = payload;
    },
  },

});

export const selectQuestions = (state) => state.game.questions;
export default gameSlice.reducer;
