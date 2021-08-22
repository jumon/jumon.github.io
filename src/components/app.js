import * as React from 'react'
import About from './about'
import Education from './education'
import Publication from './publication'
import Internship from './internship'

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


const containerStyle = {
  margin: "auto",
  maxWidth: "700px",
  fontFamily: "sans-serif",
}

const titleStyle = {
  color: "rebeccapurple",
}

const headerStyle = {
  display: "flex",
}

const imageStyle = {
  maxWidth: "100px",
  margin: "auto",
  borderRadius: "50%",
}

const App = () => {
    return (
      <div style={containerStyle}>
        <title>Jumon Nozaki</title>
        <main>
          <div style={headerStyle}>
            <h1 style={titleStyle}>
              <Link to="/"><u>Jumon Nozaki</u></Link>
            </h1>
            <StaticImage
                style={imageStyle}
                alt="a cat outside"
                src="../images/cat.jpg"
            />
          </div>
          <About />
          <Education />
          <Publication />
          <Internship />
        </main>
      </div>
    )
}

export default App;
