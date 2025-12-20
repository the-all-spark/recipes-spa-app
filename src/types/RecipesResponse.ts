// TODO тип ответа - дополнить!
interface Recipe {
  id: number;
  name: string;
  difficulty: string;
}

export interface RecipesResponse {
  recipes: Recipe[];
}
