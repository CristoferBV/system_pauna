// pages/_app.js
import '@/styles/globals.css';
import Layout from './Administracion/Layout';
import { useRouter } from 'next/router';
import Login from './LoginAndRegister/Login/Login.jsx'; // Ruta correcta hacia el componente Login
import Slidebar from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar';
import SidebarCitas from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas';

function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith('/Administracion')) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }

  if (router.pathname === '/LoginAndRegister') {
    return <Login />;
  }
  return <Component {...pageProps} />;

}

export default App;
