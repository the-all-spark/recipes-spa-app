import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface NavListItemProps {
  item: string | undefined;
  to: string;
}

const NavListItem = ({ item, to }: NavListItemProps) => {
  return (
    <ListItem key={item} disablePadding>
      <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={to}>
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavListItem;
