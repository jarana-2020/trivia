import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://opentdb.com/api.php?amount=5';

export const getQuestions = createAsyncThunk(
  'questions/getQuestions',
  async () => {
    const fetchData = await fetch(url);
    const result = await fetchData.json();
    return result.results;
  },
);

const gameSlice = createSlice({
  name: 'questions',
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

export const selectQuestions = (state) => state.questions;
export default gameSlice.reducer;
