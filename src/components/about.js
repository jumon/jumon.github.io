import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { StaticImage } from 'gatsby-plugin-image'

const imageStyle = {
  maxWidth: '80px',
  margin: 'auto',
  borderRadius: '50%'
}

const About = () => {
  return (
    <Box p={1} m={1} mt={3}>
      <Box m={1}>
        <Typography variant="h5" color="primary">
          About Me
        </Typography>
      </Box>
      <Box display="flex" m={2}>
        <Typography variant="body1">
          <Box>
            A first-year student at the{' '}
            <a href="http://www.i.kyoto-u.ac.jp/">
              Graduate School of Informatics, Kyoto University
            </a>
            .
          </Box>
          <Box mt={2}>Email: jumon.nozaki[at]gmail.com</Box>
        </Typography>
        <StaticImage style={imageStyle} alt="a cat outside" src="../images/cat.jpg" />
      </Box>
    </Box>
  )
}

export default About
