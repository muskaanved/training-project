import React from 'react'
import Box from '@mui/material/Box';

const Banner = () => {
  return (
    <div>
<Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
    <img src="images/3684.jpg" height={'600px'} width={'100%'} ></img>
    </Box>
    </div>
  )
}

export default Banner