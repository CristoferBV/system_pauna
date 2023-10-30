import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button, Card, Table } from "react-bootstrap";
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

  const [active, setActive] = useState("");

  const navigation = [
    { name: "Préstamo", section: "LoanClient", current: false },
    { name: "Devolución", section: "DevolutionClient", current: false },
    { name: "Inicio", section: "HomeClient", current: false },
  ];

  const [key, setKey] = useState("Estudiantes");

  return (
    <div className="flex flex-col min-h-screen">
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

      <div className="custom-container mx-auto w-11/12 p-6 mb-8 md:mb-0" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' , borderRadius:"3px"}}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 custom-tabs"
        >
          <Tab eventKey="Estudiantes" title={<span className="custom-tab-title">Estudiantes</span>}>
            <Form>
              <Form.Group className="mb-3" controlId="formGridCedula">
                <Form.Label className="font-semibold">Cédula o Identificación</Form.Label>
                <Form.Control type="text" placeholder="Escriba su cédula o identificación" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName" >
                  <Form.Label className="font-semibold">Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Escriba su nombre" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridApellido1">
                  <Form.Label className="font-semibold">Apellido #1</Form.Label>
                  <Form.Control type="text" placeholder="Escriba su primer apellido" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridApellido2">
                  <Form.Label className="font-semibold">Apellido #2</Form.Label>
                  <Form.Control type="text" placeholder="Escriba su segundo apellido" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridCorreo">
                <Form.Label className="font-semibold">Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Escriba su correo electrónico" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridCorreo">
                <Form.Label className="font-semibold">Fecha de Entrega</Form.Label>
                <Form.Control type="date" placeholder="Elija la fecha de Entrega" />
              </Form.Group>

              <Button variant="danger" type="button">
                Buscar Estudiante
              </Button>
            </Form>
          </Tab>

          <Tab eventKey="Datos" title={<span className="custom-tab-title">Datos</span>}>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Estudiante</th>
                  <th>Identifición</th>
                  <th>Carrera</th>
                  <th>Dispositivo</th>
                  <th>Fecha de Entrega</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>12679535</td>
                    <td>Ingeniería en Sistemas de Información</td>
                    <td>Laptop</td>
                    <td>21/5/2023</td>
                  </tr>
                  <tr>
                    <td>Jane</td>
                    <td>16979742</td>
                    <td>Enseñanza del Inglés</td>
                    <td>Tablet</td>
                    <td>13/3/2023</td>
                  </tr>
                  <tr>
                    <td>Robert</td>
                    <td>03242213</td>
                    <td>Administración</td>
                    <td>Tablet</td>
                    <td>29/10/2023</td>
                  </tr>
                </tbody>
            </Table>
              <Button variant="danger" type="button">
                Enviar
              </Button>
          </Tab>
        </Tabs>
      </div>
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
}

export default DevolutionClient;