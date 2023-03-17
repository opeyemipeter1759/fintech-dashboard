import React from 'react'
import { Box, Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Header = ({title}) => {
  return (
      <Box display="flex" justifyContent="space-between">
          <Typography variant='h2' sx={{
              color:"#00000", fontSize:"1.2rem" , lineHeight:"21px",mt:"33px"
          }}>
              {title}
          </Typography>
          <Box display="flex" gap="18px"mt="21px">
              <SearchOutlinedIcon />
              <NotificationsOutlinedIcon />
                  <img src="images/profile.jpg" alt="profiles" className='profile-icon'
              />  
          </Box>
    </Box>
  )
}

export default Header