export interface RecipeOverview {
  id: number;
  name: string;
  image: string;
  tags: string[];
  difficulty: string;
  rating: number;
}

export interface Recipe {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  mealType: string[];
  difficulty: string;
  rating: number;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  caloriesPerServing: number;
  tags: string[];
}

export interface RecipesOverviewResponse {
  recipes: RecipeOverview[];
}
