import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'
import React from 'react' 
import { SportsEsports } from '@mui/icons-material';
import CartWidget from '../CartWidget/CartWidget';
import reactLogo from '../../assets/react.svg'
import './_NavListDrawer.scss' 

function NavListDrawer() {
  return (
    <Box className='Box1' sx={{width: '100%'}}>
      <nav>
        <List className='List1'>
          <ListItem>
            <ListItemIcon>
            <SportsEsports />
            </ListItemIcon>
            <ListItemText primary="Doni Games"/>
          </ListItem>
          <CartWidget />
          <ListItemButton className='button1' component="a" href="#">
            <ListItemText className='text1' primary="Videogames"/>
          </ListItemButton>
          <ListItemButton className='button1' component="a" href="#">
            <ListItemText className='text1' primary="Collectibles"/>
          </ListItemButton>
          <ListItemButton className='button1' component="a" href="#">
            <ListItemText className='text1' primary="Accessories"/>
          </ListItemButton>
        </List>
      </nav>
    </Box>
  )
}

export default NavListDrawer