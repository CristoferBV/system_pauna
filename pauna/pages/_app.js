import '@/styles/globals.css';
import Layout from './Administracion/Layout';
import { useRouter } from 'next/router';
import Login from './LoginAndRegister/Login/Login';
import HomeClient from './Biblioteca/Cliente/Components/InterfazCliente/HomeClient';
import AdminBiblioteca from './Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar';
import UserWindow from './Administracion/Components/User/userWindow';

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
    return <Login />
  }

  // Agregar condiciones para manejar diferentes rutas según la selección en el inicio de sesión
  if (router.pathname === '/Biblioteca/Cliente/Components/InterfazCliente/HomeClient' ||
      router.pathname === '/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar') {
    return <Component {...pageProps} />;
  }

  if (router.pathname === '/Administracion/Components/User/userWindow') {
    return <Component {...pageProps} />;
  }

  return <Component {...pageProps} />;
}

export default App;
