import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table,Card,FormControl,InputGroup,Button,Modal,Form} from "react-bootstrap";
import Swal from "sweetalert2";

export default function Administradores({ Administrador }) {
  const [searchText, setSearchText] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedAdministrador, setSelectedAdministrador] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [administradorState, setAdministradorState] = useState([]);
  const [roles, setRoles] = useState([]);
  
  const [editedValues, setEditedValues] = useState({
    UO_identificador_correo: '',
    UO_primer_nombre: '',
    UO_primer_apellido: '',
    UO_segundo_apellido: '',
    UO_identificador: '',
    CE_correoElectronico: '',
    UO_contrasena: '',
    RL_identificador: '',
  });
  

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('/api/config/BibliotecaAdministradores');
        setRoles(response.data.Roles);
      } catch (error) {
        console.error('Hubo un error al obtener los roles:', error);
      }
    };
  
    fetchRoles();
  }, []);
  


  let filteredAdministrador = [];
if (Array.isArray(Administrador.Admins)) {
  filteredAdministrador = Administrador.Admins.filter((admin) => {
    return (
      (admin.UO_primer_nombre || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (admin.UO_primer_apellido || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (admin.UO_segundo_apellido || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (admin.UO_identificador || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (admin.CE_correoElectronico || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (admin.RL_nombre || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (admin.RL_descripcion || "")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  });
} else {
  console.error(
    "Administrador.Admins no es un array:",
    Administrador.Admins
  );
}

const handleDeleteAdministrador = async (admin) => {
    console.log("Datos de administrador:", admin);
    console.log("UO_identificador:", admin.UO_identificador);
    console.log("UO_identificador_correo:", admin.CE_correoElectronico);

    try {
      if (!admin.UO_identificador || !admin.CE_correoElectronico) {
        console.error('Faltan datos necesarios para la eliminación');
        return;
      }
  
      // Enviar solicitud para eliminar el administrador seleccionado
      await axios.delete("/api/config/BibliotecaAdministradores", {
        data: {
          UO_identificador: admin.UO_identificador,
          UO_identificador_correo: admin.CE_correoElectronico
        }
      });
  
      // Mostrar alerta de SweetAlert2 si el usuario se elimina correctamente
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Usuario eliminado correctamente'
      }).then(() => {
        // Recargar la página para reflejar los cambios
        window.location.reload();
      });
  
    } catch (error) {
      // Manejar errores
      console.error("Error al eliminar el administrador:", error);
      // Mostrar alerta de SweetAlert2 para errores
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al eliminar el usuario. Por favor, intenta de nuevo.'
      });
    }
  };
  
  const updateAdministrador = async (updateAdministrador) => {
    try {
      // Realiza una solicitud HTTP (por ejemplo, con Axios) para actualizar el estudiante en el servidor
      await axios.put(
        "/api/config/BibliotecaAdminiatradores",
        updateAdministrador
      );
      // Lógica adicional, como actualizar el estado local con los nuevos datos si es necesario
    } catch (error) {
      console.error("Error al actualizar el estudiante:", error);
    }
  };

  const createAdministrador = async (newAdministrador) => {
    try {
      // Validar campos en blanco
      if (Object.values(newAdministrador).some(value => !value.trim())) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No puedes crear un usuario con espacios en blanco'
        });
        return; // Detener la ejecución si hay campos en blanco
      }
  
      // Enviar solicitud para crear el administrador
      await axios.post("/api/config/BibliotecaAdministradores", newAdministrador);
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Usuario creado correctamente'
      }).then(() => {
        // Recargar la página para mostrar los cambios
        window.location.reload();
      });
  
      setShowCreateForm(false);
    } catch (error) {
      console.error("Error al crear el estudiante:", error);
      // Mostrar alerta de SweetAlert2 para errores
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al crear el usuario. Por favor, intenta de nuevo.'
      });
    }
  };
  

  // Función para abrir el formulario de edición
  const handleEditAdministrador = (admin) => {
    setSelectedAdministrador(admin);
    setEditedValues({ ...admin });
    setShowEditForm(true);
  };

  // Función para guardar cambios en la edición del administrador
  const handleSaveEditEstudiante = () => {
    // Lógica para guardar los cambios del administrador (usar 'updateAdministrador' aquí)
    updateAdministrador(editedValues);
    setShowEditForm(false);
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

  const handleCreateAdministrador = () => {
    setShowCreateForm(true);
    setEditedValues({});
    setSelectedAdministrador(null);
  };

  return (
    <div className="p-8">
      <Card style={{ backgroundColor: "#DEEFE7", color: "white" }} text="white">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span className="text-[#293659] font-semibold">
              Lista de Administradores
            </span>
            <div>
              <Button
                variant="success"
                onClick={handleCreateAdministrador}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                }}
              >
                Crear Administrador
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Buscar estudiante..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className="text-center" style={{ color: "#293659" }}>
                  Nombre
                </th>
                <th className="text-center" style={{ color: "#293659" }}>
                  Primer Apellido
                </th>
                <th className="text-center" style={{ color: "#293659" }}>
                  Segundo Apellido
                </th>
                <th className="text-center" style={{ color: "#293659" }}>
                  Cédula
                </th>
                <th className="text-center" style={{ color: "#293659" }}>
                  Correo
                </th>
                <th className="text-center" style={{ color: "#293659" }}>
                  Tipo de Rol
                </th>
                <th className="text-center" style={{ color: "#293659" }}>
                  Descripción Rol
                </th>
                <th className="text-center" style={{ color: "#293659" }}>
                  Administrar
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAdministrador.map((admin, index) => (
                <tr key={`${admin.EE_idenficador}_${index}`}>
                  <td className="text-center">{admin.UO_primer_nombre}</td>
                  <td className="text-center">{admin.UO_primer_apellido}</td>
                  <td className="text-center">{admin.UO_segundo_apellido}</td>
                  <td className="text-center">{admin.UO_identificador}</td>
                  <td className="text-center">{admin.CE_correoElectronico}</td>
                  <td className="text-center">{admin.RL_nombre}</td>
                  <td className="text-center">{admin.RL_descripcion}</td>
                  <td className="text-center">
                    <Button
                      variant="primary"
                      onClick={() => handleDeleteAdministrador(admin)}
                      style={buttonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor =
                          buttonHoverStyle.backgroundColor;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor =
                          buttonStyle.backgroundColor;
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      className="ml-2"
                      variant="danger"
                      onClick={() => handleDeleteAdministrador(admin)}
                      style={buttonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor =
                          buttonHoverStyle.backgroundColor;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor =
                          buttonStyle.backgroundColor;
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

      <Modal show={showCreateForm} onHide={() => setShowCreateForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Administrador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={editedValues.UO_primer_nombre || ''}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    UO_primer_nombre: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Primer Apellido</Form.Label>
              <Form.Control
                type="text"
                value={editedValues.UO_primer_apellido || ''}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    UO_primer_apellido: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control
                type="text"
                value={editedValues.UO_segundo_apellido || ''}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    UO_segundo_apellido: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cédula</Form.Label>
              <Form.Control
                type="text"
                value={editedValues.UO_identificador || ''}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    UO_identificador: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="text"
                value={editedValues.CE_correoElectronico || ''}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    CE_correoElectronico: e.target.value,
                    UO_identificador_correo: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="text"
                value={editedValues.UO_contrasena || ''}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    UO_contrasena: e.target.value,
                  })
                }
              />
            </Form.Group>
        <Form.Group>
            <Form.Label>Tipo de Rol</Form.Label>
            <Form.Control
                as="select"
                value={editedValues.RL_identificador || ''}
                onChange={(e) =>
                setEditedValues({
                    ...editedValues,
                    RL_identificador: e.target.value,
                })
                }
            >
                <option value="">-Seleccionar-</option>
                {Array.isArray(roles) && roles.map((rol) => (
                <option
                    key={rol.RL_identificador}
                    value={rol.RL_identificador}
                >
                    Roles:{" "}
                    {`${rol.RL_nombre} - Descripción: ${rol.RL_descripcion}`}
                </option>
                ))}
            </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setShowEditForm(false)}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Cerrar
          </Button>
          <Button
            onClick={() => createAdministrador(editedValues)}
            style={buttonStyle}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
            >
            Guardar
         </Button>

        </Modal.Footer>
      </Modal>

      {/* <Modal show={showEditForm} onHide={() => setShowEditForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del estudiante"
                value={editedValues.UO_primer_nombre}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    UO_primer_nombre: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cédula</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cédula del estudiante"
                value={editedValues.UO_identificador}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    UO_identificador: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nivel</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nivel del estudiante"
                value={editedValues.EE_nivel}
                onChange={(e) =>
                  setEditedValues({ ...editedValues, EE_nivel: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Otro Campus</Form.Label>
              <Form.Control
                type="text"
                placeholder="Campus"
                value={editedValues.EE_campus}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    EE_campus: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="text"
                placeholder="Correo Electrónico del estudiante"
                value={editedValues["CE-correoElectronico"]}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    ["CE-correoElectronico"]: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Teléfono del estudiante"
                value={editedValues["TO-numero"]}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    ["TO-numero"]: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setShowEditForm(false)}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Cerrar
          </Button>
          <Button
            onClick={handleSaveEditEstudiante}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { data: Administrador } = await axios.get(
      process.env.LINK + "/api/config/BibliotecaAdministradores"
    );
    return {
      props: {
        Administrador,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        Administrador: [],
      },
    };
  }
};
