import { useState } from "react";
import NavbarAdminBiblioteca from "./InterfazAdminBiblioteca/NavbarAdminBiblioteca";
import FooterBibliotecaAdmin from "./InterfazAdminBiblioteca/FooterBibliotecaAdmin";
import Footer from "@/pages/Administracion/Components/Sidebar/Footer";

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
      <div className="mt-36"> {/* Utiliza la clase 'mt-2' para reducir la altura del footer */}
        <Footer />
      </div>
    </div>
  );
}
