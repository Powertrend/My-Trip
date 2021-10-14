import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trips</title>
        <link rel="shortcut icon" href="/img/powertrend-favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/img/powertrend-favicon-32x32.png" />
        <meta
          name="description"
          content="Um projeto para mostrar meus pontos favoritos no mundo"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
export default App
