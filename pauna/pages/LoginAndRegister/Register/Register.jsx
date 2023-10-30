import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Button, Form } from "react-bootstrap"; // Importar componentes de React Bootstrap
import Logo from "../../../public/LOGO-UNA.png";

const Register = () => {
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
            <Form.Group className="w-100 p-0">
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                className="w-100 p-3 rounded-xl"
              />
            </Form.Group>
            <Form.Group className="w-100 p-0">
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                className="w-100 p-3 rounded-xl"
              />
            </Form.Group>
            <Form.Group className="w-100 p-0">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                className="w-100 p-3 rounded-xl"
              />
            </Form.Group>
              <Link href="/LoginAndRegister/Login/Login">
                <Button
                    variant="danger"
                    className="px-4 px-md-6 py-2 rounded-xl mt-3 mt-md-5 mb-0 bg-[#E31919]"
                    style={{ width: "100%" }}
                >
                    Entrar
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Register;
