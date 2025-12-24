import RecipeContentList from '@/components/RecipeContentList/RecipeContentList';

interface DividedRecipeContentProps {
  type: 'ul' | 'ol';
  recipeInfo: string[];
}

const DividedRecipeContent: React.FC<DividedRecipeContentProps> = ({ type, recipeInfo }) => {
  let content: React.ReactNode;

  if (type === 'ul' && recipeInfo.length > 6) {
    const chunkSize = Math.ceil(recipeInfo.length / 2);

    const firstChunk = recipeInfo.slice(0, chunkSize);
    const secondChunk = recipeInfo.slice(chunkSize);

    content = (
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '2.5rem' }}>
        <RecipeContentList type="ul" recipeChunkInfo={firstChunk} />
        <RecipeContentList type="ul" recipeChunkInfo={secondChunk} />
      </div>
    );
  } else {
    content = <RecipeContentList type={type} recipeChunkInfo={recipeInfo} />;
  }

  return content;
};

export default DividedRecipeContent;
