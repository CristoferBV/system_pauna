import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Logo from '../../../../../public/LOGO-UNA.png';
import Image from 'next/image';
import Link from 'next/link';
import { Form, Card, Table, Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

const HomeClient = () => {
    const router = useRouter();

    const [active, setActive] = useState("");

    const navigation = [
        { name: "Préstamo", section: "LoanClient", current: false },
        { name: "Devolución", section: "DevolutionClient", current: false },
        { name: "Inicio", section: "HomeClient", current: false },
    ];

  return (
    <div className=" main-bg flex flex-col min-h-screen">
      <Navbar bg="danger" expand="lg">
        <Navbar.Brand href="#home">
            <Image
            className="h-9 w-9 mt-2.5 ml-2.5"
            src={Logo}
            width={300}
            height={300}
            alt="University"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                {navigation.map((item) => (
                    <Link
                    variant="danger"
                    size="sm"
                    key={item.name}
                    href={`/Biblioteca/Cliente/Components/InterfazCliente/${item.section}`}
                    onClick={() => setActive(item.section)}
                    style={{ textDecoration: "none" }}
                    className="d-flex align-items-center justify-content-center"
                    >
                    <Nav.Link
                        key={item.name}
                        href={`/Biblioteca/Cliente/Components/InterfazCliente/${item.section}`}
                        className={
                        active === item.section ? "bg-danger text-white" : "text-white"
                        }
                    >
                        {item.name}
                    </Nav.Link>
                    </Link>
                ))}
                <Link href={'/LoginAndRegister/Login/Login'}>
                    <Button Button variant="danger" size="ms">Cerrar Sesión</Button>
                </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <main className="flex-1">
        <header className="header-container-home d-flex align-items-center justify-content-center bg-danger">
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex align-items-center justify-content-center flex-column">
                            <h1 className="text-center">Bienvenido al apartado biblioteca</h1>
                            <h2 className="text-center">Elija algunos de los servicios!!</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
        </main>

        <footer>
            <Card className="w-11/12 bg-danger text-white" style={{ margin: '20px auto', padding: '20px' }}>
            <Container>
                <Row>
                <Col xs={12} md={6}>
                    <p>Contacto: ivannia.conejo.chinchilla@una.ac.cr</p>
                    <p>Teléfono: +506 2562-6316</p>
                </Col>
                <Col xs={12} md={6}>
                    <p>Derechos de autor &copy; 2023 PAUNA</p>
                    <p>Universidad Nacional Campus Coto</p>
                </Col>
                </Row>
            </Container>
            </Card>
      </footer>
    </div>
  );
};

export default HomeClient;
