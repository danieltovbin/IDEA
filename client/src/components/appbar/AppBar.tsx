import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppBarProps = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const pages = [
    { name: 'home', path: '/home' },
    { name: 'כניסה', path: '/sign-up' },
  ];

  return (
    <AppBar className='appbar-style' position="static" sx={{ backgroundColor: 'white',padding: "0 calc((100% - 818px) / 2) !important",height: "58px"}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ display: 'flex' }}>
            <Menu open={Boolean(anchorElNav)}>
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => navigate(page.path)}>
                  <Typography>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
          </Typography>
          <Box sx={{ display: { md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'black', display: 'block' }}
                onClick={() => navigate(page.path)}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarProps