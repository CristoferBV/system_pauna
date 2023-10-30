import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import Logo from "../../../../../public/LOGO-UNA.png";
import LogoBombilla from "../../../../../public/bombilla.png";
import { Navbar, Nav, Form, Button, Card, Table, Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

export default function LoanClient() {

  const router = useRouter();
  const [active, setActive] = useState("");

  const navigation = [
    { name: "Préstamo", section: "LoanClient", current: false },
    { name: "Devolución", section: "DevolutionClient", current: false },
    { name: "Inicio", section: "HomeClient", current: false },
  ];

  // Estados para insertar
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [carrera, setCarrera] = useState("");
  const [nivelCarrera, setNivelCarrera] = useState("");
  const [dispositivo, setDispositivo] = useState("");
  const [fechaPrestamo, setFechaPrestamo] = useState("");
  const [campus, setCampus] = useState("");
  const [telefono, setTelefono] = useState("");

  // Método de envío de datos
  const handleSubmit = () => {
    const data = {
      UO_primer_nombre: nombreCompleto,
      EE_idenficador: cedula,
      CE_correpElectronico: correo,
      CA_nombre: carrera,
      EE_nivel: nivelCarrera,
      TP_nombre: dispositivo,
      LP_fechaDevolucion: fechaPrestamo,
      EE_campus: campus,
      TO_numero: telefono,
    };

    // Realizar la solicitud POST a la API
    Axios.post("/api/library_client/loan", data)
      .then((response) => {
        // Manejar la respuesta de la API (éxito)
        console.log("Éxito:", response.data);
      })
      .catch((error) => {
        // Manejar errores de la API
        console.error("Error:", error);
      });
  };

  // Estados para llenar selects
  const [carreras, setCarreras] = useState([]);
  const [dispositivos, setDispositivos] = useState([]);

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

  // Dispositivos
  useEffect(() => {
    // Realiza una solicitud GET a tu API para obtener las opciones de carrera
    Axios.get("/api/fillSelectsLoan/device")
      .then((response) => {
        // Al recibir la respuesta, actualiza el estado con los datos de carrera
        setDispositivos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de carrera", error);
      });
  }, []);

  return (
    <div className=" flex flex-col min-h-screen">
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
                <h1 className="ml-3">Realice el Préstamo</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

        <div className="mx-auto w-11/12 p-6 bg-[#e9e0e0] mb-8 md:mb-0" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' , borderRadius:"3px"}}> 
        <h1 className="text-2xl font-bold mb-6 text-center">
            Formulario de solicitudes
          </h1>
          <div className="rounded p-6">
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <label className="font-semibold">Nombre completo</label>
                  <Form.Control
                    type="text"
                    placeholder="Ejemplo: Pepito Bryan Gomez Arguedas"
                    value={nombreCompleto}
                    onChange={(e) => setNombreCompleto(e.target.value)}
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
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <label className="font-semibold">Carrera</label>
                  <Form.Control
                    as="select"
                    value={carrera}
                    onChange={(e) => setCarrera(e.target.value)}
                  >
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
                    value={nivelCarrera}
                    onChange={(e) => setNivelCarrera(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <label className="font-semibold">Dispositivos</label>
                  <Form.Control
                    as="select"
                    value={dispositivo}
                    onChange={(e) => setDispositivo(e.target.value)}
                  >
                    <option value="">-Seleccionar opción-</option>
                    {dispositivos.map((dispositivo) => (
                      <option key={dispositivo.value} value={dispositivo.value}>
                        {dispositivo.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <label className="font-semibold">Fechas de prestamos</label>
                  <Form.Control
                    as="select"
                    value={fechaPrestamo}
                    onChange={(e) => setFechaPrestamo(e.target.value)}
                  >
                    <option value="">-Seleccionar opción-</option>
                    <option value="">2023/10/2</option>
                    <option value="">2022/4/10</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <label className="font-semibold">Campus</label>
                  <Form.Control
                    type="input"
                    placeholder="Ejemplo: Campus Coto"
                    value={campus}
                    onChange={(e) => setCampus(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <label className="font-semibold">Teléfono</label>
                  <Form.Control
                    type="input"
                    placeholder="Ejemplo: 85893501"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center mt-4">
              <Button variant="danger" onClick={handleSubmit}>
                Aceptar
              </Button>
            </div>
          </div>
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
