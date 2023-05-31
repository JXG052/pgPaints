import React from 'react'
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

export default function RouterBar() {
    return (
        <Box
            sx={{
                width: '100%',
                height: 50,
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}
        >
            <NavLink to="/categories" activeClassName="active" style={{
                color: 'white',
                textDecoration: 'none',
            }}
                activeStyle={{
                    textDecoration: 'underline',
                }}>Categories</NavLink>
            <NavLink to="/catalog" activeClassName="active" style={{
                color: 'white',
                textDecoration: 'none',
            }}
                activeStyle={{
                    textDecoration: 'underline',
                }}>Catalog</NavLink>
            <NavLink to="/about" activeClassName="active" style={{
                color: 'white',
                textDecoration: 'none',
            }}
                activeStyle={{
                    textDecoration: 'underline',
                }}>About</NavLink>
        </Box>
        // <div>
        //       <NavLink exact to="/" activeClassName="active">Home</NavLink>
        //       <NavLink to="/about" activeClassName="active">About</NavLink>
        //       <NavLink to="/catalog" activeClassName="active">Catalog</NavLink>
        //       <NavLink to="/artPage" activeClassName="active">ArtPage</NavLink>
        //       <NavLink to="/categories" activeClassName="active">Categories</NavLink>
        // </div>
    )
}
