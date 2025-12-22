// General component for all pages (with navigation)

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import HeaderToolbar from '@/features/headerToolbar/HeaderToolbar';
import AsideNavDrawer from '@/features/asideNavDrawer/AsideNavDrawer';

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="header">
        <HeaderToolbar handleDrawerToggle={handleDrawerToggle} />
      </AppBar>

      <AsideNavDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />

      <Outlet />
    </Box>
  );
};

export default Layout;
