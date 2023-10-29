"use client";
import Buttons from "./InvButtons";
import Link from "next/link";
import axios from "axios";
import React, { useState } from 'react';
import { Row, Col, Container, Button, Form, Table, Modal, Alert } from "react-bootstrap"

export default function Inventary({ materials }) {
  console.log(materials);
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleSave = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    setShowForm(false);
  };
  const handleAlertClose = () => {
    setShowAlert(false);
  };
  return (
    <>
      <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Materiales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Codigo</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su codigo" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="password" placeholder="Ingrese el nombre" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Marca</Form.Label>
              <Form.Select>
                <option>Opcion 1</option>
                <option>Opcion 2</option>
                <option>Opcion 3</option>
                <option>Opcion 4</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control type="email" placeholder="Ingrese la cantidad" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Color</Form.Label>
              <Form.Select>
                <option>Opcion 1</option>
                <option>Opcion 2</option>
                <option>Opcion 3</option>
                <option>Opcion 4</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ubicacion</Form.Label>
              <Form.Select>
                <option>Opcion 1</option>
                <option>Opcion 2</option>
                <option>Opcion 3</option>
                <option>Opcion 4</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Observaciones</Form.Label>
              <Form.Control as="textarea" placeholder="Ingrese sus observaciones" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForm}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
        ¡Guardado con éxito!
      </Alert>
      <div style={{ marginTop: '8rem', marginBottom: '8rem' }}>
        <Container className="text-center" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <Row style={{}}>
            <Col >
              <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.5rem' }}>
                SUPERIOR
              </Button>
            </Col>
            <Col>
              <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.5rem' }}>
                INFERIOR
              </Button>
            </Col>
            <Col>
              <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.5rem' }}>
                AUDITORIO
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="rounded" style={{ backgroundColor: '#212529' }}>
          <Container>
            <Form style={{ fontSize: '1.1rem', padding: '1.1rem' }}>
              <Form.Control type="text" placeholder="Buscar..." style={{
                backgroundColor: '#041a34', fontSize: '1.1rem', color: 'white', padding: '1rem', WebkitTextFillColor: 'white',
              }}>
              </Form.Control>
            </Form>
          </Container>
          <Container style={{ marginTop: '0.6rem', padding: '2rem' }}>
            <p>Lista de materiales</p>
            <Container style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <Table className="text-center" variant='dark' striped bordered hover style={{ fontSize: '1.1rem' }}>
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Cantidad</th>
                    <th>Observaciones</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>
                      <Container>
                        <Row>
                          <Col>
                            <Button onClick={handleShowForm}>
                              Editar
                            </Button>
                          </Col>
                          <Col>
                            <Button>
                              Eliminar
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Container>

            <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
              onClick={handleShowForm}>
              Añadir
            </Button>
          </Container>
        </Container>
      </div>
    </>
  )
}
{/*export const getServerSideProps = async (context) => {
  try {
    const { data: materials } = await axios.get(
      "http://localhost:3000/api/material/view"
    );
    return {
      props: {
        materials,
      },
    };
  } catch (error) {
    console.log(error);
  }
};*/}
