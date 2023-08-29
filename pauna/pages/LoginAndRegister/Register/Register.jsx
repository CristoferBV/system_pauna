import React from 'react'
import Image from 'next/image';
import Logo from '../../../public/LOGO-UNA.png';

const Register = () => {
    return (
        <div className="flex flex-col md:flex-row" style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
          <div className="w-full md:w-1/3 flex justify-center items-center p-6 md:mb-0 bg-[#FF3333]">
            <div className="w-24 md:w-72 h-24 md:h-72 rounded-full bg-[#E31919] flex justify-center items-center">
              <Image src={Logo} alt="Logo" width={120} height={120} className="w-16 md:w-56 h-16 md:h-56" />
            </div>
          </div>
          <div className="flex-grow bg-white flex flex-col justify-center items-center p-6 ">
             <div className="flex flex-col items-center space-y-4">
               <h1 className='font-bold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 text-center'>Registrarse</h1>
               <input
                  type="text"
                  placeholder="Nombre de usuario"
                  className="w-full md:w-96 p-2 border border-gray-300 rounded-xl bg-gray-100 text-lg"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full md:w-96 p-2 border border-gray-300 rounded-xl bg-gray-100 text-lg"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full md:w-96 p-2 border border-gray-300 rounded-xl bg-gray-100 text-lg"
                />
                <button className="bg-[#E31919] text-white px-6 md:px-12 py-2 rounded-xl hover:bg-red-600 mt-8 md:mt-12 w-full md:w-48 text-lg" style={{marginTop: 30}}>
                  Registrar
                </button>
              </div>
              <footer className="mt-12 md:mt-16 ml-2 text-gray-500 text-sm text-left flex-shrink-0 ">
                Reservado desarrolladores PAUNA 2023
              </footer>
            </div>
          </div>
      );
    };

export default Register