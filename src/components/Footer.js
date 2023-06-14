import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, Divider, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import FooterLink from './footerLink'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import ChatIcon from '@mui/icons-material/Chat';
import SocialLinks from './socialLinks'
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <div>
      <Divider />
      <SocialLinks />
      <Divider />
      <Box sx={{ backgroundColor: '#617073', p: 2, width: '100%', height: '30px', display: 'flex', alignItems: 'center' }}>
        <AccountCircleIcon />
        <Typography sx={{ ml: 1 }}> My Account</Typography>
      </Box>
      <Divider />
      <Box sx={{ backgroundColor: '#617073', p: 2, width: '100%', height: '30px', display: 'flex', alignItems: 'center' }}>
        <LanguageIcon />
        <Typography sx={{ ml: 1 }}>Change  Country</Typography>
      </Box>
      <Divider />
      <Box sx={{ backgroundColor: '#617073', p: 2, width: '100%', height: '30px', display: 'flex', alignItems: 'center' }}>
        <ChatIcon />
        <Typography sx={{ ml: 1 }}>Start a chat</Typography>
      </Box>
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: '#617073' }}
        >
          <Typography>Help</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: '#617073' }}
        >
          <Typography>About Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Box sx={{ backgroundColor: '#617073', p: 2, width: '80%', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CopyrightIcon />
        <Typography variant='p'>2023 PG Paints Ltd. All rights reserve</Typography>
      </Box>
    </div>
  )
}
