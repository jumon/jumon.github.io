import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
  return (
    <AppBar position="static" style={{ alignItems: 'center' }}>
      <Toolbar>
        <Typography variant="h4">Jumon Nozaki</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
