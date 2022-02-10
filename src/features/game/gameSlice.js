import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchQuestions, shuffleArray } from '../../helper/helper';

export const getQuestions = createAsyncThunk(
  'game/getQuestions',
  async (url) => {
    const result = await fetchQuestions(url);
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
    entryPoint: 'https://opentdb.com/api.php?amount=5&encode=base64',
  },
  reducers: {
    alterUrl(state, action) {
      state.entryPoint = action.payload;
    },
  },
  extraReducers: {
    [getQuestions.fulfilled]: (state, { payload }) => {
      state.questions = payload;
    },
  },

});
export const selectUrl = (state) => state.game.entryPoint;
export const selectQuestions = (state) => state.game.questions;
export const { alterUrl } = gameSlice.actions;
export default gameSlice.reducer;
