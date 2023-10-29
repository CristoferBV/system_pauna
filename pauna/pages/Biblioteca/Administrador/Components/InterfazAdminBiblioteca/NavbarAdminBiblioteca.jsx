import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useRouter } from 'next/router';

function NavbarAdminBiblioteca() {
  const customNavbarStyle = {
    backgroundColor: '#021730', // Cambia el color de fondo a #021730
  };

  const customTextStyle = {
    color: '#FFFFFF', // Cambia el color del texto a blanco (#FFFFFF)
  };

  const customDropdownTitleStyle = {
    color: '#FFFFFF', // Cambia el color del texto a blanco (#FFFFFF)
  };

  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="lg" style={customNavbarStyle}>
      <Container>
        <Navbar.Brand href="/" style={customTextStyle}>Pauna</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas" style={customTextStyle}>
              Citas
            </Nav.Link>
            <NavDropdown title={<span style={customDropdownTitleStyle}>Activos</span>} id="collapsible-nav-dropdown" style={customDropdownTitleStyle}>
              <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar">
                Dispositivos
              </NavDropdown.Item>
              <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarEstudiantes">
                Estudiantes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarDevoluciones" style={customTextStyle}>
              Devoluciones
            </Nav.Link>
            <Nav.Link href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Horario" style={customTextStyle}>
              Horario
            </Nav.Link>
            <Nav.Link href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarReporte" style={customTextStyle}>
              Reporte
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAdminBiblioteca;
