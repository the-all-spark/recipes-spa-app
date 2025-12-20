import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RecipesResponse } from '@/types/RecipesResponse';

// all endpoints to REST API (recipes, user auth, etc.)
export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getRecipes: builder.query<RecipesResponse, void>({
      // ! change limit to 50 (get all recipes)
      query: () => '/recipes?limit=10',
    }),
  }),
});

export const { useGetRecipesQuery } = recipesApi;
