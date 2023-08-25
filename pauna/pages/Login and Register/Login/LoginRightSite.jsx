import React from 'react';

const LoginRightSide = () => {
  return (
    <div className="flex-grow bg-white flex flex-col justify-center items-center rounded-bl-2xl rounded-tl-2xl">
      <input
        type="text"
        placeholder="Usuario"
        className="w-64 p-2 border border-gray-300 rounded mb-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-64 p-2 border border-gray-300 rounded mb-4"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Iniciar sesión
      </button>
      <p className="mt-4">
        ¿No tienes una cuenta? <a href="#">Regístrate</a>
      </p>
    </div>
  );
};

export default LoginRightSide;