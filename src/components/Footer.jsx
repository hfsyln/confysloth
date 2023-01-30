import Box from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import React from 'react'

const Footer = () => {
  return (
      <Box sx={{ p: 3, backgroundColor: "black" }}>
          <Typography sx={{ color: 'white',  textAlign: 'center' }}>
              <p >2023 <span style={{color:"orange"}}>Comfort Zone</span> All rights reserved</p>
              </Typography>
    </Box>
  )
}

export default Footer;