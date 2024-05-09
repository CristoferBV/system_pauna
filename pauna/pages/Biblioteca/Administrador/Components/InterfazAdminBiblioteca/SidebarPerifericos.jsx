import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Importar SweetAlert2
import { Card, Table, Button, Form, Modal, Alert } from "react-bootstrap";
import { useRouter } from "next/router";

export default function SidebarPerifericos({ Perifericos }) {
  const [searchText, setSearchText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCita, setNewCita] = useState({});
  const [editedCita, setEditedCita] = useState({});
  const [alertVisible, setAlertVisible] = useState(false);
  const router = useRouter();

  const handleEdit = (Perifericos) => {
    setEditedCita({
      EA_identificador: Perifericos.EA_identificador,
      EA_nombre: Perifericos.EA_nombre,
      EA_descripcion: Perifericos.EA_descripcion,
    });
    setEditMode(true);
  };

  const saveChanges = async () => {
    console.log("EA_identificador:", editedCita.EA_identificador);
    try {
      const { EA_identificador, EA_nombre, EA_descripcion } = editedCita;
      const res = await axios.put("/api/config/BibliotecaPerifericos", {
        EA_identificador,
        EA_nombre,
        EA_descripcion,
      });
      console.log(res);
      if (res.status === 200) {
        console.log("Los cambios se guardaron correctamente.");
        showAlert("Datos editados correctamente"); // Mostrar la alerta de éxito
        reloadPage();
      } else {
        console.log("Hubo un error al guardar los cambios.");
      }
    } catch (error) {
      console.log("Hubo un error al guardar los cambios:", error);
    }
  };

  const createCita = () => {
    setShowCreateForm(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  const showAlert = (message) => {
    Swal.fire({
      title: "Éxito",
      text: message,
      icon: "success",
      timer: 3000, // Cerrar automáticamente después de 3 segundos
      timerProgressBar: true,
    });
  };


  const filteredPeriferico =
    Perifericos.Perifericos && Array.isArray(Perifericos.Perifericos)
      ? Perifericos.Perifericos.filter((periferico) => {
          return (
            periferico.EA_identificador.toLowerCase().includes(
              searchText.toLowerCase()
            ) ||
            periferico.EA_nombre.toLowerCase().includes(
              searchText.toLowerCase()
            ) ||
            periferico.EA_descripcion.toLowerCase().includes(
              searchText.toLowerCase()
            )
          );
        })
      : [];

  const [periferico, setPeriferico] = useState({
    EA_identificador: "",
    EA_nombre: "",
    EA_descripcion: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    if (name in periferico) {
      setPeriferico({ ...periferico, [name]: value });
    }
  };

  const handleSubmit = async (data) => {
    try {
      const res = await axios.post("/api/config/BibliotecaPerifericos", data);
      console.log(res);
      if (res.status === 200) {
        console.log("El periférico se añadió correctamente.");
        showAlert("Periférico añadido correctamente"); // Mostrar la alerta de éxito
        reloadPage();
      }
    } catch (error) {
      console.error("Error al crear el periférico:", error);
    }
  };

  const handleSave = async (object) => {
    await handleSubmit(object);
    setShowCreateForm(true);
    reloadPage(); // Actualiza la lista de periféricos después de la creación
  };

  const reloadPage = () => {
    router.push(
      "/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarPerifericos"
    );
  };

  const handleDeletePeriferico = async (EA_identificador) => {
    try {
      const response = await axios.delete(
        `/api/config/BibliotecaPerifericos?EA_identificador=${EA_identificador}`
      );
      console.log(response);
      // Mostrar una alerta de éxito utilizando SweetAlert2
      Swal.fire({
        icon: 'success',
        title: '¡Periférico eliminado correctamente!',
        showConfirmButton: false,
        timer: 2000 // La alerta se cierra automáticamente después de 2 segundos
      });
    } catch (error) {
      console.error("Error al eliminar el periférico:", error);
      throw error; // Permitir que el control fluya fuera de la función
    }
    reloadPage();
  };

  const buttonStyle = {
    backgroundColor: "#233C5B",
    color: "white",
    border: "none", // Agregar un borde blanco
    transition: "background-color 0.3s, border 0.3s", // También añadir la transición para el borde
  };

  const buttonHoverStyle = {
    backgroundColor: "#152C4A", // Nuevo color de fondo al pasar el cursor
    color: "black", // Texto de color oscuro
    border: "1px solid white",
  };


  return (
    <div className="flex-1 p-8">
      <Card style={{ backgroundColor: "#DEEFE7", color: "white" }} text="white">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span className="text-[#293659] font-semibold">Perifericos</span>
            <Button variant="success" onClick={createCita} style={buttonStyle}onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                }}>
              Nuevo Periferico
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Buscar Periferico..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
          <Table
            striped
            bordered
            hover
            responsive>
            <thead>
              <tr>
                <th className="text-center" style={{ color: "#293659" }}>Codigo ID</th>
                <th className="text-center" style={{ color: "#293659" }}>Nombre</th>
                <th className="text-center" style={{ color: "#293659" }}>Descripción</th>
                <th className="text-center" style={{ color: "#293659" }}>Administrar</th>
              </tr>
            </thead>
            <tbody>
              {filteredPeriferico.map((periferico) => (
                <tr key={periferico.EA_identificador}>
                  <td className="text-center" >{periferico.EA_identificador}</td>
                  <td className="text-center">{periferico.EA_nombre}</td>
                  <td className="text-center">{periferico.EA_descripcion}</td>
                  <td className="text-center">
                    <Button
                      variant="light"
                      className="ml-2"
                      onClick={() => handleEdit(periferico)}
                      style={buttonStyle}onMouseEnter={(e) => {
                        e.target.style.backgroundColor =
                          buttonHoverStyle.backgroundColor;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = buttonStyle.backgroundColor;
                      }}
                    >
                      Editar
                    </Button>

                    <Button
                      variant="light"
                      className="ml-2"
                      onClick={() => {
                        console.log(
                          "EA_identificador:",
                          periferico.EA_identificador
                        );
                        handleDeletePeriferico(periferico.EA_identificador);
                      }}
                      style={buttonStyle}onMouseEnter={(e) => {
                        e.target.style.backgroundColor =
                          buttonHoverStyle.backgroundColor;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = buttonStyle.backgroundColor;
                      }}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Ventana modal para edición */}
      <Modal show={editMode} onHide={() => setEditMode(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Periferico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                value={editedCita.EA_identificador}
                onChange={(e) =>
                  setEditedCita({
                    ...editedCita,
                    EA_identificador: e.target.value,
                  })
                }
                disabled // Agrega el atributo disabled aquí
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={editedCita.EA_nombre}
                onChange={(e) =>
                  setEditedCita({ ...editedCita, EA_nombre: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={editedCita.EA_descripcion}
                onChange={(e) =>
                  setEditedCita({
                    ...editedCita,
                    EA_descripcion: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setEditMode(false)}
            style={buttonStyle}onMouseEnter={(e) => {
              e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Cancelar
          </Button>
          <Button variant="primary" onClick={saveChanges} style={buttonStyle}onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                }}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Ventana modal para crear un nuevo periferico */}
      <Modal show={showCreateForm} onHide={() => setShowCreateForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Periferico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Campos para crear Perifericos */}
            <Form.Group>
              <Form.Label>Codigo ID</Form.Label>
              <Form.Control
                name="EA_identificador"
                value={periferico.EA_identificador}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="EA_nombre"
                value={periferico.EA_nombre}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                name="EA_descripcion"
                value={periferico.EA_descripcion}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowCreateForm(false)}
            style={buttonStyle} onMouseEnter={(e) => {
              e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              handleSave({
                tipo: "Periferico",
                EA_identificador: periferico.EA_identificador,
                EA_nombre: periferico.EA_nombre,
                EA_descripcion: periferico.EA_descripcion,
              })
            }
            style={buttonStyle}onMouseEnter={(e) => {
              e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Crear
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Alerta de confirmación para la creación de una nueva cita */}
      <Alert
        variant="success"
        show={alertVisible}
        onClose={handleAlertClose}
        dismissible
      >
        Cita creada exitosamente.
      </Alert>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { data: Perifericos } = await axios.get(
      process.env.LINK+"/api/config/BibliotecaPerifericos"
    );
    return {
      props: {
        Perifericos,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        Perifericos: [],
      },
    };
  }
};
