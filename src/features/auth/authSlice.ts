import { createSlice } from '@reduxjs/toolkit';
import type { User } from '@/types/UserAuth';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const loadInitialState = () => {
  try {
    const token = localStorage.getItem('accessToken');
    const userStr = localStorage.getItem('user');

    return {
      user: userStr ? JSON.parse(userStr) : null,
      token,
      isAuthenticated: !!token,
    };
  } catch (error) {
    console.error('Error loading auth state:', error);

    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    return {
      user: null,
      token: null,
      isAuthenticated: false,
    };
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loadInitialState() as AuthState,

  reducers: {
    // To save data after successful login
    setCredentials: (state, action) => {
      const user = action.payload;
      state.user = user;
      state.token = user.accessToken;
      state.isAuthenticated = true;

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', user.accessToken);
      localStorage.setItem('refreshToken', user.refreshToken);
    },

    // To clear data on logout
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
