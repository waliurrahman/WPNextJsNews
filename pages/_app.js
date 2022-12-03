import Layout from '../components/Layout'
import '../styles/bootstrap.min.css'
import '../styles/bangla-font.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
