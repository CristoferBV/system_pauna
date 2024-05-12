import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useRouter } from 'next/router';

function NavbarAdminBiblioteca() {
  const customNavbarStyle = {
    backgroundColor: '#293659',
  };

  const customTextStyle = {
    color: '#FFFFFF', 
  };

  const customTogglerStyle = {
    borderColor: '#FFFFFF', 
  };

  const customDropdownStyle = {
    borderColor: '#FFFFFF', 
  };

  const customDropdownTitleStyle = {
    color: '#FFFFFF', 
  };

  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="lg" style={customNavbarStyle}>
      <Container>
        <Navbar.Brand href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Inicio" style={customTextStyle}>Pauna</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={customTogglerStyle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas" style={customTextStyle}>
              Citas
            </Nav.Link>
            <Nav.Link href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/PrestamosBibliotecaAdmin" style={customTextStyle}>
              Prestamos
            </Nav.Link>
            <NavDropdown title={<span style={customDropdownTitleStyle}>Activos</span>} id="collapsible-nav-dropdown" style={customDropdownTitleStyle}>
              <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar" style={customDropdownStyle}>
                Dispositivos
              </NavDropdown.Item>
              <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarPerifericos" style={customDropdownStyle}>Perifericos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span style={customDropdownTitleStyle}>Usuarios</span>} id="collapsible-nav-dropdown" style={customDropdownTitleStyle}>
            <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Administradores" style={customDropdownStyle}>
                Administradores
              </NavDropdown.Item>
            <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarEstudiantes" style={customDropdownStyle}>
                Estudiantes
              </NavDropdown.Item>
              <NavDropdown.Item href="/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarPrestamoAceptado" style={customDropdownStyle}>
              Estudiantes con Prestamo
            </NavDropdown.Item>
            </NavDropdown>
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
