import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import Logo from "../../../../../public/LOGO-UNA.png";
import LogoBombilla from "../../../../../public/bombilla.png";
import {Navbar,Nav,Form,Button,Card,Table,Container,Row,Col,Tabs,Tab} from "react-bootstrap";
import Swal from "sweetalert2";
import React from "react";
import { useRouter } from "next/router";

export default function LoanClient () {
  const router = useRouter();

  const navigation = [
    { name: "Inicio", section: "HomeClient", current: false },
    { name: "Préstamo", section: "LoanClient", current: false },
    { name: "Devolución", section: "DevolutionClient", current: false },
  ];

  const [active, setActive] = useState("");
  const [cedula, setCedula] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [device, setDevice] = useState("");
  const [loanData, setLoanData] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET a la API para obtener los préstamos
    Axios.get("/api/libraryClient/loan")
      .then((response) => {
        // Al recibir la respuesta, actualizar el estado con los datos de la solicitud de préstamo
        setLoanData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los préstamos", error);
      });

    // Realiza una solicitud GET a tu API para obtener las opciones de carrera
    Axios.get("/api/fillSelectsLoan/career")
      .then((response) => {
        // Al recibir la respuesta, actualiza el estado con los datos de carrera
        setCarreras(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de carrera", error);
      });

    // Realiza una solicitud GET a tu API para obtener las opciones de dispositivos
    Axios.get("/api/fillSelectsLoan/device")
      .then((response) => {
        // Al recibir la respuesta, actualiza el estado con los datos de dispositivos
        setDeviceData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de dispositivos", error);
      });

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

  const handleAceptarClick = async () => {
    try {
      //const formattedDate = new Date(selectedDate).toISOString().split("T")[0];
      console.log("Fecha al enviar solicitud", selectedDate)
      // Enviar los datos al servidor
      const { data } = await Axios.post("/api/libraryClient/loan", {
        cedula,
        selectedDate,
        device,
      });

      // Si la solicitud es exitosa, muestra un mensaje de éxito
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Su préstamo ha sido realizado",
        showConfirmButton: false,
        timer: 1500,
      });

      // Recargar los préstamos después de enviar el formulario
      Axios.get("/api/libraryClient/loan")
        .then((response) => {
          // Al recibir la respuesta, actualizar el estado con los datos de la solicitud de préstamo
          setLoanData(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los préstamos", error);
        });
        reloadPage();
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Su préstamo no ha sido realizado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const reloadPage = () => {
    router.push("/Biblioteca/Cliente/Components/InterfazCliente/LoanClient");
  };

  return (
    <div className=" flex flex-col min-h-screen">
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
        <header className="header-container d-flex align-items-center justify-content-center">
          <Container>
            <Row>
              <Col>
                <div className="d-flex align-items-center justify-content-center">
                  <Image src={LogoBombilla} alt="Logo" />
                  <h1 className="ml-3">Llenar la solicitud</h1>
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
              title={<span className="custom-tab-title">Solicitud</span>}
            >
              <Form>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <label htmlFor="nombre" className="font-semibold">Nombre</label>
                      <Form.Control id="nombre" name="nombre" type="text" placeholder="Ejemplo: Pepito" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                  <Form.Group className="mb-3">
                    <label htmlFor="segundoNombre" className="font-semibold">
                      Segundo Nombre (Solo si tiene)
                    </label>
                    <Form.Control id="segundoNombre" name="segundoNombre" type="text" placeholder="Ejemplo: Bryan" />
                  </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <label htmlFor="apellidoUno" className="font-semibold">Primer apellido</label>
                      <Form.Control id="apellidoUno" name="apellidoUno" type="text" placeholder="Ejemplo: Gomez" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={4}>
                  <Form.Group className="mb-3">
                    <label htmlFor="apellidoDos" className="font-semibold">Segundo apellido</label>
                    <Form.Control
                      id="apellidoDos"
                      name="apellidoDos"
                      type="text"
                      placeholder="Ejemplo: Arguedas"
                    />
                  </Form.Group>

                    <Form.Group className="mb-3">
                      <label htmlFor="cedula" className="font-semibold">Cédula</label>
                      <Form.Control
                        id="cedula"
                        name="cedula"
                        type="text"
                        placeholder="Ejemplo: 018080472"
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <label htmlFor="correo" className="font-semibold">Correo</label>
                      <Form.Control
                        id="correo"
                        name="correo"
                        type="email"
                        placeholder="Ejemplo: correo@gmail.com"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                  <Form.Group className="mb-3">
                  <label htmlFor="carrera" className="font-semibold">Carrera</label>
                  <Form.Control id="carrera" name="carrera" as="select">
                    <option value="">-Seleccionar opción-</option>
                    {carreras.map((carrera) => (
                      <option key={carrera.CA_identificador} value={carrera.CA_identificador}>
                        {carrera.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                  <Form.Group className="mb-3">
                    <label htmlFor="nivelCarrera" className="font-semibold">Nivel de carrera</label>
                    <Form.Control id="nivelCarrera" name="nivelCarrera" as="select">
                      <option value="">-Seleccionar opción-</option>
                      <option value="Nivel I">Nivel I</option>
                      <option value="Nivel II">Nivel II</option>
                      <option value="Nivel III">Nivel III</option>
                      <option value="Nivel IV">Nivel IV</option>
                      <option value="Nivel V">Nivel V</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <label htmlFor="dispositivos" className="font-semibold">Dispositivos</label>
                    <Form.Control id="dispositivos" name="dispositivos" as="select" onChange={(e) => {
                      const selectedDeviceDescription =
                        e.target.options[e.target.selectedIndex].getAttribute("data-description");
                      setDevice(selectedDeviceDescription);
                    }}>
                      <option value="">-Seleccionar opción-</option>
                      {deviceData.map((device) => (
                        <option key={device.TP_nombre} value={device.TP_nombre} data-description={device.label}>
                          {device.label}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col md={4}>
                <Form.Group className="mb-3">
                  <label htmlFor="fechasCitas" className="font-semibold">Fechas de citas</label>
                  <Form.Control id="fechasCitas" name="fechasCitas" as="select" onChange={(e) => {
                      const selectedDate = e.target.options[e.target.selectedIndex].getAttribute("data-date");
                      const fecha = selectedDate.split(" - ")[0];
                      const [dia, mes, año] = fecha.split("/");
                      const fechaFormateada = `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
                      setSelectedDate(fechaFormateada);                      
                      console.log("fecha:",fechaFormateada);
                  }}>
                      <option value="">-Seleccionar opción-</option>
                      {horarios.map((horario) => (
                          <option key={horario.value} value={horario.value} data-date={horario.label}>
                              {"Fecha: " + horario.label}
                          </option>
                      ))}
                  </Form.Control>
              </Form.Group>

                  <Form.Group className="mb-3">
                    <label htmlFor="campus" className="font-semibold">Campus</label>
                    <Form.Control id="campus" name="campus" as="select">
                      <option value="">-Seleccionar opción-</option>
                      <option value="Campus Coto">Campus Coto</option>
                      <option value="Campus PZ">Campus PZ</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <label htmlFor="telefono" className="font-semibold">Teléfono</label>
                    <Form.Control id="telefono" name="telefono" type="text" placeholder="Ejemplo: 85893501" />
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
              title={<span className="custom-tab-title">Ver Solicitud</span>}
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
                  </tr>
                </thead>
                <tbody> 
                  {Array.isArray(loanData) && loanData.map((loan) => {
                      const cedulaMatches = cedula === loan.UO_identificador;

                      // Retornar la fila solo si cedulaMatches es true
                      if (cedulaMatches) {
                        return (
                          <tr key={loan.UO_identificador}>
                            <td>{loan.UO_primer_nombre}</td>
                            <td>{loan.UO_segundo_nombre}</td>
                            <td>{loan.UO_primer_apellido}</td>
                            <td>{loan.UO_segundo_apellido}</td>
                            <td>{loan.CA_nombre}</td>
                            <td>{new Date(loan.HO_fecha).toLocaleDateString()}</td>
                            <td>{loan.UO_identificador}</td>
                            <td>{loan.EE_nivel}</td>
                            <td>{loan.EE_campus}</td>
                            <td>{loan.CE_correoElectronico}</td>
                            <td>{loan.TP_nombre}</td>
                            <td>{loan.TO_numero}</td>
                          </tr>
                        );
                      }
                      return null;  // Si no hay coincidencia, no se devuelve ningún elemento.
                    })}
                </tbody>

              </Table>
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

//export default LoanClient;

export const getServerSideProps = async (context) => {
  try {
    const { data } = await Axios.get(
      process.env.LINK+"/api/libraryClient/loan"
    )
    const {loanData} = data;
    return {
      props: {
        loanData,
        rols,
      },
    };
  } catch (error) {
    //console.error("Error fetching data:");
        return {
            props: {
              loanData : [],
              rols: []
            },
        };
  }
};