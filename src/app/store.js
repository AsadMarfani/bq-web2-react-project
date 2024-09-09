import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from '../features/exercises/exercisesSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
    auth: authReducer,
  },
});
