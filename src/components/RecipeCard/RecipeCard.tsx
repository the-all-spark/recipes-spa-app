import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';

import H2Text from '@/components/H2Text/H2Text';
import GeneralPText from '@/components/GeneralPText/GeneralPText';
import type { RecipeOverview } from '@/types/RecipesResponse';

import {
  CardContainer,
  CardActionAreaContainer,
  CardContentContainer,
  InfoContainer,
  ValueInfoContainer,
} from '@/components/RecipeCard/RecipeCard.styled';

interface RecipeCardProps {
  recipe: RecipeOverview;
}

const PictureBlock = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <div
      style={{
        width: '290px',
        height: '140px',
        overflow: 'hidden',
      }}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const theme = useTheme();

  const imageAltText = `${recipe.name.split(' ').pop()}'s recipe photo`;

  return (
    <CardContainer>
      <CardActionAreaContainer>
        <CardMedia component="div">
          <PictureBlock image={recipe.image} alt={imageAltText} />
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
