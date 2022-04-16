import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
// import Avatar from '@material-ui/core/Avatar'
// import catImg from '../images/cat.jpg'

// const imageStyle = {
//   width: '80px',
//   height: '80px',
//   margin: 'auto'
//   //   borderRadius: '50%'
// }

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
            A second-year student at the{' '}
            <a href="http://www.i.kyoto-u.ac.jp/">
              Graduate School of Informatics, Kyoto University
            </a>
            .
          </Box>
          <Box mt={2}>
            <a href="https://scholar.google.com/citations?user=onM70GMAAAAJ&hl=en&oi=ao">Google Scholar</a>, <a href="https://www.linkedin.com/in/jumon-nozaki-89363a188/">LinkedIn</a>
          </Box>
          <Box mt={2}>Email: jumon.nozaki[at]gmail.com</Box>
        </Typography>
        {/* <Avatar style={imageStyle} alt="a cat outside" src={catImg} /> */}
      </Box>
    </Box>
  )
}

export default About
