import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Modal,
  Form,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useRouter } from "next/router";

export default function Slidebar({ types }) {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [editedValues, setEditedValues] = useState({});
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showTipoForm, setShowTipoForm] = useState(false);
  const [editedDevice, setEditedDevice] = useState({});
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();
  const [throttle, setThrottle] = useState(false);

  // Agregar un objeto para almacenar la caché
  const cache = {};

  // Agregar un mecanismo de throttling en el lado del cliente
  let canMakeRequest = true;

  const loadDevices = async () => {
    try {
      // Verificar si está permitido hacer la solicitud
      if (!canMakeRequest) {
        console.log("Esperando para hacer la próxima solicitud...");
        return;
      }

      // Establecer la bandera de restricción
      canMakeRequest = false;

      const timestamp = new Date().getTime();
      const response = await axios.get(
        `http://localhost:3000/api/config/BibliotecaDispositivos?timestamp=${timestamp}`
      );
      const devices = response.data;

      setDispositivos(devices);

      // Restablecer la bandera después de cierto tiempo (ajusta según tus necesidades)
      setTimeout(() => {
        canMakeRequest = true;
      }, 1000); // tiempo en milisegundos
    } catch (error) {
      console.error("Error al cargar dispositivos:", error);
    }
  };

  useEffect(() => {
    loadDevices(); // Cargar dispositivos al inicio

    // Recargar dispositivos cada 5 segundos (ajusta según tus necesidades)
    const interval = setInterval(() => {
      loadDevices();
    }, 1000); // 5 segundos

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  const [Dispositivos, setDispositivos] = useState([]);

  const [activo, setActivo] = useState({
    AO_descripcion: "",
    AO_estado: "",
  });

  const [type, setType] = useState({
    tipo: "Type",
    TP_identificador: "",
    TP_nombre: "",
    TP_descripcion: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    if (name in activo) {
      setActivo({ ...activo, [name]: value });
    } else if (name in type) {
      setType({ ...type, [name]: value });
    }
  };

  const handleSubmit = async (data) => {
    console.log("hola");
    const res = await axios
      .post("/api/config/BibliotecaDispositivos", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(res);
  };

  const handleSave = (object) => {
    handleSubmit(object);
    setShowCreateForm(true);
    setTimeout(() => {
      setShowCreateForm(false);
    }, 2000);
    reloadPage();
  };

  const handleDeleteActivo = async (activoID) => {
    const res = await axios
      .delete("/api/config/BibliotecaDispositivos", {
        data: { AO_identificador: activoID },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(res);
    reloadPage();
  };

  const handleSaveTipo = (object) => {
    handleSubmit(object);
    setShowTipoForm(true);
    setTimeout(() => {
      setShowTipoForm(false);
    }, 2000);
    reloadPage();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedValues({
      ...editedValues,
      [name]: value,
    });
  };

  const handleEditDevice = (device) => {
    setSelectedDevice(device);
    setEditedValues({
      TP_identificador: device.TP_identificador || "",
      TP_nombre: device.TP_nombre || "",
      TP_cantidad: device.TP_cantidad || "",
      EA_nombre: device.EA_nombre || "",
      AO_descripcion: device.AO_descripcion || "",
      AO_estado: device.AO_estado || "",
    });
  };

  const cancelDeleteDevice = () => {
    setDeleteConfirmation(false);
  };

  const filteredDevices =
    Dispositivos.Dispositivos && Array.isArray(Dispositivos.Dispositivos)
      ? Dispositivos.Dispositivos.filter((device) => {
          return (
            (device.AO_identificador &&
              ((typeof device.AO_identificador === "string" &&
                /^\d+$/.test(device.AO_identificador)) ||
                typeof device.AO_identificador === "number") &&
              device.AO_identificador.toString()
                .toLowerCase()
                .includes(searchText.toLowerCase())) ||
            (device.TP_nombre &&
              device.TP_nombre.toLowerCase().includes(
                searchText.toLowerCase()
              )) ||
            (device.TP_cantidad &&
              ((typeof device.TP_cantidad === "string" &&
                /^\d+$/.test(device.TP_cantidad)) ||
                typeof device.TP_cantidad === "number") &&
              device.TP_cantidad.toString()
                .toLowerCase()
                .includes(searchText.toLowerCase())) ||
            (device.EA_nombre &&
              device.EA_nombre.toLowerCase().includes(
                searchText.toLowerCase()
              )) ||
            (device.AO_descripcion &&
              device.AO_descripcion.toLowerCase().includes(
                searchText.toLowerCase()
              )) ||
            (device.AO_estado &&
              device.AO_estado.toLowerCase().includes(searchText.toLowerCase()))
          );
        })
      : [];

  const handleEdit = (device) => {
    setEditedDevice(device);
    setEditMode(true);
  };

  // const handleEditDispositivo = (device) => {
  //     setDispositivos(device);
  //     handleToggleForm('edit')
  // };

  const handleCreateDevice = () => {
    setShowCreateForm(true);
    setEditedValues({});
    setSelectedDevice(null);
  };

  const handleCreateTipo = () => {
    setShowTipoForm(true);
    setEditedValues({});
    setSelectedDevice(null);
    // Aquí puedes definir la lógica para mostrar un formulario o realizar otras acciones relacionadas con la creación de tipos.
  };

  const handleCloseForm = (key) => {
    handleToggleForm(key);
  };

  // const handleToggleForm = (key) => {
  //     setShowFormState((prevState) => ({
  //         ...prevState,
  //         [key]: !prevState[key],
  //     }));
  // };

  const reloadPage = () => {
    router.push(
      "/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar"
    );
  };

  const buttonStyle = {
    backgroundColor: "#021730",
    color: "white",
    border: "none", // Agregar un borde blanco
    transition: "background-color 0.3s, border 0.3s", // También añadir la transición para el borde
  };

  const buttonHoverStyle = {
    backgroundColor: "#010E1F", // Nuevo color de fondo al pasar el cursor
    color: "black", // Texto de color oscuro
    border: "1px solid white",
  };

  return (
    <div className="p-4">
      <Card style={{ backgroundColor: "#2F3E5B", color: "white" }} text="white">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span>Lista de Dispositivos</span>
            <div>
              <Button
                variant="success"
                onClick={handleCreateDevice}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                }}
              >
                Crear Dispositivo
              </Button>
              <Button
                className="ml-2"
                variant="info"
                onClick={handleCreateTipo}
                style={buttonStyle} // Puedes utilizar el mismo estilo o personalizarlo
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                }}
              >
                Crear Tipo
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Buscar dispositivo..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
          <Table
            style={{ backgroundColor: "#252440", color: "white" }}
            striped
            bordered
            hover
            responsive
          >
            <thead>
              <tr>
                <th className="text-center">Codigo ID</th>
                <th className="text-center">Dispositivo</th>
                <th className="text-center">Descripción</th>
                <th className="text-center">Estado</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredDevices.map((device) => (
                <tr key={device.AO_identificador}>
                  <td className="text-center">{device.AO_identificador}</td>
                  <td className="text-center">{device.TP_nombre}</td>
                  <td className="text-center">{device.AO_descripcion}</td>
                  <td className="text-center">{device.AO_estado}</td>
                  <td className="text-center">
                    <Button
                      variant="primary"
                      onClick={() => handleEditDevice(device)}
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
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() =>
                        handleDeleteActivo(device.AO_identificador)
                      }
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
          <Modal.Title>Crear Dispositivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Dispositivo</Form.Label>
              <Form.Select
                name="TP_identificador"
                value={type.TP_identificador}
                onChange={handleChange}
              >
                {types.map((type) => (
                  <option
                    key={type.TP_identificador}
                    value={type.TP_identificador}
                  >
                    {type.TP_nombre}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="AO_descripcion"
                value={activo.AO_descripcion}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                name="AO_estado"
                value={activo.AO_estado}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowCreateForm(false)}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
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
                tipo: "Activo",
                TP_nombre: type.TP_nombre,
                AO_descripcion: activo.AO_descripcion,
                AO_estado: activo.AO_estado,
                AO_identificador_tipo: type.TP_identificador,
              })
            }
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showTipoForm} onHide={() => setShowTipoForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Tipo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Codigo ID</Form.Label>
              <Form.Control
                type="text"
                name="TP_identificador"
                value={type.TP_identificador}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="TP_nombre"
                value={type.TP_nombre}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="TP_descripcion"
                value={type.TP_descripcion}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowCreateForm(false)}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
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
              handleSaveTipo({
                tipo: "Tipo",
                TP_identificador: type.TP_identificador,
                TP_nombre: type.TP_nombre,
                TP_descripcion: type.TP_descripcion,
              })
            }
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={selectedDevice !== null}
        onHide={() => setSelectedDevice(null)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Dispositivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Dispositivo</Form.Label>
              <Form.Select
                name="TP_identificador"
                value={type.TP_identificador}
                onChange={handleChange}
              >
                {types.map((type) => (
                  <option
                    key={type.TP_identificador}
                    value={type.TP_identificador}
                  >
                    {type.TP_nombre}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="AO_descripcion"
                value={editedValues.AO_descripcion || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                name="AO_estado"
                value={editedValues.AO_estado || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setSelectedDevice(null)}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => setSelectedDevice(null)}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={deleteConfirmation} onHide={cancelDeleteDevice}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este dispositivo?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={cancelDeleteDevice}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={""}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/config/BibliotecaDispositivos"
    );
    const data = response.data;

    if (data && data.Dispositivos && data.types) {
      const { Dispositivos, types } = data;
      return {
        props: {
          Dispositivos,
          types,
        },
      };
    } else {
      return {
        props: {
          Dispositivos: [],
          types: [],
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: {
        Dispositivos: [],
        types: [],
      },
    };
  }
};
