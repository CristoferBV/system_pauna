'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
export default function NavBar() {
    return (
        <Navbar expand="lg" className='' style={{ backgroundColor: '#041a34', color: 'white', fontSize: '20px', padding: '3rem' }}>
            <Container>
                <Container>
                    <Navbar.Brand style={{ color: 'white', fontSize: '30px' }}>
                        PAUNA
                    </Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Container >
                            <Nav.Link href="#home" style={{ color: 'white' }}>Inicio</Nav.Link>
                        </Container>
                        <Container>
                            <Nav.Link href="/Administracion/Components/User/userWindow" style={{ color: 'white' }}>Usuarios</Nav.Link>
                        </Container>
                        <Container>
                            <Nav.Link href="/Administracion/Components/Inventary/Inventory" style={{ color: 'white' }}>Inventario</Nav.Link>
                        </Container>
                        <Container>
                            <Nav.Link href="/Administracion/Components/Reports/Report" style={{ color: 'white' }}>Reportes y Movimientos</Nav.Link>
                        </Container>
                        <Container>
                            <Nav.Link href="#reportes" style={{ color: 'white' }}>Cerrar Sesión</Nav.Link>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}