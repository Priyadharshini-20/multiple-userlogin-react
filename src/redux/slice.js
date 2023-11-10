import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetails: {
    username: '',
    password: '',
    role: '',
  },
};

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserDetails: (state, action) => {
        state.userDetails = action.payload;
      },
    },
  });

  export const { setUserDetails } = loginSlice.actions;
  export default loginSlice.reducer;