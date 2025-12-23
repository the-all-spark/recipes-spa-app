import type { Recipe, RecipeOverview } from '@/types/RecipesResponse';

interface ImageBlockProps {
  recipe: Recipe | RecipeOverview;
  width: string;
  height: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ recipe, width, height }) => {
  const imageAltText = `${recipe.name.split(' ').pop()}'s recipe photo`;

  return (
    <div
      style={{
        width: `${width}`,
        height: `${height}`,
        overflow: 'hidden',
      }}
    >
      <img
        src={recipe.image}
        alt={imageAltText}
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

export default ImageBlock;
