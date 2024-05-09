import React, { useState } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Card,
  InputGroup,
  FormControl,
  Modal,
  Form,
} from "react-bootstrap";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function Horario({ Horarios }) {
  const [searchText, setSearchText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({});
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const router = useRouter();

  const [horario, setHorario] = useState({
    HO_identificador: "",
    HO_fecha: "",
    HO_hora: "",
    HO_estado: "",
  });

  const handleEdit = (horario) => {
    setEditedValues({ ...horario });
    setEditMode(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedValues({
      ...editedValues,
      [name]: value,
    });
  };

  const saveChanges = async () => {
    try {
      const res = await axios.put("/api/config/BibliotecaHorario", editedValues);
      console.log(res);
      if (res.status === 200) {
        console.log("Los cambios se guardaron correctamente.");
        showAlert("Datos editados correctamente");
        reloadPage();
      } else {
        console.log("Hubo un error al guardar los cambios.");
      }
    } catch (error) {
      console.log("Hubo un error al guardar los cambios:", error);
    }
  };

  const createHorario = () => {
    setShowCreateForm(true);
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name in horario) {
      setHorario({ ...horario, [name]: value });
    }
  };

  const handleSubmit = async (data) => {
    console.log("hola");
    const res = await axios
      .post("/api/config/BibliotecaHorario", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(res);
    showAlert("Horario añadido correctamente");
  };

  const handleSave = (object) => {
    handleSubmit(object);
    setShowCreateForm(true);
    setTimeout(() => {
      setShowCreateForm(false);
    }, 2000);
    reloadPage();
  };

  const reloadPage = () => {
    router.push(
      "/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Horario"
    );
  };

  const handleDeleteHorario = async (horarioID) => {
    console.log("Valor de horarioID:", horarioID);

    try {
      const res = await axios.delete("/api/config/BibliotecaHorario", {
        data: { HO_identificador: horarioID },
      });
      console.log(res);
      if (res.status === 200) {
        console.log("El horario se eliminó correctamente.");
        showAlert("Horario eliminado correctamente");
        reloadPage();
      } else {
        console.log("Hubo un error al eliminar el horario.");
      }
    } catch (error) {
      console.log("Hubo un error al eliminar el horario:", error);
    }
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setEditedValues({
      ...editedValues,
      [name]: value,
    });
  };

  const buttonStyle = {
    backgroundColor: "#233C5B",
    color: "white",
    border: "none",
    transition: "background-color 0.3s, border 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#152C4A",
    color: "black",
    border: "1px solid white",
  };

  const showAlert = (message) => {
    Swal.fire({
      title: "éxito",
      text: message,
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="flex-1 p-8">
      <Card style={{ backgroundColor: "#DEEFE7", color: "white" }} text="white">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span className="text-[#293659] font-semibold">Horario</span>
            <Button
              variant="success"
              onClick={createHorario}
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor =
                  buttonHoverStyle.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = buttonStyle.backgroundColor;
              }}
            >
              Crear Horario
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Buscar horario..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
          <Table
            striped
            bordered
            hover
            responsive
          >
            <thead>
              <tr>
                <th className="text-center" style={{ color: "#293659" }}>Fecha</th>
                <th className="text-center" style={{ color: "#293659" }}>Hora</th>
                <th className="text-center" style={{ color: "#293659" }}>Estado</th>
                <th className="text-center" style={{ color: "#293659" }}>Administrar</th>
              </tr>
            </thead>
            <tbody>
              {Horarios.filter(
                (horario) =>
                  horario.HO_fecha.toLowerCase().includes(
                    searchText.toLowerCase()
                  ) ||
                  horario.HO_hora.toLowerCase().includes(
                    searchText.toLowerCase()
                  ) ||
                  horario.HO_estado.toLowerCase().includes(
                    searchText.toLowerCase()
                  )
              ).map((horario, index) => {
                return (
                  <tr key={horario.HO_identificador || index}>
                    <td className="text-center">
                      {new Date(horario.HO_fecha).toISOString().slice(0, 10)}
                    </td>
                    <td className="text-center">{horario.HO_hora}</td>
                    <td className="text-center">{horario.HO_estado}</td>
                    <td className="text-center">
                      <Button
                        variant="light"
                        className="ml-2"
                        onClick={() => handleEdit(horario)}
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
                        variant="light"
                        className="ml-2"
                        onClick={() => {
                          if (horario.HO_identificador) {
                            console.log(
                              "Valor de horarioID:",
                              horario.HO_identificador
                            );
                            handleDeleteHorario(horario.HO_identificador);
                          } else {
                            console.log(
                              "El identificador del horario no está definido."
                            );
                          }
                        }}
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
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={editMode} onHide={() => setEditMode(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Horario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <input
                type="date"
                value={editedValues.HO_fecha}
                onChange={handleDateChange}
                name="HO_fecha"
                className="form-control"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="text"
                name="HO_hora"
                value={editedValues.HO_hora}
                onChange={(e) =>
                  setEditedValues({ ...editedValues, HO_hora: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                name="HO_estado"
                value={editedValues.HO_estado}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    HO_estado: e.target.value,
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
            onClick={saveChanges}
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

      <Modal show={showCreateForm} onHide={() => setShowCreateForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Horario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                name="HO_fecha"
                value={horario.HO_fecha}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="text"
                name="HO_hora"
                value={horario.HO_hora}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                name="HO_estado"
                value={horario.HO_estado}
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
                tipo: "Horario",
                HO_fecha: horario.HO_fecha,
                HO_hora: horario.HO_hora,
                HO_estado: horario.HO_estado,
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
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { data: Horarios } = await axios.get(
      process.env.LINK+"/api/config/BibliotecaHorario"
    );
    return {
      props: {
        Horarios,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        Horarios: [],
      },
    };
  }
};
