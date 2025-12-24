import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import H1Text from '@/components/H1Text/H1Text';
import { RecipesContainer } from '@/pages/AllRecipesPage/AllRecipesPage.styled';
import RecipeCard from '@/components/RecipeCard/RecipeCard';
import PaginationBlock from '@/components/PaginationBlock/PaginationBlock';

import type { RecipeOverview } from '@/types/RecipesResponse';
import { useGetRecipesQuery } from '@/app/api/recipesApi';

const AllRecipesPage = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetRecipesQuery();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page') || '1');
  const [page, setPage] = useState(pageParam);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
    searchParams.set('page', value.toString());
    navigate(`/recipes?${searchParams.toString()}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageParam]);

  let content: React.ReactNode;
  let totalPages: number = 1;

  if (isLoading) {
    content = <p>Loading...</p>; // TODO: implement as component
  } else if (isSuccess) {
    let totalAmount = data.total;
    const recipesPerPage: number = 9;
    totalPages = Math.ceil(totalAmount / recipesPerPage);

    let pagesData = [];
    pagesData[0] = undefined;

    let recipesArr = Array.from(data.recipes);
    for (let i = 1; i <= totalPages; i++) {
      pagesData.push(recipesArr.splice(0, recipesPerPage));
    }

    content = pagesData[page]?.map((recipe: RecipeOverview) => <RecipeCard key={recipe.id} recipe={recipe} />);
  } else if (isError && error) {
    content = <p>{error.toString()}</p>; // TODO: implement as component
  }

  return (
    <div>
      <H1Text>Recipes</H1Text>
      <PaginationBlock page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
      <RecipesContainer>{content}</RecipesContainer>
      <PaginationBlock page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
    </div>
  );
};

export default AllRecipesPage;
