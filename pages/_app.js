import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
          <title>NBA DEMO - R.A. Desai</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap" rel="stylesheet"></link>
        </Head>
      </div>
      <div className="mx-auto">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
