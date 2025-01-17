import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Button, Form, Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import Logo from "../../../public/LOGO-UNA.png";
import Swal from "sweetalert2";

const Register = () => {
  const router = useRouter();

  const [carreras, setCarreras] = useState([]);

   // Carreras
   useEffect(() => {
    // Realiza una solicitud GET a tu API para obtener las opciones de carrera
    axios.get("/api/fillSelectsLoan/career")
      .then((response) => {
        // Al recibir la respuesta, actualiza el estado con los datos de carrera
        setCarreras(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las opciones de carrera", error);
      });
  }, []);

  const [user, setUser] = useState({
    UO_identificador: "",
    UO_primer_nombre: "",
    UO_segundo_nombre: "",
    UO_primer_apellido: "",
    UO_segundo_apellido: "",
    UO_identificador_rol: 1,
    UO_contrasena: "",
    phoneNumber: "", 
    gmail: "", 
    carrera: "",
    campus: "",
    nivelCarrera: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleChangePhone = ({ target: { value } }) => {
    setUser({ ...user, phoneNumber: value }); // Actualiza el estado de phoneNumber
  };

  const handleChangeGmail = ({ target: { value } }) => {
    setUser({ ...user, gmail: value }); // Actualiza el estado de gmail
  };

  const handleChangeCarrera = ({ target: { value } }) => {
    setUser({ ...user, carrera: value }); // Actualiza el estado de carrera
  };

  const handleChangeCampus = ({ target: { value } }) => {
    setUser({ ...user, campus: value }); // Actualiza el estado de campus
  };

  const handleChangeNivelCarrera = ({ target: { value } }) => {
    setUser({ ...user, nivelCarrera: value }); // Actualiza el estado de nivel carrera
  };

  // Enviar los datos al servidor
  const handleClick = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("/api/formUser/register", user);
      console.log(response);
      router.push("/LoginAndRegister/Login/Login");
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Usuario no registrado',
        text: 'Este usuario ya existe',
      });
    }
  };

  return (
    <div
      className="d-flex flex-column flex-md-row"
      style={{ minHeight: "50vh" }}
    >
      <div className="w-100 w-md-50 h-100 h-md-50 d-flex flex-column justify-content-center align-items-center p-4 bg-[#FF3333]">
        <Container>
          <Row className="justify-content-center align-items-center min-height-100vh">
            <Col className="circle-container">
              <div className="circle_register">
                <Image
                  priority
                  src={Logo}
                  alt="Logo"
                  height={300}
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="w-100 w-md-50 bg-white d-flex flex-column justify-content-center align-items-center p-4">
        <Container className="w-100 p-4 bg-white border border-gray rounded-lg shadow-sm">
          <div className="d-flex flex-column align-items-center space-y-3 space-md-7 mb-4">
            <h1 className="font-weight-bold text-xl text-md-2xl text-lg-3xl mb-2 mb-md-4">
              Registrarse
            </h1>
          </div>
          <div className="d-flex flex-column align-items-start space-y-3 space-md-7">
            <Tabs
              id="controlled-tab-example"
              className="mb-3 custom-tabs2 custom-tabs-left"
            >
              {/* Tab 1 */}
              <Tab
                eventKey="Datos1"
                title={<span className="custom-tab-title">Primera parte</span>}
              >
                <div className="row">
                  <div className="col-md-6">
                    {/* Contenido de la primera columna */}
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="UO_identificador"
                        type="text"
                        placeholder="Identificación"
                        value={user.UO_identificador}
                        onChange={handleChange}
                        className="w-100 p-3 rounded-xl"
                      />
                    </Form.Group>
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="UO_primer_nombre"
                        type="text"
                        placeholder="Primer Nombre"
                        value={user.UO_primer_nombre}
                        onChange={handleChange}
                        className="w-100 p-3 rounded-xl"
                      />
                    </Form.Group>
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="UO_segundo_nombre"
                        type="text"
                        placeholder="Segundo Nombre (Si tiene)"
                        value={user.UO_segundo_nombre}
                        onChange={handleChange}
                        className="w-100 p-3 rounded-xl"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    {/* Contenido de la segunda columna */}
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="UO_primer_apellido"
                        type="text"
                        placeholder="Primer Apellido"
                        value={user.UO_primer_apellido}
                        onChange={handleChange}
                        className="w-100 p-3 rounded-xl"
                      />
                    </Form.Group>
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="UO_segundo_apellido"
                        type="text"
                        placeholder="Segundo Apellido"
                        value={user.UO_segundo_apellido}
                        onChange={handleChange}
                        className="w-100 p-3 rounded-xl"
                      />
                    </Form.Group>
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="UO_contrasena"
                        type="password"
                        placeholder="Contraseña"
                        value={user.UO_contrasena}
                        onChange={handleChange}
                        className="w-100 p-3 rounded-xl"
                      />
                    </Form.Group>
                  </div>
                </div>
              </Tab>

              {/*  Tab 2 */}
              <Tab
                eventKey="Datos2"
                title={<span className="custom-tab-title">Segunda parte</span>}
              >
                <div className="row">
                  <div className="col-md-6">
                    {/* Contenido de la primera columna */}
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="gmail"
                        type="email"
                        placeholder="Correo electrónico"
                        value={user.gmail}
                        onChange={handleChangeGmail}
                        className="w-100 p-3 rounded-xl"
                      />
                    </Form.Group>
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="phoneNumber"
                        type="text"
                        placeholder="Número de teléfono"
                        value={user.phoneNumber}
                        onChange={handleChangePhone}
                        className="w-100 p-3 rounded-xl"
                      />
                    </Form.Group>
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="campus"
                        as="select"
                        value={user.campus}
                        onChange={handleChangeCampus}
                        className="w-100 p-3 rounded-xl"
                      >
                        <option value="">-Campus-</option>
                        <option value="Campus PZ">Campus PZ</option>
                        <option value="Campus Coto">Campus Coto</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    {/* Contenido de la segunda columna */}
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="carrera"
                        as="select"
                        value={user.carrera}
                        onChange={handleChangeCarrera}
                        className="w-100 p-3 rounded-xl"
                      >
                        <option value="">-Seleccionar carrera-</option>
                        {carreras.map((carrera) => (
                          <option key={carrera.value} value={carrera.value}>
                            {carrera.label}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="w-100 p-2">
                      <Form.Control
                        name="nivelCarrera"
                        as="select"
                        value={user.nivelCarrera}
                        onChange={handleChangeNivelCarrera}
                        className="w-100 p-3 rounded-xl"
                      >
                        <option value="">-Nivel de carrera-</option>
                        <option value="Nivel I">Nivel I</option>
                        <option value="Nivel II">Nivel II</option>
                        <option value="Nivel III">Nivel III</option>
                        <option value="Nivel IV">Nivel IV</option>
                      </Form.Control>
                    </Form.Group>
                    <div className="mx-2 mt-2">
                      <Link href="/LoginAndRegister/Login/Login">
                        <Button
                          variant="danger"
                          className="p-2 rounded-xl mt-md-2 mb-0 bg-[#E31919] w-100"
                          onClick={handleClick}
                        >
                          Registrar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
        <div className="p-3">
          <span className="mt-3 mt-md-5 text-center">
            ¿Nececitas devolverte?{" "}
            <Link
              href="/LoginAndRegister/Login/Login"
              style={{ textDecoration: "none" }}
            >
              <span className="text-danger font-weight-bold">
                <span>Login</span>
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
