// TODO тип ответа - дополнить!
export interface RecipeOverview {
  id: number;
  name: string;
  image: string;
  tags: string[];
  difficulty: string;
  rating: number;
}

export interface RecipesOverviewResponse {
  recipes: RecipeOverview[];
}
