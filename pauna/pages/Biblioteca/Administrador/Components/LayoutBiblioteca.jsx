import { useState } from "react";
import NavbarAdminBiblioteca from "./InterfazAdminBiblioteca/NavbarAdminBiblioteca";
import FooterBibliotecaAdmin from "./InterfazAdminBiblioteca/FooterBibliotecaAdmin";

export default function Layout({ children }) {

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavbarAdminBiblioteca/>
      <div className="flex-grow p-4">{children}</div>
      <div className="mt-10">
        <FooterBibliotecaAdmin/>
      </div>
    </div>


  );
}
