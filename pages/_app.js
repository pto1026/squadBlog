import Head from 'next/head'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Squad Blog | The official squad game resource</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      </Head>

      <div className='container'>
        <Navigation />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" />
    </>
  )
}

export default MyApp
