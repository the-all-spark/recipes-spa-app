import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginUserRequest, User } from '@/types/UserAuth';

// all endpoints to REST API (user auth)
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<User, LoginUserRequest>({
      query: (credentials) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/auth/login',
        method: 'POST',
        body: JSON.stringify(credentials),
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
