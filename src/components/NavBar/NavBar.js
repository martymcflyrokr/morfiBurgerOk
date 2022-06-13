import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CustomizedBadges from './CartWidget'
import { Link } from 'react-router-dom';





const pages = ['HAMBURGESAS', 'BEBIDAS', 'POSTRES', 'SUCURSALES'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: '#000000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <div className="contenedorLogo" style= {{ width: '70px', padding: '10px 20px 3px'}} >
            
            <img src="./morfilogooficial.png" style={{padding: '2px', width: '100%'}}></img>
    
          </div>
          
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Red Hat Display',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">MORFIBURGER</Link>

          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
              
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <ul style={{textDecoration: 'none', listStyle:'none', color: 'white', padding:'3px'}}>
                  <li >
                    <Button 
                      variant="text" 
                      color="primary"
                        style={{
                          textDecoration: 'none', 
                          listStyle:'none', 
                          color: 'white'}}>
                        <Link to="/productos"
                         style={{
                          textDecoration: 'none', 
                          listStyle:'none', 
                      }}>PRODUCTOS</Link>
                    </Button>
                    </li>
                  <li>
                  <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/categoria/combo">COMBO</Link>
                </Button>
                  </li>
                  <li>
                  <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/categoria/especial">ESPECIAL</Link>
                </Button>
                </li>
                <li>
                  <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/categoria/postre">POSTRE</Link>
                </Button>
                </li>
                <li>
                  <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/categoria/bebida">BEBIDA</Link>
                </Button>
                </li>
                <li>
                  <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/contacto">CONTACTO</Link>
                </Button>
                </li>
                </ul>
             
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Red Hat Display',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">MORFIBURGER</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <div style={{textDecoration: 'none', listStyle:'none', color: 'white'}}>
                <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'}}>
                      <Link to="/productos" style={{
                          textDecoration: 'none', 
                          listStyle:'none', 
                          color: 'white'}}>PRODUCTOS</Link>
                  </Button>
                <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/categoria/combo" style={{
                          textDecoration: 'none', 
                          listStyle:'none', 
                          color: 'white'}}>COMBO</Link>
                </Button>
                <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/categoria/especial" style={{
                          textDecoration: 'none', 
                          listStyle:'none', 
                          color: 'white'}}>ESPECIAL</Link>
                </Button>
                <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/categoria/postre" style={{
                          textDecoration: 'none', 
                          listStyle:'none', 
                          color: 'white'}}>POSTRE</Link>
                </Button>
                <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/categoria/bebida" style={{
                          textDecoration: 'none', 
                          listStyle:'none', 
                          color: 'white'}}>BEBIDA</Link>
                </Button>
                
                <Button 
                  variant="text" 
                  color="primary" 
                    style={{
                      textDecoration: 'none', 
                      listStyle:'none', 
                      color: 'white'
                      }}>
                    <Link to="/contacto" style={{
                          textDecoration: 'none', 
                          listStyle:'none', 
                          color: 'white'}}>CONTACTO</Link>
                </Button>
                </div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <CustomizedBadges/>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
