"use client";
import axios from "axios";
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form, Row, Col, Button, Table, Container, Alert } from 'react-bootstrap';
import Swal from "sweetalert2";
import InactivityTimer from "../InactivityTime";

export default function UserWindow({ userAdmins, rols }) {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmpty = Object.values(user).some(value => value === "");
    if (isEmpty) {
      Swal.fire({
        icon: "warning",
        title: "Atención",
        text: "Existen campos incompletos",
      });
      return;
    }
    const res = await axios
      .post("/api/config/admin", user)
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Ingreso",
          text: response.data,
        });
        reloadPage();
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error al ingresar datos",
        });
      });
  };
  const handleUpdate = async (e) => {
    await axios
      .delete("/api/config/admin", {data: selectedUser})
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Eliminar usuario",
          text: response.data,
        });
        reloadPage();
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.data,
        });
      });
  };


  const handleRowClick= (userAdmin)=>{
    setSelectedUser(userAdmin)
  }

  const [selectedUser, setSelectedUser] = useState(null);

  const [user, setUser] = useState({
    UO_identificador: "",
    UO_primer_nombre: "",
    UO_segundo_nombre: "",
    UO_primer_apellido: "",
    UO_segundo_apellido: "",
    UO_identificador_rol: 0,
    CE_correoElectronico: "",
    UO_contrasena: ""
  });

  const [rol, setRol] = useState({
    RL_identificador: "",
    RL_nombre: ""
  });
  

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const reloadPage = () => {
    setUser({
      UO_identificador: "",
      UO_primer_nombre: "",
      UO_segundo_nombre: "",
      UO_primer_apellido: "",
      UO_segundo_apellido: "",
      UO_identificador_rol: 0,
      CE_correoElectronico: "",
      UO_contrasena: ""
    });
    router.push("/Administracion/Components/User/userWindow");
  }
  const handleLogout = () => {
    router.push("/LoginAndRegister/Login/Login");
  };
  

  return (
    <>
    <InactivityTimer logoutFunction={handleLogout} />
      <div className="rounded" style={{ backgroundColor: '#212529', color: 'white', height: '100%', width: '100%', marginTop: '8rem', marginBottom: '8rem' }}>


        <Container style={{ padding: '2rem', marginRight: '0.8rem' }}>
          <h1 className="text-center">Usuarios</h1>
        </Container>
        <Row>
          <Col >
            <Container className="m-auto p-4">
              <Form className='p-2' onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Identificador</Form.Label>
                    <Form.Control name="UO_identificador" type="text" placeholder="Ingrese el identificador" value={user.UO_identificador} onChange={handleChange}  />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Primer Nombre</Form.Label>
                    <Form.Control name="UO_primer_nombre" value={user.UO_primer_nombre} onChange={handleChange} placeholder="Ingrese el primer nombre" />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Segundo Nombre</Form.Label>
                    <Form.Control name="UO_segundo_nombre" value={user.UO_segundo_nombre} onChange={handleChange} placeholder="Ingrese el segundo nombre" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Primer Apellido</Form.Label>
                    <Form.Control name="UO_primer_apellido" value={user.UO_primer_apellido} onChange={handleChange} placeholder="Ingrese el primer apellido" />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Segundo Apellido</Form.Label>
                    <Form.Control name="UO_segundo_apellido" value={user.UO_segundo_apellido} onChange={handleChange} placeholder="Ingrese el segundo apellido" />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Correo electronico</Form.Label>
                  <Form.Control name="CE_correoElectronico" value={user.CE_correoElectronico} onChange={handleChange} placeholder="Ingrese el correo electronico" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control name="UO_contrasena" value={user.UO_contrasena} onChange={handleChange} type="password" placeholder="Ingrese su contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit} >
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

              <Table striped bordered hover responsive variant='dark'>
                <thead>
                  <tr>
                    <th>Identificador</th>
                    <th>Nombre Completo</th>
                    <th>Apellidos</th>
                  </tr>
                </thead>
                <tbody>
                  {userAdmins.map((userAdmin)=>(
                     <tr key={userAdmin.UO_identificador} onClick={() => handleRowClick(userAdmin)}>
                     <td>{userAdmin.UO_identificador}</td>
                     <td>{userAdmin.UO_primer_nombre}<span> </span>{userAdmin.UO_segundo_nombre}</td>
                     <td>{userAdmin.UO_primer_apellido}<span> </span>{userAdmin.UO_segundo_apellido}</td>
                   </tr>
                  ))}
                 
                </tbody>
              </Table>
              <Button variant="primary" type="submit" onClick={handleUpdate}>
                Eliminar
              </Button>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  try {
    const { data } = await axios.get(
      process.env.LINK+"/api/config/admin"
    )
    const {userAdmins, rols} = data;
    return {
      props: {
        userAdmins,
        rols,
      },
    };
  } catch (error) {
    console.error("Error fetching data:");
        return {
            props: {
              userAdmins : [],
              rols: []
            },
        };
  }
};
