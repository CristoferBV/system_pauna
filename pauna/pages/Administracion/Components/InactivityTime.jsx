import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const InactivityTimer = ({ logoutFunction }) => {
  const inactivityTime = 30000; // Tiempo de inactividad en milisegundos (30 segundos)
  let inactivityTimer;

  const resetTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      Swal.fire({
        title: 'Tiempo de inactividad excedido',
        text: 'Serás redirigido a la página de inicio.',
        icon: 'warning',
        confirmButtonText: 'OK',
        allowOutsideClick: false // Evita que se cierre la alerta haciendo clic fuera
      }).then((result) => {
        if (result.isConfirmed) {
          logoutFunction();
        }
      });
    }, inactivityTime);
  };

  useEffect(() => {
    const handleActivity = () => {
      resetTimer();
    };

    // Agrega event listeners para detectar actividad del usuario
    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keypress", handleActivity);

    // Iniciar el temporizador al cargar el componente
    resetTimer();

    // Limpia los event listeners al desmontar el componente
    return () => {
      clearTimeout(inactivityTimer);
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keypress", handleActivity);
    };
  }, []);

  return null; // Este componente no renderiza nada visible en la interfaz
};

export default InactivityTimer;