import React from 'react'
import randArt6 from '../images/randArt6.jpeg'
import { Box } from '@mui/material'

export default function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <img 
                src={randArt6} 
                alt='eye' 
                style={{ width: '100%', objectFit: 'cover'}}
            />
        </Box>
    )
}
