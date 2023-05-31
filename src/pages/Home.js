import React from 'react'
import randArt6 from '../images/randArt6.jpeg'
import { Box, Typography, Divider } from '@mui/material'
import CategoryStack from '../components/categoryStack'


export default function Home() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <img
                    src={randArt6}
                    alt='eye'
                    style={{ width: '100%', objectFit: 'cover' }}
                />
            </Box>
            <Typography align='center' gutterBottom={true}>Explore our Catalog</Typography>
            <CategoryStack />
            <Divider />
        </>
    )
}
