import * as React from 'react'
import { Helmet } from 'react-helmet'

import App from '../components/app'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>Jumon Nozaki</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <App />
    </>
  )
}

export default IndexPage
