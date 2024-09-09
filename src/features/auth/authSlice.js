import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Holds the current user info
  isAuthenticated: false, // Tracks if the user is logged in
  error: null, // Tracks login/register errors
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;

      // Simulate authentication process (in real world, this would be an API call)
      if (username === 'user' && password === 'password') {
        state.user = { username };
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = 'Invalid credentials';
      }
    },
    register: (state, action) => {
      const { username, password } = action.payload;

      // Simulate user registration (in real world, this would be an API call)
      if (username && password) {
        state.user = { username };
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = 'Registration failed';
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
