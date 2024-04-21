import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button, Card } from "react-bootstrap";
import Logo from "../../../../../public/LOGO-UNA.png";
import LogoBombilla from "../../../../../public/bombilla.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Row, Col, ButtonGroup  } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Swal from "sweetalert2";

export default function DevolutionClient({ Devolution }) {
  //const router = useRouter();
  const [active, setActive] = useState("");
  const [key, setKey] = useState("Inicio");
  const [data, setData] = useState(Devolution);

  const navigation = [
    { name: "Inicio", section: "HomeClient", current: false },
    { name: "Préstamo", section: "LoanClient", current: false },
    { name: "Devolución", section: "DevolutionClient", current: false },
  ];

  //Datos que se envían a la base de datos
  const [] = useState({
    PrimerNombreUsuario: "",
    IdentificadorUsuario: "",
    NombreCarrera: "",
    NombreTipo: "",
    FechaDevolucion: "",
  });

  const [identificacion, setIdentificacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");

  const buscarEstudiante = async () => {
    try {
      const response = await axios.get(
        `/api/devolution/students?identificacion=${identificacion}`
      );
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
          const formattedFechaEntrega = fechaEntrega
            .toISOString()
            .split("T")[0];
          setFechaEntrega(formattedFechaEntrega);
        } else {
        }
      } else {
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "No se encontraron estudiantes...",
        text: "Usted no posee una solicitud!",
      });
    }
  };

  const handleTabSelect = (key) => {
    if (key === "Datos") {
      Swal.fire("Seleccionese y presione enviar.");
    }
    setKey(key);
  };

  // Función para manejar el clic en el botón "Enviar"
  const handleButtonDelete = () => {
    const identificacion = document.getElementById("formGridCedula").value; // Obtener el valor del campo de entrada de cédula

    if (identificacion) {
      // Verificar si se ha ingresado una cédula
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          // Define los datos a enviar a la API
          const dataToSend = {
            UO_identificador: identificacion,
          };

          // Realiza una solicitud DELETE a la API para eliminar los datos en función del identificador
          axios
            .delete("/api/devolution/data", { data: dataToSend })
            .then((response) => {
              if (response.status === 200) {
      
                // Actualiza los datos después de la eliminación
                axios
                  .get("/api/devolution/data")
                  .then((response) => {
                    if (response.status === 200) {
                      //console.log("Datos actualizados:", response.data);
                      const newData = response.data;
                      setData(newData); // Actualiza los datos en el estado

                      // Muestra una notificación de éxito
                      Swal.fire(
                        "Devolución realizada!",
                        "Su devolución ha sido realizada.",
                        "success"
                      );

                      // Limpia los campos de entrada
                      setIdentificacion("");
                      setNombre("");
                      setApellido1("");
                      setApellido2("");
                      setCorreo("");
                      setFechaEntrega("");

                    } else {
                      console.log("Error al actualizar datos");
                    }
                  })
                  .catch((error) => {
                    console.error(
                      "Error al obtener datos actualizados:",
                      error
                    );
                  });
              } else {
                // Manejar otros códigos de estado de respuesta si es necesario.
                console.log("Error al eliminar datos");
              }
            })
            .catch((error) => {
              // Manejar errores de la solicitud
              console.error("Error:", error);
            });
        }
      });
    } else {
      // Muestra un mensaje de error si no se ha ingresado una cédula
      console.log("Ingrese una cédula antes de enviar los datos.");
    }
    
  };

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
                className="d-flex align-items-center justify-content-center p-2"
              >
                <Nav
                  key={item.name}
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

        <div
          className="custom-container mx-auto w-11/12 p-6 mb-8 md:mb-0"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "3px",
          }}
        >
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={handleTabSelect}
            className="mb-3 custom-tabs"
          >
            <Tab
              eventKey="Inicio"
              title={<span className="custom-tab-title">Inicio</span>}
            >
              <Card>
                <Card.Body>
                  {" "}
                  <h4>
                    Bienvenido querido estudiante al apartado devolución de
                    dispositivos.
                  </h4>
                  <br />
                  <span>●</span> El primer paso es ir a la sección de{" "}
                  <b>"Devolución"</b>. <br />
                  <span>●</span> El segundo paso es buscar el campo {" "}
                  <b>Cédula o Identificación</b> que se encuentra al inicio de la sección Devolucion. <br />
                  <span>●</span> El tercer paso es <b>digitar</b> su cédula en el campo correspondiente y <b>pulsar</b> el botón "Buscar datos" para llenar
                  los campos. <br />
                  <span>●</span> El cuarto paso es <b>pulsar</b> el botón "Hacer Devolución", para realizar
                  la devolución correctamente.
                  <br />
                  <br />
                  
                </Card.Body>
              </Card>
            </Tab>

            <Tab
              eventKey="Estudiantes"
              title={<span className="custom-tab-title">Devolución</span>}
            >
              <Form>
                <Form.Group className="mb-3" controlId="formGridCedula">
                  <Form.Label className="font-semibold">
                    Cédula o Identificación
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escriba su cédula o identificación"
                    value={identificacion}
                    onChange={(e) => setIdentificacion(e.target.value)}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label className="font-semibold">Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      readOnly={true}
                      placeholder="Escriba su nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridApellido1">
                    <Form.Label className="font-semibold">
                      Apellido #1
                    </Form.Label>
                    <Form.Control
                      type="text"
                      readOnly={true}
                      placeholder="Escriba su primer apellido"
                      value={apellido1}
                      onChange={(e) => setApellido1(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridApellido2">
                    <Form.Label className="font-semibold">
                      Apellido #2
                    </Form.Label>
                    <Form.Control
                      type="text"
                      readOnly={true}
                      placeholder="Escriba su segundo apellido"
                      value={apellido2}
                      onChange={(e) => setApellido2(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCorreo">
                  <Form.Label className="font-semibold">
                    Correo Electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    readOnly={true}
                    placeholder="Escriba su correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridCorreo">
                  <Form.Label className="font-semibold">
                    Fecha de Entrega
                  </Form.Label>
                  <Form.Control
                    type="date"
                    readOnly={true}
                    placeholder="Elija la fecha de Entrega"
                    value={fechaEntrega}
                    onChange={(e) => setFechaEntrega(e.target.value)}
                  />
                </Form.Group>

                <ButtonGroup className="mt-3 gap-3">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={buscarEstudiante}
                  >
                    Buscar datos
                  </Button>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={handleButtonDelete}
                  >
                    Hacer Devolución
                  </Button>
                </ButtonGroup>
              </Form>
            </Tab>
          </Tabs>
        </div>
      </main>

      <footer>
        <Card
          className="w-11/12 bg-danger text-white"
          style={{ margin: "20px auto", padding: "20px" }}
        >
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
        Devolution: [],
      },
    };
  }
};
