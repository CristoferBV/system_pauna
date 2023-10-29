import { useState } from "react";
import NavbarAdminBiblioteca from "./InterfazAdminBiblioteca/NavbarAdminBiblioteca";

export default function Layout({ children }) {
  const [sideOpen, setSideOpen] = useState(true);

  const toggleSidebar = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <div className="bg-[#FFFFFF]">
      {/* Barra de navegación */}
      <NavbarAdminBiblioteca isOpen={sideOpen} toggleSidebar={toggleSidebar} />

      {/* Contenido principal */}
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
}
