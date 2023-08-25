import React from 'react';

const LoginRightSide = () => {
  return (
    <div className="flex-grow bg-white flex flex-col justify-center items-center rounded-bl-2xl rounded-tl-2xl">
      <div className="flex flex-col items-center mt-10">
        <h1 className='font-bold mb-10 text-3xl'>Inicio de sesión</h1>
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="w-64 p-2 border border-gray-300 rounded-xl mb-4"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-64 p-2 border border-gray-300 rounded-xl mb-4"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-64 p-2 border border-gray-300 rounded-xl mb-4"
        />
        <select className="w-64 p-2 border border-gray-300 rounded-xl mb-4">
          <option value="biblioteca">Biblioteca</option>
          <option value="administracion">Administración</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10">
          Iniciar sesión
        </button>
        <p className="mt-3">
          ¿No tienes una cuenta? <a href="#">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default LoginRightSide;
