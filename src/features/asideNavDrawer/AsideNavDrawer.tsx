import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import NavList from '@/components/NavList/NavList';
import Logo from '@/components/Logo/Logo';

import { useTheme } from '@mui/material/styles';

interface AsideNavDrawerProps {
  drawerOpen: boolean;
  handleDrawerToggle: () => void;
}

const AsideNavDrawer = ({ drawerOpen, handleDrawerToggle }: AsideNavDrawerProps) => {
  const theme = useTheme();

  const drawerWidth = 180;
  const container = window !== undefined ? () => document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Logo styles={{ my: 2, '& path': { fill: `${theme.palette.primary.main}` } }} />
      <Divider />
      <NavList />
    </Box>
  );

  return (
    <aside>
      <Drawer
        container={container}
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </aside>
  );
};

export default AsideNavDrawer;
