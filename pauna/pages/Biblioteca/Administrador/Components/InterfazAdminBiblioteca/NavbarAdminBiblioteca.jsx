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

  const customTogglerStyle = {
    borderColor: '#FFFFFF', // Cambia el color del borde del botón a blanco
  };

  const customDropdownStyle = {
    borderColor: '#FFFFFF', // Cambia el color de las líneas del menú desplegable a blanco
  };

  const customDropdownTitleStyle = {
    color: '#FFFFFF', // Cambia el color del texto del título del menú desplegable a blanco
  };

  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="lg" style={customNavbarStyle}>
      <Container>
        <Navbar.Brand href="/" style={customTextStyle}>Pauna</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={customTogglerStyle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas" style={customTextStyle}>
              Citas
            </Nav.Link>
            <NavDropdown title={<span style={customDropdownTitleStyle}>Activos</span>} id="collapsible-nav-dropdown" style={customDropdownTitleStyle}>
              <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar" style={customDropdownStyle}>
                Dispositivos
              </NavDropdown.Item>
              <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarEstudiantes" style={customDropdownStyle}>
                Estudiantes
              </NavDropdown.Item>
              <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarPerifericos" style={customDropdownStyle}>Perifericos</NavDropdown.Item>
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
          <Nav>
            <Nav.Link eventKey={2} href="/LoginAndRegister/Login/Login" style={customTextStyle}>
              Cerrar Sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAdminBiblioteca;
