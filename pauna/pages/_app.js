import '@/styles/globals.css';
import Layout from './Administracion/Layout';
import LayoutBiblioteca from './Biblioteca/Administrador/Components/LayoutBiblioteca';

import Login from './LoginAndRegister/Login/Login';
import HomeClient from './Biblioteca/Cliente/Components/InterfazCliente/HomeClient';
import AdminBiblioteca from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar';
import UserWindow from './Administracion/Components/User/userWindow';
import Slidebar from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith('/Administracion')) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }

  if (router.pathname.startsWith('/Biblioteca/Administrador/Components/')) {
    return (
      <LayoutBiblioteca>
        <Component {...pageProps} />
      </LayoutBiblioteca>
    );
  }

  if (router.pathname === '/LoginAndRegister') {
    return <Login />
  }

  if (router.pathname === '/Biblioteca/Cliente/Components/InterfazCliente/HomeClient') {
    return <HomeClient />;
  }

  if (router.pathname === '/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar') {
    return <Slidebar />;
  }


  if (router.pathname === '/Administracion/Components/User/userWindow') {
    return <Component {...pageProps} />;
  }
  return <Component {...pageProps} />;


}

export default App;
