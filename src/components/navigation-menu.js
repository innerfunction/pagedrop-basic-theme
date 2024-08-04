import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

import logo from '../images/pagedrop-logo.svg'

const NavigationMenu = ({ menuItems }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <img
          alt="Pagedrop"
          height={60}
          style={{ margin: 0 }}
          src={logo}
        />
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {menuItems.map(({ title, href }) => (
              <ListItem key={href} disablePadding>
                <ListItemButton>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  )
}

export default NavigationMenu
