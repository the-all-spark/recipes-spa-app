import List from '@mui/material/List';
import { SxProps } from '@mui/material';

import NavListItem from '@/components/NavListItem/NavListItem';

const RECIPES_PAGE = 'Recipes';
const LOGIN_PAGE = 'Login';

interface NavListProps {
  styles?: SxProps | undefined;
}

const NavList = ({ styles }: NavListProps) => {
  return (
    <List sx={styles ? styles : null}>
      <NavListItem item={RECIPES_PAGE} to={'/recipes?page=1'} />
      <NavListItem item={LOGIN_PAGE} to={'/login'} />
    </List>
  );
};

export default NavList;
