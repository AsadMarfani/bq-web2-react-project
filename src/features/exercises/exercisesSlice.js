import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exercises: [],
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    addExercise: (state, action) => {
      state.exercises.push(action.payload);
    },
  },
});

export const { addExercise } = exercisesSlice.actions;
export default exercisesSlice.reducer;
