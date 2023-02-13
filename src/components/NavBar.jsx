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
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import avatar from "../assets/profil.webp"
import Modal from '@mui/material/Modal';
import Cart from './Cart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Favorite from "../components/Favorite"
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { logOut} from '../firebaseConfig';



function NavBar() {
 
 
  const navigate = useNavigate()
  const { cartCount } = useSelector((state) => state.cart);
  const { currentUser} = useSelector((state) => state.users);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openCart, setOpenCart] = React.useState(false);
  const [openFav, setOpenFav] = React.useState(false);
  
  const handleOpenCart = () => setOpenCart(true);
  const handleOpenFav = () => setOpenFav(true);
  const handleCloseCart = () => setOpenCart(false);
  const handleCloseFav = () => setOpenFav(false);

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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  console.log(currentUser)
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{backgroundColor:'white'}}>
        <Toolbar disableGutters>
          
          <Typography
            onClick={()=>navigate("/")}
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
              color: 'black',
              textDecoration: 'none',
            }}
          >
            COMFORT ZONE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
              
                <MenuItem >
                  <Typography textAlign="center" onClick={()=>navigate("/")}>
                   
                  Home
                  </Typography>
              </MenuItem>
              <MenuItem >
                  <Typography textAlign="center" onClick={()=>navigate("/about")}>
                   
                 About
                  </Typography>
              </MenuItem>
              <MenuItem >
                  <Typography textAlign="center" onClick={()=>navigate("/product")}>
                   
                  Product
                  </Typography>
                </MenuItem>
          
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
            
              color: 'black',
              textDecoration: 'none',
            }}
          >
           Comfort Zone
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:'center' }}>
          
              <Button
             
                onClick={() => navigate("/")}
                sx={{ my: 2, color: 'black', display: 'block' ,px:'1.5rem' }}
              >
                Home
            </Button>
            <Button
             
             onClick={() => navigate("/about")}
             sx={{ my: 2, color: 'black', display: 'block' ,px:'1.5rem' }}
           >
            About
            </Button>
            <Button
             
             onClick={() => navigate("/product")}
             sx={{ my: 2, color: 'black', display: 'block' ,px:'1.5rem' }}
           >
           Products
           </Button>
            
          </Box>

         <Box sx={{ flexGrow: 0  }}>
                 
                      <Button onClick={handleOpenCart}>Cart
                            <Badge badgeContent={cartCount} color="warning">
                                <AddShoppingCartIcon/>
                            </Badge> 
                      </Button>
                      <Modal open={openCart} onClose={handleCloseCart} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                          <Box sx={style}>
                                <Cart/>
                          </Box>
                      </Modal>
                     
                     
                       <Button onClick={handleOpenFav}><FavoriteIcon /></Button>
                      <Modal open={openFav} onClose={handleCloseFav} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                          <Box sx={style}>
                                 <Favorite/>
                          </Box>
                      </Modal> 
                  
             {currentUser ? (
              <>
              <Typography className="mr-2 capitalize">{currentUser?.displayName}</Typography>
              <Button className="btn btn-outline-light" type="submit" onClick={() => logOut()}>logOut</Button>
              <img src={currentUser?.photoURL || avatar} style={{ height: 25, width: 25 }}/>
            </> ) :
            (<> 
              <IconButton onClick={() => navigate("/login")} sx={{ p: 1 }}>
                             
                              Login
                              {/* <AccountCircleIcon/> */}
              </IconButton>
             </>) 
          } 
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
