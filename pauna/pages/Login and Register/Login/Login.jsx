import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/LOGO-UNA.png';

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row" style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
      <div className="w-full md:w-1/3 flex justify-center items-center p-6 md:mb-0 bg-[#4333F9]">
        <div className="w-24 md:w-72 h-24 md:h-72 rounded-full bg-[#0E21CD] flex justify-center items-center">
          <Image src={Logo} alt="Logo" width={120} height={120} className="w-16 md:w-56 h-16 md:h-56" />
        </div>
      </div>
      <div className="flex-grow bg-white flex flex-col justify-center items-center p-6 ">
         <div className="flex flex-col items-center space-y-4">
           <h1 className='font-bold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 text-center'>Inicio de sesión</h1>
           <input
              type="text"
              placeholder="Nombre de usuario"
              className="w-full md:w-72 p-2 border border-gray-300 rounded-xl bg-gray-100"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full md:w-72 p-2 border border-gray-300 rounded-xl bg-gray-100"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full md:w-72 p-2 border border-gray-300 rounded-xl bg-gray-100"
            />
            <select className="w-full md:w-72 p-2 border border-gray-300 rounded-xl bg-gray-100">
              <option value="" disabled> Elige un rol </option>
              <option value="biblioteca">Biblioteca</option>
              <option value="administracion">Administración</option>
            </select>
            <button className="bg-[#0E21CD] text-white px-6 md:px-12 py-2 rounded-xl hover:bg-blue-600 mt-8 md:mt-12 w-full md:w-auto" style={{marginTop: 30}}>
              Entrar
            </button>
            <p className="mt-4 text-center" style={{marginTop: 30}}>
              ¿No tienes una cuenta? <a href="#">Regístrate</a>
            </p>
          </div>
          <footer className="mt-12 md:mt-16 ml-2 text-gray-500 text-sm text-left flex-shrink-0">
            Reservado desarrolladores PAUNA 2023
          </footer>
        </div>
      </div>
  );
};

export default Login;
