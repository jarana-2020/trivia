import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },
    addEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const selectName = (state) => state.player.name;
export const selectEmail = (state) => state.player.email;

export const { addName, addEmail } = playerSlice.actions;
export default playerSlice.reducer;