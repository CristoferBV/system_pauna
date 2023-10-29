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
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavbarAdminBiblioteca isOpen={sideOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow p-4">{children}</div>
      <div className="mt-10">
        <FooterBibliotecaAdmin/>
      </div>
    </div>


  );
}
