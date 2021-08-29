import * as React from 'react'
import Header from './header'
import About from './about'
import Education from './education'
import Publication from './publication'
import Internship from './internship'
import Container from '@material-ui/core/Container'
import Footer from './footer'

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <About />
        <Education />
        <Publication />
        <Internship />
      </Container>
      <Footer />
    </>
  )
}

export default App
