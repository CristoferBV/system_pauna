import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import Logo from "../../../public/LOGO-UNA.png";

const Register = () => {

  const router = useRouter();

  const [user, setUser] = useState({
    UO_identificador: "",
    UO_primer_nombre: "",
    UO_segundo_nombre: "",
    UO_primer_apellido: "",
    UO_segundo_apellido: "",
    UO_identificador_rol: 1,
    UO_contrasena: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const [otherData, setOtherData] = useState({}); // Para obtener los datos del correo

  // Enviar los datos al servidor
  const handleClick = async (e) => {
    console.log({ user });
    e.preventDefault();
    console.log(user);
    const res = await axios
      .post("/api/formUser/login_register", user)
      .then(function (response) {
        console.log(response);
        router.push("/LoginAndRegister/Login/Login");
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(res);
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
          <div className="d-flex flex-column align-items-center space-y-3 space-md-7">
            <h1 className="font-weight-bold text-xl text-md-2xl text-lg-3xl mb-2 mb-md-4 text-center">
              Registrarse
            </h1>
            <div className="row">
              <div className="col-md-6">
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
                    placeholder="Segundo Nombre"
                    value={user.UO_segundo_nombre}
                    onChange={handleChange}
                    className="w-100 p-3 rounded-xl"
                  />
                </Form.Group>
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
              </div>
              <div className="col-md-6">
                <Form.Group className="w-100 p-2">
                  <Form.Control
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-100 p-3 rounded-xl"
                  />
                </Form.Group>
                <Form.Group className="w-100 p-2">
                  <Form.Control
                    type="text"
                    placeholder="Número de teléfono"
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
                <div className="mx-2 mt-2">
                  <Link href="/LoginAndRegister/Login/Login">
                    <Button
                      variant="danger"
                      className="p-2 rounded-xl mt-md-2 mb-0 bg-[#E31919] w-100"
                      onClick={handleClick}
                    >
                      Entrar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Register;