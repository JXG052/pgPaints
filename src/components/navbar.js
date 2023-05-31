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

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'white' }}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                        <NavLink to="/" activeClassName="active" style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                            activeStyle={{
                                textDecoration: 'underline',
                            }}>PG Paint</NavLink>
                        
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <SearchIcon sx={{ color: 'black' }} />
                        <PersonIcon sx={{ color: 'black' }} />
                        <FavoriteBorderIcon sx={{ color: 'black' }} />
                        <ShoppingBasketIcon sx={{ color: 'black' }} />
                    </Stack>

                </Toolbar>
            </AppBar>
        </Box>
    )
}
