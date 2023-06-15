import React from 'react'
import randArt6 from '../images/randArt6.jpeg'
import { Box, Divider, Typography } from '@mui/material'
import CategoryStack from '../components/categoryStack'
import CategoryImageLink from '../components/categoryImageLink'


export default function Home() {    
    return (
        <>
            <Box sx={{ flexGrow: 1, width: '100%', display: 'block' }}>
                <img
                    src={randArt6}
                    alt='eye'
                    style={{ width: '100%', objectFit: 'cover', maxWidth: '100%' }}
                />
            </Box>
            <Typography align='center' gutterBottom={true}>Explore our Catalog</Typography>
            <CategoryStack />
            <CategoryImageLink />
            <Divider>
            </Divider>
        </>
    )
}
