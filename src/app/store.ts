import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from '@/app/api/recipesApi';
import authReducer from '@/features/auth/authSlice';
import { authApi } from '@/app/api/authApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipesApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
