import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Table, Button, Form, Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function SidebarCitas({ Citas, Horario, Dispositivo }) {
  const [searchText, setSearchText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedCita, setEditedCita] = useState({});
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [citas, setCitas] = useState([]);
  const [horario, setHorario] = useState(Horario);
  const router = useRouter();

  const [cita, setCita] = useState({
    SD_identificador: "",
    SD_identificador_horario: "",
    SD_identificador_tipo: "",
    SD_identificador_usuario: "",
  });

  useEffect(() => {
    if (Citas && Array.isArray(Citas)) {
      setCitas(Citas);
    }
  }, [Citas]);

  const handleChange = ({ target: { name, value } }) => {
    if (name in cita) {
      setCita({ ...cita, [name]: value });
    }
  };

  const handleEdit = (cita) => {
    setEditedCita(cita);
    setEditMode(true);
  };

  const handleDelete = (cita) => {
    setEditedCita(cita);
    setDeleteConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      const citaId = editedCita.SD_identificador;
      console.log("Identificador de la cita:", citaId);
      const res = await axios.delete(`/api/config/BibliotecaCitas`, {
        data: { SD_identificador: citaId },
      });
      console.log(res);
      if (res.status === 200) {
        console.log("La cita se eliminó correctamente.");
        showAlert("Cita eliminada correctamente");
        reloadPage();
      } else {
        console.log("Hubo un error al eliminar la cita.");
      }
    } catch (error) {
      console.log("Hubo un error al eliminar la cita:", error);
    }
  };

  const saveChanges = async () => {
    try {
      const {
        SD_identificador,
        SD_identificador_horario,
        SD_identificador_tipo,
      } = editedCita;

      if (SD_identificador_horario && SD_identificador_tipo) {
        const data = {
          SD_identificador,
          SD_identificador_horario,
          SD_identificador_tipo,
        };

        const res = await axios.put("/api/config/BibliotecaCitas", data);
        console.log(res);
        if (res.status === 200) {
          console.log("Los cambios se guardaron correctamente.");
          showAlert("Datos editados correctamente");
          reloadPage();
        } else {
          console.log("Hubo un error al guardar los cambios.");
        }
      } else {
        console.log("No se han seleccionado todos los cambios.");
      }
    } catch (error) {
      console.log("Hubo un error al guardar los cambios:", error);
    }
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setEditedCita((prevCita) => ({
      ...prevCita,
      [name]: value,
    }));
  };

  const handleDispositivoChange = (event) => {
    const { name, value } = event.target;
    setEditedCita((prevCita) => ({
      ...prevCita,
      [name]: value,
    }));
  };

  const createCita = () => {
    setShowCreateForm(true);
  };

  const filteredCitas =
    citas && Array.isArray(citas)
      ? citas.filter((cita) => {
          return (
            (cita.UO_identificador &&
              cita.UO_identificador.toLowerCase().includes(
                searchText.toLowerCase()
              )) ||
            (cita.HO_fecha &&
              cita.HO_fecha.toLowerCase().includes(searchText.toLowerCase())) ||
            (cita.HO_hora &&
              cita.HO_hora.toLowerCase().includes(searchText.toLowerCase())) ||
            (cita.UO_primer_nombre &&
              cita.UO_primer_nombre.toLowerCase().includes(
                searchText.toLowerCase()
              )) ||
            (cita.CA_nombre &&
              cita.CA_nombre.toLowerCase().includes(
                searchText.toLowerCase()
              )) ||
            (cita.TP_nombre &&
              cita.TP_nombre.toLowerCase().includes(searchText.toLowerCase()))
          );
        })
      : [];

  const reloadPage = () => {
    router.push(
      "/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas"
    );
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
      title: "Éxito",
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
            <span className="text-[#293659] font-semibold">Citas</span>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Buscar cita..."
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
            responsive
          >
            <thead>
              <tr>
                <th className="text-center" style={{ color: "#293659" }}>Fecha</th>
                <th className="text-center" style={{ color: "#293659" }}>Hora</th>
                <th className="text-center" style={{ color: "#293659" }}>Nombre</th>
                <th className="text-center" style={{ color: "#293659" }}>Cedula</th>
                <th className="text-center" style={{ color: "#293659" }}>Carrera</th>
                <th className="text-center" style={{ color: "#293659" }}>Dispositivo</th>
                <th className="text-center" style={{ color: "#293659" }}>Administrar</th>
              </tr>
            </thead>
            <tbody>
              {filteredCitas.map((cita, index) => (
                <tr key={`${cita.SD_identificador}_${index}`}>
                  <td className="text-center">
                    {new Date(cita.HO_fecha).toISOString().slice(0, 10)}
                  </td>
                  <td className="text-center">{cita.HO_hora}</td>
                  <td className="text-center">{cita.UO_primer_nombre}</td>
                  <td className="text-center">{cita.UO_identificador}</td>
                  <td className="text-center">{cita.CA_nombre}</td>
                  <td className="text-center">{cita.TP_nombre}</td>
                  <td className="text-center">
                    <Button
                      variant="light"
                      className="ml-2"
                      onClick={() => handleEdit(cita)}
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
                      onClick={() => handleDelete(cita)}
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

      <Modal show={editMode} onHide={() => setEditMode(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                as="select"
                value={editedCita.SD_identificador_horario || ""}
                onChange={(e) =>
                  setEditedCita({
                    ...editedCita,
                    SD_identificador_horario: e.target.value,
                  })
                }
              >
                <option value="">Seleccione fecha</option>
                {horario.map((fecha) => (
                  <option
                    key={fecha.HO_identificador}
                    value={fecha.HO_identificador}
                  >
                    {new Date(fecha.HO_fecha).toISOString().slice(0, 10)}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Hora</Form.Label>
              <Form.Control
                as="select"
                value={editedCita.SD_identificador_horario || ""}
                onChange={(e) =>
                  setEditedCita({
                    ...editedCita,
                    SD_identificador_horario: e.target.value,
                  })
                }
              >
                <option value="">Seleccione hora</option>
                {horario.map((fecha) => (
                  <option
                    key={fecha.HO_identificador}
                    value={fecha.HO_identificador}
                  >
                    {fecha.HO_hora}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Dispositivo</Form.Label>
              <Form.Control
                as="select"
                value={editedCita.SD_identificador_tipo || ""}
                onChange={(e) =>
                  setEditedCita({
                    ...editedCita,
                    SD_identificador_tipo: e.target.value,
                  })
                }
              >
                <option value="">Seleccione dispositivo</option>
                {Dispositivo.map((dispositivo) => (
                  <option
                    key={dispositivo.TP_identificador}
                    value={dispositivo.TP_identificador}
                  >
                    {dispositivo.TP_nombre}
                  </option>
                ))}
              </Form.Control>
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

      <Modal
        show={deleteConfirmation}
        onHide={() => setDeleteConfirmation(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas eliminar esta cita?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setDeleteConfirmation(false)}
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
            onClick={confirmDelete}
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
    const {
      data: { Citas, Horario, Dispositivo },
    } = await axios.get(process.env.LINK+"/api/config/BibliotecaCitas");
    return {
      props: {
        Citas,
        Horario,
        Dispositivo,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        Citas: [],
        Horario: [],
        Dispositivo: [],
      },
    };
  }
};
