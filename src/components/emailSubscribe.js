import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import { Box, Typography, Divider, TextField, Button } from '@mui/material';

export default function EmailSubscribe() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <DraftsIcon sx={{ fontSize: '10rem' }} />
          <Typography variant='h3' sx={{p: 2}}>Be In The Know</Typography>
          
          
          <Typography variant='p'sx={{width: '60%', textAlign: 'center', p: 5}}>Keep up to date with the latest PG Paints news, including exclusive offeres and not to be missed sale and store events. </Typography>
          <Divider></Divider>
          <Typography variant='p' sx={{ width: '60%', textAlign: 'center', p:2 }}>Enter your email address below to opt in to email marketing </Typography>
          <TextField id="outlined-basic" label="Enter your email address" variant="outlined" sx={{m: 2, width: '60%'}}/>
          <Button variant="contained" sx={{m: 2, backgroundColor: 'green'}}>Subscribe</Button>
    </Box>
  )
}
