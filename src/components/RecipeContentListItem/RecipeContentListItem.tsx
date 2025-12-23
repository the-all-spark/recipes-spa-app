import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface RecipeContentListItemProps {
  item: string;
}

const RecipeContentListItem = ({ item }: RecipeContentListItemProps) => {
  return (
    <ListItem sx={{ display: 'list-item', padding: '0px' }}>
      <ListItemText primary={item} sx={{ marginTop: '0px' }} />
    </ListItem>
  );
};

export default RecipeContentListItem;
