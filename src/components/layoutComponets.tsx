import * as React from 'react';
import { AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';

export default function TitleBar() {
  return (
    //   backgroundImage: "/icons/kubernetes-hero-texture.png",
    // backgroundColor: "#303030",
    // text-align: center;
    // padding-left: 0;
    // padding-right: 0;
    // margin-bottom: 0;
    // position: relative;
    <AppBar position="static">
      <Box  sx={{
        paddingX: "50px",
        backgroundImage: "/icons/kubernetes-hero-texture.png",
        backgroundColor: "#303030"

        }}>
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BUC LAB Homepage
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button href='/status' sx={{ my: 2, color: 'white', display: 'block' }} >Status</Button>
            <Button href='/apps' sx={{ my: 2, color: 'white', display: 'block' }} >Application</Button>
            <Button href='/notes' sx={{ my: 2, color: 'white', display: 'block' }} >Notes</Button>
            <Button href='/external' sx={{ my: 2, color: 'white', display: 'block' }} >External</Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>

  );
}