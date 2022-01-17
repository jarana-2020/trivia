import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    name: '',
    email: '',
    assertions: 0,
    score: 0,
  },
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },
    addEmail(state, action) {
      state.email = action.payload;
    },
    alterScore(state, action) {
      state.score = action.payload;
      state.assertions += 1;
    },
  },
});

export const selectName = (state) => state.player.name;
export const selectEmail = (state) => state.player.email;
export const selectAssertions = (state) => state.player.assertions;
export const selectScore = (state) => state.player.score;

export const { addName, addEmail, alterScore } = playerSlice.actions;
export default playerSlice.reducer;
