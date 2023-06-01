import React from 'react'
import randArt1 from '../images/randArt1.jpeg'
import randArt2 from '../images/randArt2.jpeg'
import randArt3 from '../images/randArt3.jpeg'
import randArt4 from '../images/randArt4.jpeg'
import randArt5 from '../images/randArt5.jpeg'
import { ImageList, ImageListItem, ListSubheader, ImageListItemBar } from '@mui/material'


const itemData = [
    {
        src: randArt2,
        alt: "Cartoons",
        text: "Cartoons"
    },
    {
        src: randArt3,
        alt: "Abstract",
        text: "Abstract"
    },
    {
        src: randArt4,
        alt: "New",
        text: "New"
    }, 
    {
        src: randArt5,
        alt: "Favourites",
        text: "Favourites"
    }]

export default function CategoryImageLink({ prop }) {
    return (
        <ImageList sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', p: 2}}>
            {itemData.map((item) => (
                <ImageListItem key={item.src} cols={1}>
                    <img
                        src={`${item.src}`}
                        srcSet={`${item.src}`}
                        alt={item.text}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.text}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
