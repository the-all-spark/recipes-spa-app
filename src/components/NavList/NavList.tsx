import { useState } from 'react';

import List from '@mui/material/List';
import { SxProps } from '@mui/material';

import NavListItem from '@/components/NavListItem/NavListItem';
import ButtonStyled from '@/components/ButtonStyled/ButtonStyled';
import LogoutPopup from '@/components/LogoutPopup/LogoutPopup';

import { useAuth } from '@/features/auth/useAuth';

const RECIPES_PAGE = 'Recipes';
const LOGIN_PAGE = 'Login';

interface NavListProps {
  styles?: SxProps | undefined;
}

const NavList = ({ styles }: NavListProps) => {
  const { isAuthenticated, logout } = useAuth();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLogout = () => {
    setIsPopupOpen(true);
    logout();
  };

  return (
    <>
      <List sx={styles ? styles : null}>
        <NavListItem item={RECIPES_PAGE} to={'/recipes?page=1'} />
        {isAuthenticated ? (
          <ButtonStyled type="button" mode="dark" onClick={handleLogout}>
            Log out
          </ButtonStyled>
        ) : (
          <NavListItem item={LOGIN_PAGE} to={'/login'} />
        )}
      </List>

      <LogoutPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </>
  );
};

export default NavList;
