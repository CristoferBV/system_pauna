'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { useRouter } from 'next/router';
export default function NavBar() {

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
              <Nav.Link className='text-center' href="/Administracion/Components/User/landing" style={customTextStyle}>Inicio</Nav.Link>
              <Nav.Link className='text-center' href="/Administracion/Components/User/userWindow"style={customDropdownTitleStyle}>Usuarios</Nav.Link>
              <Nav.Link className='text-center' href="/Administracion/Components/Inventary/Inventory" style={customDropdownTitleStyle}>Inventario</Nav.Link>
              <Nav.Link className='text-center' href="/Administracion/Components/Reports/Report" style={customDropdownTitleStyle}>Reportes y Movimientos</Nav.Link>
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