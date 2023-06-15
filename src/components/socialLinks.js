import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Stack } from '@mui/material';


export default function SocialLinks() {
  return (
    <Stack
          sx={{
              width: '100%',
              height: '5vh',
              display: 'flex',
              p: 2,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center'
          }}
    >
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />


    </Stack>
  )
}
