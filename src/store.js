import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './redux/slice'

const store = configureStore({
    reducer: {
        user: loginReducer,
      },
});

export default store;