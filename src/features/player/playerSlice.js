import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    addName(state, action) {
      const { valueName } = action.payload;
      state.name = valueName;
    },
    addEmail(state, action) {
      const { valueEmail } = action.payload;
      state.email = valueEmail;
    },
  },
});

export const { addName, addEmail } = playerSlice;
export default playerSlice.reducer;
