import List from '@mui/material/List';
import RecipeContentListItem from '@/components/RecipeContentListItem/RecipeContentListItem';

interface RecipeContentListProps {
  type: 'ul' | 'ol';
  recipeChunkInfo: string[];
}

const RecipeContentList: React.FC<RecipeContentListProps> = ({ type, recipeChunkInfo }) => {
  let listStyleValue: string = type === 'ul' ? 'disc' : 'auto';

  return (
    <List
      component={type}
      sx={{ margin: 0, paddingLeft: '2rem', paddingTop: '0.4rem', listStyle: `${listStyleValue}` }}
    >
      {recipeChunkInfo.map((item: string) => (
        <RecipeContentListItem key={item} item={item} />
      ))}
    </List>
  );
};

export default RecipeContentList;
