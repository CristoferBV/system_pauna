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
      <header className="text-center py-10">
        <div className="mx-auto w-11/12 h-28 bg-gray-400 rounded-md p-4 flex items-center justify-center">
          <div className="mr-2">
            <Image src={LogoBombilla} width={40} height={40} alt="Icon" />
          </div>
          <p className="text-xl font-bold">
            Llene todos los campos correspondientes
          </p>
        </div>
      </header>

      <main className="min-h-screen flex-grow relative z-0">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Formulario de devoluciones
        </h1>
        <div className="mx-auto w-11/12 p-6 bg-[#BFBFBF] rounded-md mb-8 md:mb-0">
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
                    <Form.Label>Primer Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Escriba su primer apellido" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridApellido2">
                    <Form.Label>Segundo Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Escriba su segundo apellido" />
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCorreo">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="gmail" placeholder="Escriba su correo electrónico" />
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
            {/* TERMINAR ESTA PARTE */}
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCarrera">
                    <Form.Label>Carrera</Form.Label>
                    <Form.Control type="text" placeholder="Escriba su nombre" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridApellido1">
                    <Form.Label>Nivel de carrera</Form.Label>
                    <Form.Control type="text" placeholder="Escriba su primer apellido" />
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCorreo">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="gmail" placeholder="Escriba su correo electrónico" />
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
        </Tabs>
            </div>
      </main>

      <footer className="bg-[#FF3333] text-white py-4 text-start">
        <p className="px-4">Derechos reservados: @Desarrolladores PAUNA 2023</p>
      </footer>
    </>
  );
}

export default DevolutionClient;
