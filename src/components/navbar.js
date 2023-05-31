import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Stack from '@mui/material/Stack';


export default function Navbar() {
    return (
        // <div>
        //       <NavLink exact to="/" activeClassName="active">Home</NavLink>
        //       <NavLink to="/about" activeClassName="active">About</NavLink>
        //       <NavLink to="/catalog" activeClassName="active">Catalog</NavLink>
        //       <NavLink to="/artPage" activeClassName="active">ArtPage</NavLink>
        //       <NavLink to="/categories" activeClassName="active">Categories</NavLink>
        // </div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/*Menu Icon was here */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PG Paint
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <SearchIcon />
                        <PersonIcon />
                        <FavoriteBorderIcon />
                        <ShoppingBasketIcon />
                    </Stack>

                </Toolbar>
            </AppBar>
        </Box>
    )
}
