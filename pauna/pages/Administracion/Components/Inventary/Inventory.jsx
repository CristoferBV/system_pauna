"use client";

import axios from "axios";
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Row, Col, Container, Button, Form, Table, Modal, Alert } from "react-bootstrap"
import { FaEdit, FaTrash } from "react-icons/fa";



export default function Inventary({ materials, colors, brands, ubications, types }) {
  const router = useRouter();
  console.log({ materials })
  const [showAlert, setShowAlert] = useState(false);
  const [showFormState, setShowFormState] = useState({
    material: false,
    colors: false,
    types: false,
    ubi: false,
    brand: false,
    edit: false
  });

 

  const handleSubmit = async (data) => {
    console.log("hola");
    const res = await axios
      .post("/api/material/view", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(res)
  };

  const handleUpdate = async (data) => {
    console.log("hola");
    const res = await axios
      .put("/api/material/view", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(res)
    reloadPage();
  };

  const handleDeleteMaterial = async (materialID) => {
    const res = await axios
      .delete("/api/material/view", { data: { tipo: "Material", ML_identificador: materialID } })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(res)
    reloadPage();
  };

  const [material, setMaterial] = useState({
    ML_identificador: "",
    ML_descripcion: "",
    ML_observacion: "",
    ML_cantidad: "",
  })

  const [color, setColor] = useState({
    tipo: "Color",
    CR_identificador: "",
    CR_nombre: ""
  });
  const [brand, setBrand] = useState({
    tipo: "Brand",
    MC_identificador: "",
    MC_nombre: "",
    MC_descripcion: ""
  });
  const [ubication, setUbication] = useState({
    tipo: "Ubication",
    UN_identificador: "",
    UN_lugar: "",
    UN_descripcion: ""
  });
  const [type, setTypes] = useState({
    tipo: "Type",
    TP_identificador: "",
    TP_nombre: "",
    TP_descripcion: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    if (name in color) {
      setColor({ ...color, [name]: value });
    } else if (name in brand) {
      setBrand({ ...brand, [name]: value });
    } else if (name in ubication) {
      setUbication({ ...ubication, [name]: value });
    } else if (name in type) {
      setTypes({ ...type, [name]: value });
    } else if (name in material) {
      setMaterial({ ...material, [name]: value });
    }
  };

  const handleToggleForm = (key) => {
    setShowFormState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleCloseForm = (key) => {
    handleToggleForm(key);
  };

  const handleSave = (object) => {
    handleSubmit(object)
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    reloadPage();
  };
  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const [filterValue, setFilterValue] = useState('');
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };
  const filteredMaterials = materials.filter((material) => {
    const description = material.ML_descripcion.toLowerCase();
    const name = material.MC_nombre.toLowerCase();
    const id = material.ML_identificador;
    const filterValueLowerCase = filterValue.toLowerCase();

    return description.includes(filterValueLowerCase) || name.includes(filterValueLowerCase) || id == filterValue;
  });

  const handleEditMaterial = (material) => {
    setMaterial(material);
    handleToggleForm('edit')

  };

  const reloadPage = () => {
    router.push("/Administracion/Components/Inventary/Inventory");
  }

  return (
    <>
      <Modal show={showFormState.material} onHide={() => handleCloseForm('material')}>
        <Modal.Header closeButton>
          <Modal.Title>Materiales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Codigo</Form.Label>
              <Form.Control name="ML_identificador" value={material.ML_identificador} onChange={handleChange} type="text" placeholder="Ingrese su codigo" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="ML_descripcion" value={material.ML_descripcion} onChange={handleChange} type="text" placeholder="Ingrese el nombre" />
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
              <Form.Control name="ML_cantidad" value={material.ML_cantidad} onChange={handleChange} type="text" placeholder="Ingrese la cantidad" />
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
              <Form.Control name="ML_observacion" value={material.ML_observacion} onChange={handleChange} as="textarea" placeholder="Ingrese sus observaciones" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('material')}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => handleSave({
            tipo: "Material",
            ML_identificador: material.ML_identificador,
            ML_descripcion: material.ML_descripcion,
            ML_observacion: material.ML_observacion,
            ML_cantidad: material.ML_cantidad,
            MC_identificador: brand.MC_identificador,
            MO_identificador_tipo: type.TP_identificador,
            CR_identificador: color.CR_identificador,
            ML_identificador_ubicacion: ubication.UN_identificador,

          })}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFormState.colors} onHide={() => handleCloseForm('colors')}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir colores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="CR_nombre" value={color.CR_nombre} onChange={handleChange} type="text" placeholder="Ingrese el color" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('colors')}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary" onClick={() => handleSave(color)}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFormState.types} onHide={() => handleCloseForm('types')}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir tipo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="TP_nombre" value={type.TP_nombre} onChange={handleChange} type="text" placeholder="Ingrese el nombre" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Descripción</Form.Label>
              <Form.Control name="TP_descripcion" value={type.TP_descripcion} onChange={handleChange} type="text" placeholder="Ingrese la descripción si desea" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('types')}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary" onClick={() => handleSave(type)}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showFormState.ubi} onHide={() => handleCloseForm('ubi')}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir ubicacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="UN_lugar" value={ubication.UN_lugar} onChange={handleChange} type="text" placeholder="Ingrese el nombre de la ubicación" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Descripción</Form.Label>
              <Form.Control name="UN_descripcion" value={ubication.UN_descripcion} onChange={handleChange} type="text" placeholder="Ingrese la descripción si desea" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('ubi')}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => handleSave(ubication)}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showFormState.brand} onHide={() => handleCloseForm('brand')}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir nueva marca</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="MC_nombre" value={brand.MC_nombre} onChange={handleChange} type="text" placeholder="Ingrese el nombre de la marca" />
            </Form.Group>.
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Descripción</Form.Label>
              <Form.Control name="MC_descripcion" value={brand.MC_descripcion} onChange={handleChange} type="text" placeholder="Ingrese la descripción si desea" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('brand')}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => handleSave(brand)}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFormState.edit} onHide={() => handleCloseForm('edit')}>
        <Modal.Header closeButton>
          <Modal.Title>Editar cantidades</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Codigo</Form.Label>
              <Form.Control disabled={true} name="ML_identificador" value={material.ML_identificador} onChange={handleChange} type="text" placeholder="Ingrese el color" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control disabled={true} name="ML_descripcion" value={material.ML_descripcion} onChange={handleChange} type="text" placeholder="Ingrese el color" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control name="ML_cantidad" value={material.ML_cantidad} onChange={handleChange} type="text" placeholder="Ingrese la cantidad" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Observaciones</Form.Label>
              <Form.Control name="ML_observacion" value={material.ML_observacion} onChange={handleChange} as="textarea" placeholder="Ingrese la nueva observacion observaciones" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('edit')}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary" onClick={() => handleUpdate(material)}>
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
              <Form.Control type="text" placeholder="Buscar..." value={filterValue}
                onChange={handleFilterChange} style={{
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
                      {filteredMaterials.map((material) => (
                        <tr key={material.ML_identificador}>
                          <td>{material.ML_identificador}</td>
                          <td>{material.ML_descripcion}</td>
                          <td>{material.MC_nombre}</td>
                          <td>{material.ML_cantidad}</td>
                          <td>{material.ML_observacion}</td>
                          <td>
                            <Container>
                              <Row>
                                <Col>
                                  <Button variant="warning" onClick={() => handleEditMaterial(material)}>
                                    <FaEdit></FaEdit>
                                  </Button>
                                </Col>
                                <Col>
                                  <Button variant="danger" onClick={() => handleDeleteMaterial(material.ML_identificador)}>
                                    <FaTrash />
                                  </Button>
                                </Col>
                              </Row>
                            </Container>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </Table>
                </Container>
              </Col>
              <Col>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem' }}
                    onClick={() => handleToggleForm('material')}>
                    Añadir Material
                  </Button>
                </Row>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                    onClick={() => handleToggleForm('colors')}>
                    Añadir Colores
                  </Button>
                </Row>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                    onClick={() => handleToggleForm('types')}>
                    Añadir Tipo(bolsas, cajas, etc...)
                  </Button>
                </Row>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                    onClick={() => handleToggleForm('ubi')}>
                    Añadir ubicación
                  </Button>
                </Row>
                <Row>
                  <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                    onClick={() => handleToggleForm('brand')}>
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
    const { materials, colors, brands, ubications, types } = data;
    return {
      props: {
        materials,
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
