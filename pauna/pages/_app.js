import '@/styles/globals.css'
import Layout from './Administracion/Layout'
import { useRouter } from 'next/router'
function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith('/Administracion')) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
  return(
    <Component {...pageProps} />
  )
}
export default App;
