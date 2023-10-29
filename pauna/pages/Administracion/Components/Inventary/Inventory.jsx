"use client";
import Buttons from "./InvButtons";
import Link from "next/link";
import axios from "axios";
import React, { useState } from 'react';
import { Row, Col, Container, Button, Form, Table, Modal, Alert } from "react-bootstrap"

export default function Inventary({ colors, brands, ubications, types }) {
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [color, setColor] = useState({
    CR_identificador: "",
    CR_nombre: ""
  });
  const [brand, setBrand] = useState({
    MC_identificador: "",
    MC_nombre: ""
  });
  const [ubication, setUbication] = useState({
    UN_identificador: "",
    UN_lugar: ""
  });
  const [type, setTypes] = useState({
    TP_identificador: "",
    TP_nombre: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    if (name in color) {
      setColor({ ...color, [name]: value });
    } else if (name in brand) {
      setBrand({ ...brand, [name]: value });
    } else if (name in ubication) {
      setUbication({ ...ubication, [name]: value });
    } else if (name in type){
      setTypes({ ...type, [name]: value });
    }
  };

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
              <Form.Select name="MC_identificador" value={parseInt(brand.MC_identificador)} onChange={handleChange}>
                {brands.map((brand) => (
                  <option key={brand.MC_identificador} value={brand.MC_identificador}>{brand.MC_nombre}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Tipo</Form.Label>
              <Form.Select name="TP_identificador" value={parseInt(type.TP_identificador)} onChange={handleChange}>
                {types.map((type) => (
                  <option key={type.TP_identificador} value={type.TP_identificador}>{type.TP_nombre}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control type="email" placeholder="Ingrese la cantidad" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Color</Form.Label>
              <Form.Select name="CR_identificador" value={color.CR_identificador} onChange={handleChange}>
                {colors.map((color) => (
                  <option key={color.CR_identificador} value={color.CR_identificador}>{color.CR_nombre}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ubicacion</Form.Label>
              <Form.Select name="UN_identificador" value={parseInt(ubication.UN_identificador)} onChange={handleChange}>
                {ubications.map((ubication) => (
                  <option key={ubication.UN_identificador} value={ubication.UN_identificador}>{ubication.UN_lugar}</option>
                ))}
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
            <Row>
              <Col xs={12} md={8}>
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
              </Col>
              <Col>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem' }}
                    onClick={handleShowForm}>
                    Añadir Material
                  </Button>
                </Row>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                  >
                    Añadir Colores
                  </Button>
                </Row>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                  >
                    Añadir Tipo(bolsas, cajas, etc...)
                  </Button>
                </Row>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                  >
                    Añadir ubicación
                  </Button>
                </Row>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                  >
                    Añadir Marca
                  </Button>
                </Row>
              </Col>
            </Row>



          </Container>
        </Container>
      </div >
    </>
  )
}
export const getServerSideProps = async (context) => {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/material/view"
    );
    const { colors, brands, ubications, types } = data;
    return {
      props: {
        colors,
        brands,
        ubications,
        types
      },
    };
  } catch (error) {
    console.log(error);
  }
}
