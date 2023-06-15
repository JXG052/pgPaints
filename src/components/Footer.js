import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, Divider, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import FooterLink from './footerLink'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import ChatIcon from '@mui/icons-material/Chat';
import SocialLinks from './socialLinks'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from '@mui/material';

export default function Footer() {
  return (
    <>
      <Divider />
      <SocialLinks />
      <Divider />
      <Box sx={{ backgroundColor: '#D8D8D8', p: 2, width: '100%', height: '30%', display: 'flex', alignItems: 'center' }}>
        <AccountCircleIcon />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ ml: 1, }}> My Account</Typography>
          <Typography variant="caption" sx={{ ml: 1, }}> Sign in to your account</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ backgroundColor: '#D8D8D8', p: 2, width: '100%', height: '30%', display: 'flex', alignItems: 'center' }}>
        <LanguageIcon />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ ml: 1, }}> Change Country</Typography>
          <Typography variant="caption" sx={{ ml: 1, }}> Choose your shopping location</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ backgroundColor: '#D8D8D8', width: '100%', p: 2, height: '30%', display: 'flex', alignItems: 'center' }}>
        <ChatIcon />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ ml: 1, }}> Start a chat</Typography>
          <Typography variant="caption" sx={{ ml: 1, }}> For general enquiries</Typography>
        </Box>
      </Box>
      <Divider />
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: '#D8D8D8', width: '100%' }}
        >
          <Typography>Help</Typography>
        </AccordionSummary>
        <AccordionDetails
          disableGutters
          sx={{
            backgroundColor: '#D8D8D8',
            width: '100%',
            p: 0,  // Remove the default padding
            m: 0,  // Remove the default bottom margin
          }}
        >
          <Typography sx={{
            backgroundColor: '#D8D8D8',
            width: '100%',
            p: 1,  // Remove the default padding
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: '#D8D8D8' }}
        >
          <Typography>About Us</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            p: 0,  // Remove the default padding
            m: 0,  // Remove the default bottom margin
          }}
        >
          <Typography sx={{
            backgroundColor: '#D8D8D8',
            width: '100%',
            p: 1
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider />
      <Box sx={{
        backgroundColor: '#D8D8D8', p: 2, width: '100%', height: '30%', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <Link href="#" variant="body2">
          View desktop site
        </Link>
        <Typography variant='p'><CopyrightIcon />2023 PG Paints Ltd. All rights reserve</Typography>
      </Box>
    </>
  )
}
