"use client";

import axios from "axios";
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Row, Col, Container, Button, Form, Table, Modal, Alert } from "react-bootstrap"
import { FaEdit, FaClipboardList } from "react-icons/fa";
import Swal from "sweetalert2";
import InactivityTimer from "../InactivityTime";

const initialState = {
  ML_identificador: "",
  ML_descripcion: "",
  ML_observacion: "",
  ML_cantidad: "",
};

const initialColorState = {
  tipo: "Color",
  CR_identificador: "",
  CR_nombre: ""
};

const initialBrandState = {
  tipo: "Brand",
  MC_identificador: "",
  MC_nombre: "",
  MC_descripcion: ""
};

const initialUbicationState = {
  tipo: "Ubication",
  UN_identificador: "",
  UN_lugar: "",
  UN_descripcion: ""
};

const initialTypeState = {
  tipo: "Type",
  TP_identificador: "",
  TP_nombre: "",
  TP_descripcion: ""
};

const initialDeparmentState = {
  tipo: "Deparment",
  DO_identificador: "",
  DO_nombre: "",
};



export default function Inventary({ materials, colors, brands, ubications, types, deparments}) {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [showFormState, setShowFormState] = useState({
    material: false,
    colors: false,
    types: false,
    ubi: false,
    brand: false,
    edit: false,
    moreMaterial: false
  });



  const handleSubmit = async (data) => {
    const res = await axios
      .post("/api/material/view", data)
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Ingreso",
          text: "Datos ingresados correctamente",
        });
      })
      .catch(function (error) {
        if(error.response.status == 400){
          Swal.fire({
            icon: "warning",
            title: "Atención",
            text: "Existen campos incompletos",
          });
          return;
        }
        if(error.response.status == 409){
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.response.data,
          });
        }
      });
    reloadPage();
  };
  const [updatedMLCantidad, setUpdatedMLCantidad] = useState("");
  const handleMLCantidadChange = (event) => {
    setUpdatedMLCantidad(event.target.value);
  };
  const handleUpdate = async (data,name) => {
    const isEmpty = Object.values(data).some(value => value === "");
    if (isEmpty) {
      Swal.fire({
        icon: "warning",
        title: "Atención",
        text: "Existen campos incompletos",
      });
      return;
    }
    const res = await axios
      .put("/api/material/view", data)
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Ingreso",
          text: "Datos actualizados correctamente",
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data,
        });
      });
    handleCloseForm(name);
    reloadPage();
  };


  const [material, setMaterial] = useState(initialState);
  const [color, setColor] = useState(initialColorState);
  const [brand, setBrand] = useState(initialBrandState);
  const [ubication, setUbication] = useState(initialUbicationState);
  const [type, setTypes] = useState(initialTypeState);
  const [deparment, setDepartments] = useState(initialDeparmentState);

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
      setMaterial(prevState => ({
        ...prevState,
        [name]: value || ""
    }));
    } else if (name in deparment) {
        setDepartments({ ...deparment, [name]: value });
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

  const handleSave = (object, name) => {  
    //const isEmpty = Object.values(object).some(value => value === "");
    /*if (isEmpty) {
      Swal.fire({
        icon: "warning",
        title: "Atención",
        text: "Existen campos incompletos",
      });
      return;
    }*/
    handleSubmit(object);
    handleCloseForm(name);
    reloadPage();
  };
  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const [filterValue, setFilterValue] = useState('');
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };
  const filteredMaterials = materials && materials.filter((material) => {
    const description = material.ML_descripcion.toLowerCase();
    const name = material.MC_nombre.toLowerCase();
    const id = material.ML_identificador;
    const location = material.UN_lugar.toLowerCase();
    const type = material.TP_nombre.toLowerCase();
    const filterValueLowerCase = filterValue.toLowerCase();
    const cant = material.ML_cantidad;

    return description.includes(filterValueLowerCase) || name.includes(filterValueLowerCase) || id.includes(filterValue) || id == filterValue || location.includes(filterValueLowerCase)
    || type.includes(filterValueLowerCase) || cant == filterValue;
  });

  const handleEditMaterial = (material) => {
    setMaterial(material);
    handleToggleForm('edit')
  };

  const handleAddMoreMaterial = (material) => {
    setMaterial(material);
    handleToggleForm('moreMaterial')
  };

  const reloadPage = () => {
    setMaterial(initialState);
    setColor(initialColorState);
    setBrand(initialBrandState);
    setUbication(initialUbicationState);
    setTypes(initialTypeState);
    setDepartments(initialDeparmentState);
    router.push("/Administracion/Components/Inventary/Inventory");
  }
  const handleLogout = () => {
    router.push("/LoginAndRegister/Login/Login");
  };

  return (
    <>
    <InactivityTimer logoutFunction={handleLogout} />
      <Modal show={showFormState.material} onHide={() => handleCloseForm('material')}>
        <Modal.Header closeButton>
          <Modal.Title>Materiales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group controlId="formCodeMaterial">
              <Form.Label>Codigo</Form.Label>
              <Form.Control name="ML_identificador" value={material.ML_identificador} onChange={handleChange} type="text" placeholder="Ingrese su codigo" />
            </Form.Group>
            <Form.Group controlId="formNameMaterial">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="ML_descripcion" value={material.ML_descripcion} onChange={handleChange} type="text" placeholder="Ingrese el nombre" />
            </Form.Group>
            <Form.Group controlId="formBrandMaterial">
              <Form.Label>Marca</Form.Label>
              <Form.Select name="MC_identificador" value={parseInt(brand.MC_identificador)} onChange={handleChange}>
                {brands && brands.map((brand) => (
                  <option key={brand.MC_identificador} value={brand.MC_identificador}>{brand.MC_nombre}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formTypeMaterial">
              <Form.Label>Tipo</Form.Label>
              <Form.Select name="TP_identificador" value={parseInt(type.TP_identificador)} onChange={handleChange}>
                {types && types.map((type) => (
                  <option key={type.TP_identificador} value={type.TP_identificador}>{type.TP_nombre}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formCantMaterial">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control name="ML_cantidad" value={material.ML_cantidad} onChange={handleChange} type="text" placeholder="Ingrese la cantidad" />
            </Form.Group>
            <Form.Group controlId="formColorMaterial">
              <Form.Label>Color</Form.Label>
              <Form.Select name="CR_identificador" value={color.CR_identificador} onChange={handleChange}>
                {colors && colors.map((color) => (
                  <option key={color.CR_identificador} value={color.CR_identificador}>{color.CR_nombre}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formUbiMaterial">
              <Form.Label>Ubicacion</Form.Label>
              <Form.Select name="UN_identificador" value={parseInt(ubication.UN_identificador)} onChange={handleChange}>
                {ubications && ubications.map((ubication) => (
                  <option key={ubication.UN_identificador} value={ubication.UN_identificador}>{ubication.UN_lugar}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formObsMaterial">
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

          },'material')}>
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
            <Form.Group controlId="formNameColor">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="CR_nombre" value={color.CR_nombre} onChange={handleChange} type="text" placeholder="Ingrese el color"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('colors')}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary" onClick={() => handleSave(color,'colors')}>
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
            <Form.Group controlId="formNameType">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="TP_nombre" value={type.TP_nombre} onChange={handleChange} type="text" placeholder="Ingrese el nombre" />
            </Form.Group>
            <Form.Group controlId="formDescType">
              <Form.Label>Descripción</Form.Label>
              <Form.Control name="TP_descripcion" value={type.TP_descripcion} onChange={handleChange} type="text" placeholder="Ingrese la descripción si desea" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('types')}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary" onClick={() => handleSave(type,"types")}>
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
            <Form.Group controlId="formNameUbi">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="UN_lugar" value={ubication.UN_lugar} onChange={handleChange} type="text" placeholder="Ingrese el nombre de la ubicación" />
            </Form.Group>
            <Form.Group controlId="formDescUbi">
              <Form.Label>Descripción</Form.Label>
              <Form.Control name="UN_descripcion" value={ubication.UN_descripcion} onChange={handleChange} type="text" placeholder="Ingrese la descripción si desea" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('ubi')}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => handleSave(ubication,'ubi')}>
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
            <Form.Group controlId="formNameBrand">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="MC_nombre" value={brand.MC_nombre} onChange={handleChange} type="text" placeholder="Ingrese el nombre de la marca" />
            </Form.Group>.
            <Form.Group controlId="formDescBrand">
              <Form.Label>Descripción</Form.Label>
              <Form.Control name="MC_descripcion" value={brand.MC_descripcion} onChange={handleChange} type="text" placeholder="Ingrese la descripción si desea" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('brand')}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => handleSave(brand,'brand')}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFormState.edit} onHide={() => handleCloseForm('edit')}>
        <Modal.Header closeButton>
          <Modal.Title>Materiales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCodeMaterialEntr">
              <Form.Label>Codigo</Form.Label>
              <Form.Control disabled={true} name="ML_identificador" value={material.ML_identificador} onChange={handleChange} type="text" placeholder="Ingrese el color" />
            </Form.Group>
            <Form.Group controlId="formNameMaterialEntr">
              <Form.Label>Nombre</Form.Label>
              <Form.Control disabled={true} name="ML_descripcion" value={material.ML_descripcion} onChange={handleChange} type="text" placeholder="Ingrese el color" />
            </Form.Group>
            
            <Form.Group controlId="formCantMaterialEntr">
              <Form.Label>Cantidad entregada</Form.Label>
              <Form.Control name="ML_cantidad" onChange={handleChange} type="text" placeholder="Ingrese la cantidad" />
            </Form.Group>
            <Form.Group controlId="formDepMaterialEntr">
            <Form.Label>Departamento</Form.Label>
              <Form.Select name="DO_identificador" value={parseInt(deparment.DO_identificador)} onChange={handleChange}>
              <option>Elija un departamento</option>
                {deparments && deparments.map((deparment) => (
                  <option key={deparment.DO_identificador} value={deparment.DO_identificador}>{deparment.DO_nombre}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('edit')}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary" onClick={() => handleSave({
            tipo: "Rebajo",
            MO_fecha:formattedDate,
            MO_cantidad: material.ML_cantidad,
            ML_identificador: material.ML_identificador,
            DO_identificador: deparment.DO_identificador
          },'edit')}disabled={!material.ML_cantidad || material.ML_cantidad <= 0}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showFormState.colors} onHide={() => handleCloseForm('colors')}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir colores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNameColors">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="CR_nombre" value={color.CR_nombre} onChange={handleChange} type="text" placeholder="Ingrese el color" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('colors')}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary" onClick={() => handleSave(color,'colors')}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFormState.moreMaterial} onHide={() => handleCloseForm('moreMaterial')}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar material</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="formCodeMaterialUpd">
              <Form.Label>Codigo</Form.Label>
              <Form.Control disabled={true} name="ML_identificador" value={material.ML_identificador} onChange={handleChange} type="text" placeholder="Ingrese el nombre" />
            </Form.Group>
            <Form.Group controlId="formNameMaterialUpd">
              <Form.Label>Nombre</Form.Label>
              <Form.Control disabled={true} name="ML_descripcion" value={material.ML_descripcion} onChange={handleChange} type="text" placeholder={material.ML_descripcion} />
            </Form.Group>
            <Form.Group controlId="formCantMaterialUpd">
              <Form.Label>Cantidad a ingresar</Form.Label>
              <Form.Control name="ML_cantidad" onChange={handleMLCantidadChange} type="text" placeholder="Ingrese la descripción si desea" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm('moreMaterial')}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary" onClick={() => handleUpdate({
            ML_identificador: material.ML_identificador,
            ML_cantidad: updatedMLCantidad
          },'moreMaterial')} disabled={!material.ML_cantidad || material.ML_cantidad <= 0}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>


      <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
        ¡Guardado con éxito!
      </Alert>

      <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
        ¡Ha ingresado la cantidad con éxito!
      </Alert>

      <div style={{ marginTop: '8rem', marginBottom: '8rem' }}>
        
        <Container className="rounded" style={{ backgroundColor: '#212529' }}>
          <Container>
            <Form style={{ fontSize: '1.1rem', padding: '1.1rem', maxWidth: '300px' }}>
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
                        <th>Tipo</th>
                        <th>Ubicación</th>
                        <th>Observaciones</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMaterials && filteredMaterials.map((material) => (
                        <tr key={material.ML_identificador}>
                          <td>{material.ML_identificador}</td>
                          <td>{material.ML_descripcion}</td>
                          <td>{material.MC_nombre}</td>
                          <td>{material.ML_cantidad}</td>
                          <td>{material.TP_nombre}</td>
                          <td>{material.UN_lugar}</td>
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
                                  <Button variant="light" onClick={() => handleAddMoreMaterial(material)}>
                                    <FaClipboardList></FaClipboardList>
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
      process.env.LINK+"/api/material/view"
    );
    const { materials, colors, brands, ubications, types, deparments} = data;
    return {
      props: {
        materials,
        colors,
        brands,
        ubications,
        types,
        deparments,
      },
    };
  } catch (error) {
    console.error("Error fetching data:");
    return {
      props: {
        materials: [],
        colors: [],
        brands: [],
        ubications: [],
        types: [],
        deparments: [],
      },
    };
  }
}
