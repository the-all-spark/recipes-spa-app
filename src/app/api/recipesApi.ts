import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RecipesOverviewResponse } from '@/types/RecipesResponse';
import type { Recipe } from '@/types/RecipesResponse';

// all endpoints to REST API (recipes, user auth, etc.)
export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getRecipes: builder.query<RecipesOverviewResponse, void>({
      query: () => '/recipes?limit=0',
    }),
    getSingleRecipe: builder.query<Recipe, string>({
      query: (id) => `/recipes/${id}`,
    }),
  }),
});

export const { useGetRecipesQuery, useGetSingleRecipeQuery } = recipesApi;
