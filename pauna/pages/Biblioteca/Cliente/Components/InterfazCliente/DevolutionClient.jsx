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
import axios from 'axios';


export default function DevolutionClient({Devolution}) {
  const [selectedRow, setSelectedRow] = useState(null);
  const router = useRouter();
  const [active, setActive] = useState("");

  const navigation = [
    { name: "Inicio", section: "HomeClient", current: false },
    { name: "Préstamo", section: "LoanClient", current: false },
    { name: "Devolución", section: "DevolutionClient", current: false },
  ];

  const [key, setKey] = useState("Estudiantes");

  //Datos que se envían a la base de datos
  const [] = useState({
    PrimerNombreUsuario: '',
    IdentificadorUsuario: '',
    NombreCarrera: '',
    NombreTipo: '',
    FechaDevolucion: '',
  });

  const [identificacion, setIdentificacion] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('YYYY-MM-DD');

  const buscarEstudiante = async () => {
    try {
      const response = await axios.get(`/api/devolution/students?identificacion=${identificacion}`);
      if (response.status === 200) {
        const data = response.data;
        if (data.length > 0) {
          const estudiante = data[0];
          setNombre(estudiante.Nombre);
          setApellido1(estudiante.PrimerApellido);
          setApellido2(estudiante.SegundoApellido);
          setCorreo(estudiante.Correo);

          // Formatea la fecha en "YYYY-MM-DD" antes de establecerla en el estado
          const fechaEntrega = new Date(estudiante.FechaEntrega);
          const formattedFechaEntrega = fechaEntrega.toISOString().split('T')[0];
          setFechaEntrega(formattedFechaEntrega);
        } else {
          // No se encontró ningún estudiante con la identificación proporcionada
          // Puedes mostrar un mensaje de error o realizar alguna acción apropiada aquí.
        }
      } else {
        // Manejar errores de la solicitud a la API
      }
    } catch (error) {
      // Manejar errores de la solicitud
    }
  }

  function sendData() {
    if (selectedRow !== null) {
      // Obtén el identificador de la fila seleccionada
      const identificacion = Devolution[selectedRow].IdentificadorUsuario;

      // Define los datos a enviar a la API
      const dataToSend = {
        UO_identificador: identificacion,
      };

      // Realiza una solicitud DELETE a la API para eliminar los datos en función del identificador
      axios
        .delete('/api/devolution/data', { data: dataToSend })
        .then((response) => {
          if (response.status === 200) {
            // Los datos se eliminaron con éxito, puedes realizar alguna acción apropiada aquí.
            console.log('Datos eliminados con éxito');
          } else {
            // Manejar otros códigos de estado de respuesta si es necesario.
            console.log('Error al eliminar datos');
          }
        })
        .catch((error) => {
          // Manejar errores de la solicitud
          console.error('Error:', error);
        });
    } else {
      // Muestra un mensaje de error o realiza alguna acción si no se ha seleccionado ninguna fila.
      console.log('Selecciona una fila antes de enviar los datos.');
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar bg="danger" expand="lg">
      <Navbar.Brand href="#home">
        <Image
          className="h-9 w-9 mt-2.5 ml-2.5"
          src={Logo}
          width={1000}
          height={1000}
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
           <Link href={'/LoginAndRegister/Login/Login'} className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
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
                <Form.Control type="text" placeholder="Escriba su cédula o identificación" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)}/>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName" >
                  <Form.Label className="font-semibold">Nombre</Form.Label>
                  <Form.Control type="text" readOnly={true} placeholder="Escriba su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridApellido1">
                  <Form.Label className="font-semibold">Apellido #1</Form.Label>
                  <Form.Control type="text" readOnly={true} placeholder="Escriba su primer apellido" value={apellido1} onChange={(e) => setApellido1(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridApellido2">
                  <Form.Label className="font-semibold">Apellido #2</Form.Label>
                  <Form.Control type="text" readOnly={true} placeholder="Escriba su segundo apellido" value={apellido2} onChange={(e) => setApellido2(e.target.value)}/>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridCorreo">
                <Form.Label className="font-semibold">Correo Electrónico</Form.Label>
                <Form.Control type="email" readOnly={true} placeholder="Escriba su correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridCorreo">
                <Form.Label className="font-semibold">Fecha de Entrega</Form.Label>
                <Form.Control type="date" readOnly={true} placeholder="Elija la fecha de Entrega" value={fechaEntrega} onChange={(e) => setFechaEntrega(e.target.value)}/>
              </Form.Group>

              <Button variant="danger" type="button" onClick={buscarEstudiante}>
                Buscar Estudiante
              </Button>
            </Form>
          </Tab>

          <Tab eventKey="Datos" title={<span className="custom-tab-title">Devolución</span>}>
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
                  {Devolution.map((Devolution, index) => (

                  <tr
                    key={Devolution.IdentificadorUsuario}
                    className={selectedRow === index ? 'selected-row' : ''}
                    onClick={() => setSelectedRow(index)}>

                    <td>{Devolution.PrimerNombreUsuario}</td>
                    <td>{Devolution.IdentificadorUsuario}</td>
                    <td> {Devolution.NombreCarrera}</td>
                    <td>{Devolution.NombreTipo}</td>
                    <td>{new Date(Devolution.FechaDevolucion).toISOString().slice(0, 10)}</td>
                  </tr>
                  ))}
                </tbody>
            </Table>
              <Button variant="danger" type="button" onClick={sendData}>
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

export const getServerSideProps = async (context) => {
  try {
      const { data: Devolution } = await axios.get(
          "http://localhost:3000/api/devolution/data"
      );
      return {
          props: {
            Devolution,
          },
      };
  } catch (error) {
      console.log(error);
      return {
          props: {
            Devolution: [], // Puedes proporcionar un valor predeterminado en caso de error.
          },
      };
  }
};


