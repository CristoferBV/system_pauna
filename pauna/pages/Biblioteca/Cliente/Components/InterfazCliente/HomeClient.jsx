import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Logo from '../../../../../public/LOGO-UNA.png';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Container, Row, Col } from "react-bootstrap";

const HomeClient = () => {

    const [active, setActive] = useState("");

    const navigation = [
        { name: "Inicio", section: "HomeClient", current: false },
        { name: "Solicitud", section: "LoanClient", current: false },
        { name: "Devolución", section: "DevolutionClient", current: false },
    ];

  return (
    <div className=" main-bg flex flex-col min-h-screen">
      <Navbar bg="danger" expand="lg">
        <Navbar.Brand href="/Biblioteca/Cliente/Components/InterfazCliente/HomeClient">
          <Image
            className="h-11 w-12 mt-2.5 ml-2.5"
            src={Logo}
            width={500}
            height={500}
            alt="Universidad Nacional"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navigation.map((item) => (
              <Link
                key={item.section}
                variant="danger"
                size="sm"
                href={`/Biblioteca/Cliente/Components/InterfazCliente/${item.section}`}
                onClick={() => setActive(item.section)}
                style={{ textDecoration: "none" }}
                className="d-flex align-items-center justify-content-center p-2"
              >
                <Nav
                  href={`/Biblioteca/Cliente/Components/InterfazCliente/${item.section}`}
                  className={
                    active === item.section
                      ? "bg-danger text-white"
                      : "text-white"
                  }
                >
                  {item.name}
                </Nav>
              </Link>
            ))}
            <Link
              href={"/LoginAndRegister/Login/Login"}
              className="d-flex justify-content-center"
              style={{ textDecoration: "none" }}
            >
              <Button variant="danger" size="ms">
                Cerrar Sesión
              </Button>
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
