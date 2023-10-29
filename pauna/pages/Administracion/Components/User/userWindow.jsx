"use client";
import axios from "axios";
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form, Row, Col, Button, Table, Container, Alert } from 'react-bootstrap';

export default function UserWindow({ userAdmins }) {
  console.log(userAdmins);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hola");
    const res = await axios
      .post("/api/config/BibliotecaHorario", user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [user, setUser] = useState({
    UO_identificador: "",
    UO_primer_nombre: "",
    UO_segundo_nombre: "",
    UO_primer_apellido: "",
    UO_segundo_apellido: "",
    UO_identificador_rol: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    console.log(user.UO_identificador_rol);
  };

  const reloadPage = () => {
    router.push("/Administracion/Components/User/userWindow");
  }
  const [showAlert, setShowAlert] = useState(false);
  const handleSave = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };
  const handleAlertClose = () => {
    setShowAlert(false);
  };


  const [open, setOpen] = useState(false);
  return (
    <>
      <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
        ¡Guardado con éxito!
      </Alert>
      <div className="rounded" style={{ backgroundColor: '#212529', color: 'white', height: '100%', width: '100%', marginTop: '8rem', marginBottom: '8rem' }}>


        <Container style={{ padding: '2rem', marginRight: '0.8rem' }}>
          <h1 className="text-center">Usuarios</h1>
        </Container>
        <Row>
          <Col >
            <Container className="m-auto p-4">
              <Form className='p-2'>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Identificador</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el identificador" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Primer Nombre</Form.Label>
                    <Form.Control placeholder="Ingrese el primer nombre" />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Segundo Nombre</Form.Label>
                    <Form.Control placeholder="Ingrese el segundo nombre" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Primer Apellido</Form.Label>
                    <Form.Control placeholder="Ingrese el primer apellido" />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Segundo Apellido</Form.Label>
                    <Form.Control placeholder="Ingrese el segundo apellido" />
                  </Form.Group>
                </Row>


                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Elija el rol a desempeñar</Form.Label>
                  <Form.Select>
                    <option>Opcion 1</option>
                    <option>Opcion 2</option>
                    <option>Opcion 3</option>
                    <option>Opcion 4</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSave}>
                  Añadir
                </Button>
              </Form>
            </Container>

          </Col>
          <Col>
            <Container className='p-4'>
              <Container className='text-center'>
                <p>Administradores</p>
              </Container>

              <Table striped bordered hover variant='dark'>
                <thead>
                  <tr>
                    <th>Identificador</th>
                    <th>Nombre Completo</th>
                    <th>Apellidos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>The Bird</td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="primary" type="submit">
                Eliminar
              </Button>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  )
}

{/*export const getServerSideProps = async (context) => {
  try {
    const { data: userAdmins } = await axios.get(
      "http://localhost:3000/api/config/admin"
    )
    return {
      props: {
        userAdmins,
      },
    };
  } catch (error) {
    console.log(error)
  }
};*/}
