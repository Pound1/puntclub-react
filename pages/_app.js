import { Provider } from 'next-auth/client'
import Layout from '../components/layout'

//Fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

//CSS
import { GlobalStyles } from '../styles/globals'
import '../styles/typography.scss'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//Slick Styles
import '../styles/_slick.scss'
import '../styles/_slickTheme.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp
