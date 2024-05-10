import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Logo from "../../../public/LOGO-UNA.png";
import Swal from "sweetalert2";
import axios from 'axios';

const Login = () => {
  const router = useRouter();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [cedula, setCedula] = useState("");

  const handleLogin = async () => {

    try {
      // Realizar la solicitud al servidor para autenticar al usuario y obtener idRol
      const response = await axios.post('/api/formUser/login', { correo, password, cedula } );
      const data = response.data;

      if (response.status === 200) {
        console.log("Contraseña correcta");
        if (data.UO_identificador_rol === 1) {
          handleEnterLogin();
          router.push("/Biblioteca/Cliente/Components/InterfazCliente/HomeClient");
        } else if (data.UO_identificador_rol === 3) {
            handleEnterLogin();
            router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Inicio");
        } else if (data.UO_identificador_rol === 2) {
            handleEnterLogin();
            router.push("/Administracion/Components/User/userWindow");
            router.push("/Administracion/Components/User/landing");
        }
        
      }else {
        console.log("Error en la contraseña");
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Usuario no encontrado',
        text: 'Este usuario no existe',
      });
        console.error('Error al manejar el inicio de sesión:', error);
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
      if (result.dismiss === Swal.DismissReason.timer) {
        //console.log('I was closed by the timer')
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
                <Image priority src={Logo} alt="Logo" height={300} className="img-fluid" />
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
              <Form.Control name='cedula' type="text" placeholder="Identificación" className="w-100 p-3 rounded-xl" value={cedula} onChange={(e) => setCedula(e.target.value)}/>
            </Form.Group>
            <Form.Group className="w-100 p-0">
              <Form.Control name='correo' type="email" placeholder="Correo electrónico" className="w-100 p-3 rounded-xl" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
            </Form.Group>
            <Form.Group className="w-100 p-0">
              <Form.Control name='contraseña' type="password" placeholder="Contraseña" className="w-100 p-3 rounded-xl" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
              <Link href="/LoginAndRegister/Register/Register" style={{ textDecoration: "none" }}>
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
