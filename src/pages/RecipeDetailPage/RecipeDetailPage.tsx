import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Box from '@mui/material/Box';

import H1Text from '@/components/H1Text/H1Text';
import H2Text from '@/components/H2Text/H2Text';
import H3Text from '@/components/H3Text/H3Text';
import GeneralSpanText from '@/components/GeneralSpanText/GeneralSpanText';
import ImageBlock from '@/components/ImageBlock/ImageBlock';
import BackwardArrow from '@/components/BackwardArrow/BackwardArrow';
import DifficultyLevel from '@/components/DifficultyLevel/DifficultyLevel';

import DividedRecipeContent from '@/features/dividedRecipeContentList/DividedRecipeContent';
import { InfoBlockContainer, ItemContainer } from '@/pages/RecipeDetailPage/RecipeDetailPage.styled';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import { useGetSingleRecipeQuery } from '@/app/api/recipesApi';

const RecipeDetailPage = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const { data: recipe, isFetching, isSuccess, isError, error } = useGetSingleRecipeQuery(id!);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleBackNavigation = () => {
    navigate(-1);
  };

  let content: React.ReactNode;

  if (isFetching) {
    content = <p>Wait a second...</p>; // TODO: implement as component
  } else if (isSuccess) {
    content = (
      <article>
        <H1Text>{recipe.name}</H1Text>

        <InfoBlockContainer>
          <ImageBlock recipe={recipe} width="60%" height="auto" />
          <Box sx={{ marginLeft: '2rem' }}>
            <H2Text styles={{ marginBottom: '1.5rem' }}>General information:</H2Text>
            <ItemContainer>
              <H3Text>Cuisine:</H3Text>
              <GeneralSpanText>{recipe.cuisine}</GeneralSpanText>
            </ItemContainer>
            <ItemContainer>
              <H3Text>Meal type:</H3Text>
              <GeneralSpanText>{recipe.mealType.join(', ')}</GeneralSpanText>
            </ItemContainer>
            <ItemContainer>
              <H3Text>Difficulty:</H3Text>
              <DifficultyLevel difficulty={recipe.difficulty} />
              <GeneralSpanText>{recipe.difficulty}</GeneralSpanText>
            </ItemContainer>
            <ItemContainer>
              <H3Text>Rating:</H3Text>
              <GeneralSpanText>{recipe.rating}</GeneralSpanText>
            </ItemContainer>
            <ItemContainer>
              <H3Text>Servings:</H3Text>
              <GeneralSpanText>{recipe.servings}</GeneralSpanText>
            </ItemContainer>
            <ItemContainer>
              <H3Text>Calories per serving:</H3Text>
              <GeneralSpanText>{recipe.caloriesPerServing} kcal</GeneralSpanText>
            </ItemContainer>
            <ItemContainer>
              <H3Text>Preparing time:</H3Text>
              <GeneralSpanText>{recipe.prepTimeMinutes} min</GeneralSpanText>
            </ItemContainer>
            <ItemContainer>
              <H3Text>Cooking time:</H3Text>
              <GeneralSpanText>{recipe.cookTimeMinutes} min</GeneralSpanText>
            </ItemContainer>
          </Box>
        </InfoBlockContainer>

        <InfoBlockContainer>
          <H2Text>Ingredients:</H2Text>
          <DividedRecipeContent type="ul" recipeInfo={recipe.ingredients} />
        </InfoBlockContainer>
        <InfoBlockContainer>
          <H2Text>Instructions:</H2Text>
          <DividedRecipeContent type="ol" recipeInfo={recipe.instructions} />
        </InfoBlockContainer>

        <ItemContainer sx={{ justifyContent: 'flex-end', marginTop: '2rem' }}>
          <H3Text>Tags:</H3Text>
          <GeneralSpanText>{recipe.tags.join(', ')}</GeneralSpanText>
        </ItemContainer>
      </article>
    );
  } else if (isError && error) {
    content = <NotFoundPage />;
  }

  return (
    <>
      <BackwardArrow handleBackNavigation={handleBackNavigation} />
      <section>{content}</section>
    </>
  );
};

export default RecipeDetailPage;
