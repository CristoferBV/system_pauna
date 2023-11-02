import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Logo from "../../../public/LOGO-UNA.png";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState("");

  const handleLogin = () => {
    if (selectedOption === "biblioteca") {
      handleEnterLogin();
      router.push("/Biblioteca/Cliente/Components/InterfazCliente/HomeClient");
    } else if (selectedOption === "biblioAdmin") {
      handleEnterLogin();
      router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar");
    } else if (selectedOption === "administracion") {
      handleEnterLogin();
      router.push("/Administracion/Components/User/userWindow");
    }
  };

  const handleEnterLogin = () => {
    let timerInterval
    Swal.fire({
      title: 'Ingresando a PAUNA!',
      html: 'Esto tardará unos <b></b> milisegundos.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  return (
    <div className="d-flex flex-column flex-md-row" style={{ minHeight: "50vh" }}>
      <div className="w-100 w-md-50 h-100 h-md-50 d-flex flex-column justify-content-center align-items-center p-4 bg-[#4333F9]">
        <Container>
          <Row className="justify-content-center align-items-center min-height-100vh">
            <Col className="circle-container">
              <div className="circle">
                <Image src={Logo} alt="Logo" height={300} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="w-100 w-md-50 bg-white d-flex flex-column justify-content-center align-items-center p-4">
        <Container className="w-100 p-4 bg-white border border-gray rounded-lg shadow-sm">
          <div className="d-flex flex-column align-items-center space-y-3 space-md-7">
            <h1 className="font-weight-bold text-xl text-md-2xl text-lg-3xl mb-2 mb-md-4 text-center">
              Inicio de sesión
            </h1>
            <Form.Group className="w-100 p-0">
              <Form.Control type="text" placeholder="Nombre de usuario" className="w-100 p-3 rounded-xl" />
            </Form.Group>
            <Form.Group className="w-100 p-0">
              <Form.Control type="email" placeholder="Correo electrónico" className="w-100 p-3 rounded-xl" />
            </Form.Group>
            <Form.Group className="w-100 p-0">
              <Form.Control type="password" placeholder="Contraseña" className="w-100 p-3 rounded-xl" />
            </Form.Group>
            <Form.Group className="w-100 p-0">
              <Form.Control as="select" className="w-100 p-3 rounded-xl" onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">-Elige un rol-</option>
                <option value="biblioteca">Biblioteca</option>
                <option value="biblioAdmin">Biblioteca/Admin</option>
                <option value="administracion">Administración</option>
              </Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              size="lg"
              className="px-4 px-md-6 py-2 rounded-xl mt-3 mt-md-5 mb-0"
              onClick={handleLogin}
            >
              Entrar
            </Button>
            <p className="mt-3 mt-md-5 text-center">
              ¿No tienes una cuenta?{" "}
              <Link href="/LoginAndRegister/Register/Register">
                <span className="text-danger font-weight-bold">Regístrate</span>
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
