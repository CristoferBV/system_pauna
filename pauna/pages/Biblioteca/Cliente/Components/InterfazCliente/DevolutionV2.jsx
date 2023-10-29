import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { Navbar, Nav, Form, Button, Card } from "react-bootstrap";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../../../public/LOGO-UNA.png";
import LogoBombilla from "../../../../../public/bombilla.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container"

function DevolutionClient() {
  const router = useRouter();
  const { section } = router.query;

  const [active, setActive] = useState("");

  const navigation = [
    { name: "Préstamo", section: "LoanClient", current: false },
    { name: "Devolución", section: "DevolutionClient", current: false },
    { name: "Perfil", section: "ProfileClient", current: false },
    { name: "Inicio", section: "HomeClient", current: false },
  ];

  const [key, setKey] = useState("Estudiantes");

  return (
    <>
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
                legacyBehavior
                key={item.name}
                href={`/Biblioteca/Cliente/Components/InterfazCliente/${item.section}`}
                onClick={() => setActive(item.section)}
              >
                <Nav.Link
                  key={item.name}
                  href={`/Biblioteca/Cliente/Components/InterfazCliente/${item.section}`}
                  className={
                    active === item.section
                      ? "bg-danger text-white"
                      : "text-white"
                  }
                >
                  {item.name}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
          <Form inline>
            <Link href={"/LoginAndRegister/Login/Login"}>
              <Button variant="danger">Cerrar Sesión</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <header className="header-container d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col>
              <div className="d-flex align-items-center justify-content-center">
                <Image src={LogoBombilla} alt="Logo" />
                <h1 className="ml-3">Realice la Devolución</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="mx-auto w-11/12 p-6 bg-white mb-8 md:mb-0" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' , borderRadius:"3px"}}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
        <Tab eventKey="Estudiantes" title="Estudiantes">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Escriba su nombre" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridApellido1">
                <Form.Label>Apellido #1</Form.Label>
                <Form.Control type="text" placeholder="Escriba su primer apellido" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridApellido2">
                <Form.Label>Apellido #2</Form.Label>
                <Form.Control type="text" placeholder="Escriba su segundo apellido" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridCorreo">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Escriba su correo electrónico" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridCedula">
              <Form.Label>Cédula o Identificación</Form.Label>
              <Form.Control type="text" placeholder="Escriba su cédula o identificación" />
            </Form.Group>

            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="Datos" title="Datos">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCarrera">
                <Form.Label>Carrera</Form.Label>
                <Form.Control type="text" placeholder="Escriba su nombre" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNivelCarrera">
                <Form.Label>Nivel de carrera</Form.Label>
                <Form.Control type="text" placeholder="Escriba su primer apellido" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridCorreoDatos">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Escriba su correo electrónico" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridCedulaDatos">
              <Form.Label>Cédula o Identificación</Form.Label>
              <Form.Control type="text" placeholder="Escriba su cédula o identificación" />
            </Form.Group>

            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default DevolutionClient;
