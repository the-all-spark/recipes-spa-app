import { useNavigate } from 'react-router-dom';

import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';

import type { RecipeOverview } from '@/types/RecipesResponse';

import H2Text from '@/components/H2Text/H2Text';
import GeneralPText from '@/components/GeneralPText/GeneralPText';

import {
  CardContainer,
  CardActionAreaContainer,
  CardContentContainer,
  InfoContainer,
  ValueInfoContainer,
} from '@/components/RecipeCard/RecipeCard.styled';
import ImageBlock from '../ImageBlock/ImageBlock';

interface RecipeCardProps {
  recipe: RecipeOverview;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const theme = useTheme();
  let navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <CardContainer>
      <CardActionAreaContainer onClick={handleNavigation}>
        <CardMedia component="div">
          <ImageBlock recipe={recipe} width="290px" height="140px" />
        </CardMedia>
        <CardContentContainer>
          <H2Text>{recipe.name}</H2Text>
          <InfoContainer>
            <ValueInfoContainer>
              <GeneralPText>Difficulty: {recipe.difficulty}</GeneralPText>
              <GeneralPText>Rating: {recipe.rating}</GeneralPText>
            </ValueInfoContainer>
            <GeneralPText styles={{ color: theme.palette.secondary.main, fontSize: '0.9rem' }}>
              Tags: {recipe.tags.join(', ')}
            </GeneralPText>
          </InfoContainer>
        </CardContentContainer>
      </CardActionAreaContainer>
    </CardContainer>
  );
};

export default RecipeCard;
