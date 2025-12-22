// General component for all pages (with navigation)

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

import HeaderToolbar from '@/features/headerToolbar/HeaderToolbar';
import AsideNavDrawer from '@/features/asideNavDrawer/AsideNavDrawer';

import { StyledLayout } from '@/pages/Layout/Layout.styled';

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <StyledLayout>
      <CssBaseline />
      <AppBar component="header">
        <HeaderToolbar handleDrawerToggle={handleDrawerToggle} />
      </AppBar>

      <AsideNavDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />

      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
