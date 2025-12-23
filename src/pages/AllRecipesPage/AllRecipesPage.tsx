import H1Text from '@/components/H1Text/H1Text';

import { RecipesContainer } from '@/pages/AllRecipesPage/AllRecipesPage.styled';

import RecipeCard from '@/components/RecipeCard/RecipeCard';
import type { RecipeOverview } from '@/types/RecipesResponse';
import { useGetRecipesQuery } from '@/app/api/recipesApi';

const AllRecipesPage = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetRecipesQuery();

  let content: React.ReactNode;

  if (isLoading) {
    content = <p>Loading...</p>; // TODO: implement as component
  } else if (isSuccess) {
    content = data.recipes.map((recipe: RecipeOverview) => <RecipeCard key={recipe.id} recipe={recipe} />);
  } else if (isError && error) {
    content = <p>{error.toString()}</p>; // TODO: implement as component
  }

  return (
    <div>
      <H1Text>Recipes</H1Text>
      <RecipesContainer>{content}</RecipesContainer>
    </div>
  );
};

export default AllRecipesPage;
