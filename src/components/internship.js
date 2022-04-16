import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import WorkIcon from '@material-ui/icons/Work'
import ListItemText from '@material-ui/core/ListItemText'

const Internship = () => {
  return (
    <Box p={1} m={1}>
      <Box m={1}>
        <Typography variant="h5" color="primary">
          Internships
        </Typography>
      </Box>
      <Box m={1}>
        <List>
        <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Amazon Japan"
              secondary="February 2022 - March 2022. Software Development Engineer Intern."
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="LINE Corporation"
              secondary="December 2019 - January 2022. Research & Engineering Internship."
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Mercari, Inc."
              secondary="August 2021 - September 2021. Software Engineer Internship at EdgeAI Team."
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Hacarus Inc."
              secondary="October 2018 - December 2019. Anomaly Detection for images and time series data."
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Internship
