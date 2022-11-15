import '../styles/globals.scss'
import { wrapper } from '../configureStore'  ;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
