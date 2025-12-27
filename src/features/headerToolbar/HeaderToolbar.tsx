import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';

import NavList from '@/components/NavList/NavList';
import { StyledHeaderToolbar } from '@/features/headerToolbar/HeaderToolbar.styled';
import Logo from '@/components/Logo/Logo';
import GeneralPText from '@/components/GeneralPText/GeneralPText';

import { useAuth } from '@/features/auth/useAuth';

interface HeaderToolbarProps {
  handleDrawerToggle: () => void;
}

const HeaderToolbar = ({ handleDrawerToggle }: HeaderToolbarProps) => {
  const { user, isAuthenticated } = useAuth();

  return (
    <StyledHeaderToolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Logo styles={{ display: { xs: 'none', sm: 'block' } }} />

      {isAuthenticated ? <GeneralPText>Welcome, {user?.firstName}!</GeneralPText> : null}

      <Box component="nav" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <NavList styles={{ display: 'flex', flexDirection: 'row' }} />
      </Box>
    </StyledHeaderToolbar>
  );
};

export default HeaderToolbar;
