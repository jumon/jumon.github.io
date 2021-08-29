import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import SchoolIcon from '@material-ui/icons/School'
import ListItemText from '@material-ui/core/ListItemText'

const Education = () => {
  return (
    <Box p={1} m={1}>
      <Box m={1}>
        <Typography variant="h5" color="primary">
          Education
        </Typography>
      </Box>
      <Box m={1}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Master of Computer Science, Kyoto University, Kyoto, Japan"
              secondary="April 2021 - Present"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Bachelor of Computer Science, Kyoto University, Kyoto, Japan"
              secondary="April 2017 - March 2021"
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Education
