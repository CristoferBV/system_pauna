import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import Logo from "../../../../../public/LOGO-UNA.png";
import LogoBombilla from "../../../../../public/bombilla.png";
import { Navbar,Nav,Form, Button,Card,Table,Container,Row,Col,Tabs,Tab, } from "react-bootstrap";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import React from "react";

const LoanClient = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
  const [cedula, setCedula] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [device, setDevice] = useState("");
  const comprobanteBecaInputRef = React.createRef();
  const comprobanteMatriculaInputRef = React.createRef();

  const navigation = [
    { name: "Inicio", section: "HomeClient", current: false },
    { name: "Préstamo", section: "LoanClient", current: false },
    { name: "Devolución", section: "DevolutionClient", current: false },
  ];

  // Estados para llenar selects
  const [carreras, setCarreras] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [deviceData, setDeviceData] = useState([]);

  // Carreras
  useEffect(() => {
    // Realiza una solicitud GET a tu API para obtener las opciones de carrera
    Axios.get("/api/fillSelectsLoan/career")
      .then((response) => {
        // Al recibir la respuesta, actualiza el estado con los datos de carrera
        setCarreras(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de carrera", error);
      });
  }, []);

  ///Dispositivos
  useEffect(() => {
    Axios.get("/api/fillSelectsLoan/device")
      .then((response) => {
        // Al recibir la respuesta, actualiza el estado con los datos de dispositivos
        setDeviceData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de dispositivos", error);
      });
  }, []);

  // Horarios
  useEffect(() => {
    // Realiza una solicitud GET a tu API para obtener las opciones de carrera
    Axios.get("/api/fillSelectsLoan/deadline")
      .then((response) => {
        // Al recibir la respuesta, actualiza el estado con los datos de carrera
        setHorarios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de carrera", error);
      });
  }, []);

  const handleComprobanteBecaChange = (e) => {
    const file = e.target.files[0];
    // Puedes realizar cualquier acción necesaria con el archivo, como actualizar el estado si es necesario
  };

  const handleComprobanteMatriculaChange = (e) => {
    const file = e.target.files[0];
    // Puedes realizar cualquier acción necesaria con el archivo, como actualizar el estado si es necesario
  };

  const handleAceptarClick = async () => {
    try {
      const formattedDate = new Date(selectedDate).toISOString().split("T")[0];
      const comprobanteBecaFile = comprobanteBecaInputRef.current.files[0];
      const comprobanteMatriculaFile =
        comprobanteMatriculaInputRef.current.files[0];

      // Verifica si los archivos están presentes
      if (!comprobanteBecaFile || !comprobanteMatriculaFile) {
        console.error("Por favor, seleccione los archivos necesarios.");
        // Puedes mostrar un mensaje de error al usuario
        return;
      }

      // Convertir las imágenes a Blobs
      const convertToBlob = async (file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(new Blob([reader.result], { type: file.type }));
          };
          reader.readAsArrayBuffer(file);
        });
      };

      const comprobanteBecaBlob = await convertToBlob(comprobanteBecaFile);
      const comprobanteMatriculaBlob = await convertToBlob(comprobanteMatriculaFile);

      console.log("Datos enviados al servidor:", {
        cedula,
        selectedDate: formattedDate,
        device,
        comprobanteBecaBlob,
        comprobanteMatriculaBlob,
      });

      // Enviar los datos al servidor
      const { data } = await Axios.post("/api/libraryClient/loan", {
        cedula,
        selectedDate: formattedDate,
        device,
        comprobanteBeca: comprobanteBecaBlob,
        comprobanteMatricula: comprobanteMatriculaBlob,
      });

      console.log("Respuesta del servidor:", data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Su préstamo ha sido realizado",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className=" flex flex-col min-h-screen">
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
              <Button Button variant="danger" size="ms">
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
                  <h1 className="ml-3">Realice el Préstamo</h1>
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
          <Tabs id="controlled-tab-example" className="mb-3 custom-tabs">
            <Tab
              eventKey="Estudiantes"
              title={
                <span className="custom-tab-title">Llenar Formulario</span>
              }
            >
              <Form>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <label className="font-semibold">Nombre</label>
                      <Form.Control type="text" placeholder="Ejemplo: Pepito" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <label className="font-semibold">
                        Segundo Nombre (Solo si tiene)
                      </label>
                      <Form.Control type="text" placeholder="Ejemplo: Bryan" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <label className="font-semibold">Primer apellido</label>
                      <Form.Control type="text" placeholder="Ejemplo: Gomez" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <label className="font-semibold">Segundo apellido</label>
                      <Form.Control
                        type="text"
                        placeholder="Ejemplo: Arguedas"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <label className="font-semibold">Cédula</label>
                      <Form.Control
                        type="input"
                        placeholder="Ejemplo: 018080472"
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <label className="font-semibold">Correo</label>
                      <Form.Control
                        type="tel"
                        placeholder="Ejemplo: correo@gmail.com"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <label className="font-semibold">Carrera</label>
                      <Form.Control as="select">
                        <option value="">-Seleccionar opción-</option>
                        {carreras.map((carrera) => (
                          <option key={carrera.value} value={carrera.value}>
                            {carrera.label}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <label className="font-semibold">Nivel de carrera</label>
                      <Form.Control
                        type="input"
                        placeholder="Ejemplo: Nivel I"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <label className="font-semibold">Dispositivos</label>
                      <Form.Control
                        as="select"
                        onChange={(e) => {
                          const selectedDeviceDescription =
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-description");
                          setDevice(selectedDeviceDescription);
                        }}
                      >
                        <option value="">-Seleccionar opción-</option>
                        {deviceData.map((device, index) => (
                          <option
                            key={index}
                            value={device.value}
                            data-description={device.label}
                          >
                            {device.label}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <label className="font-semibold">
                        Fechas de prestamos
                      </label>
                      <Form.Control
                        as="select"
                        onChange={(e) => {
                          const selectedDate =
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-date");
                          // Formatear la fecha antes de guardarla en el estado
                          const formattedDate = new Date(selectedDate)
                            .toISOString()
                            .split("T")[0];
                          setSelectedDate(formattedDate);
                        }}
                      >
                        <option value="">-Seleccionar opción-</option>
                        {horarios.map((horario) => (
                          <option
                            key={horario.value}
                            value={horario.value}
                            data-date={horario.label}
                          >
                            {new Date(horario.label).toLocaleDateString()}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <label className="font-semibold">Campus</label>
                      <Form.Control
                        type="input"
                        placeholder="Ejemplo: Campus Coto"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <label className="font-semibold">Teléfono</label>
                      <Form.Control
                        type="input"
                        placeholder="Ejemplo: 85893501"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col md={6}>
                    <Form.Group
                      className="mb-3 text-center mx-auto"
                      style={{ maxWidth: "80%" }}
                    >
                      <label className="font-semibold">
                        Comprobante de Beca
                      </label>
                      <div>
                        <Form.Control
                          type="file"
                          accept=".jpg, .png, .jpeg"
                          ref={comprobanteBecaInputRef}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      className="mb-3 text-center mx-auto"
                      style={{ maxWidth: "80%" }}
                    >
                      <label className="font-semibold">
                        Comprobante de Matricula
                      </label>
                      <div>
                        <Form.Control
                          type="file"
                          accept=".jpg, .png, .jpeg"
                          ref={comprobanteMatriculaInputRef}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <Button variant="danger" onClick={handleAceptarClick}>
                    Enviar Formulario
                  </Button>
                </div>
              </Form>
            </Tab>

            <Tab
              eventKey="Datos"
              title={
                <span className="custom-tab-title">Realizar Prestamo</span>
              }
            >
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Primer Nombre</th>
                    <th>Segundo Nombre</th>
                    <th>Primer Apellido</th>
                    <th>Segundo Apellido</th>
                    <th>Carrera</th>
                    <th>Fecha Prestamo</th>
                    <th>Cédula</th>
                    <th>Nivel Carrera</th>
                    <th>Campus</th>
                    <th>Correo</th>
                    <th>Dispositivo</th>
                    <th>Teléfono</th>
                    <th>Comprobante Beca</th>
                    <th>Comprobante Matricula</th>
                  </tr>
                </thead>
                <tbody>{/* Aquí van datos para la tabla */}</tbody>
              </Table>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="danger" type="button">
                  Aceptar Préstamo
                </Button>
                <div className="mx-2"></div>
                <Button variant="danger" type="button">
                  Eliminar Préstamo
                </Button>
              </div>
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
};

export default LoanClient;