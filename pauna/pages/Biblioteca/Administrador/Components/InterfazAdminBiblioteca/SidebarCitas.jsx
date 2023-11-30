import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Table, Button, Form, Modal, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function SidebarCitas({ Citas }) {
    const [searchText, setSearchText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedCita, setEditedCita] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [citas, setCitas] = useState([]);
    const [citasAceptadas, setCitasAceptadas] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);
    const router = useRouter();

    const [cita, setCita] = useState({
        SD_identificador: "",
        SD_identificador_horario: "",
        SD_identificador_tipo: "",
        SD_identificador_usuario: "",
    });

    useEffect(() => {
        if (Citas && Citas.Citas) {
            setCitas(Citas.Citas);
        }
    }, [Citas]);

    const acceptCitaAPI = async (identificador, UO_identificador, TP_nombre, AO_identificador) => {
        try {
            await axios.post(`/api/config/BibliotecaCitas/${identificador}`, {
                UO_identificador,
                TP_nombre,
                AO_identificador,
            });
            reloadPage();
        } catch (error) {
            console.error("Error al aceptar la cita:", error);
        }
    };

    const handleToggleAceptado = async (identificador, UO_identificador, TP_nombre, AO_identificador, aceptado) => {
        try {
          const citaToUpdate = citas.find((cita) => cita.SD_identificador === identificador);
      
          if (citaToUpdate) {
            await acceptCitaAPI(identificador, UO_identificador, TP_nombre, AO_identificador);
      
            // Obtener la cita actualizada después de aceptarla
            const updatedCita = await getCitaById(identificador);
      
            // Actualizar el estado de las citas usando setCitas
            const updatedCitas = citas.map((cita) =>
              cita.SD_identificador === identificador ? { ...cita, aceptado: !cita.aceptado, ...updatedCita } : cita
            );
      
            setCitas(updatedCitas);
      
            console.log("Cita aceptada exitosamente");
          } else {
            console.error(`No se encontró la cita con identificador ${identificador}`);
          }
        } catch (error) {
          console.error("Hubo un error al aceptar la cita:", error);
        }
      };
      

    const handleChangeCheckbox = (identificador, UO_identificador, TP_nombre, AO_identificador, aceptado) => {
        // Actualizar el estado de las citas aceptadas
        setCitasAceptadas((prevCitasAceptadas) =>
            aceptado
                ? [...prevCitasAceptadas, identificador]
                : prevCitasAceptadas.filter((id) => id !== identificador)
        );

        // Copiar el estado actual de las citas
        const updatedCitas = citas.map((cita) =>
            cita.SD_identificador === identificador ? { ...cita, aceptado } : cita
        );

        // Actualizar el estado de las citas usando setCitas
        setCitas(updatedCitas);
    };


    const handleChange = ({ target: { name, value } }) => {
        if (name in cita) {
            setCita({ ...cita, [name]: value });
        }
    };

    const handleEdit = (cita) => {
        setEditedCita(cita);
        setEditMode(true);
    };

    const saveChanges = () => {
        // Aquí deberías implementar la lógica para guardar los cambios
        setEditMode(false);
    };

    const handleDelete = (cita) => {
        setEditedCita(cita);
        setDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        // Aquí deberías implementar la lógica para eliminar la cita
        setDeleteConfirmation(false);
    };

    const createCita = () => {
        setShowCreateForm(true);
    };

    const handleAlertClose = () => {
        setAlertVisible(false);
    };

    const filteredCitas = citas && Array.isArray(citas)
        ? citas.filter((cita) => {
            return (
                (cita.UO_identificador && cita.UO_identificador.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.HO_fecha && cita.HO_fecha.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.HO_hora && cita.HO_hora.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.UO_primer_nombre && cita.UO_primer_nombre.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.CA_nombre && cita.CA_nombre.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.TP_nombre && cita.TP_nombre.toLowerCase().includes(searchText.toLowerCase()))
            );
        })
        : [];

    const reloadPage = () => {
        router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas");
    };

    const buttonStyle = {
        backgroundColor: '#021730',
        color: 'white',
        border: 'none',
        transition: 'background-color 0.3s, border 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#010E1F',
        color: 'black',
        border: '1px solid white',
    };

    return (
        <div className="flex-1 p-8">
            <Card style={{ backgroundColor: '#2F3E5B', color: 'white' }} text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Citas</span>
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
                    <Table style={{ backgroundColor: '#252440', color: 'white' }} striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th className="text-center">Check</th>
                                <th className="text-center">Fecha</th>
                                <th className="text-center">Hora</th>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Cedula</th>
                                <th className="text-center">Carrera</th>
                                <th className="text-center">Dispositivo</th>
                                <th className="text-center">Administrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCitas.map((cita, index) => (
                                <tr key={`${cita.SD_identificador}_${index}`}>
                                    <td className="text-center">
                                        <input
                                            type="checkbox"
                                            checked={cita.aceptado || false}
                                            onChange={() =>
                                                handleChangeCheckbox(
                                                    cita.SD_identificador,
                                                    cita.UO_identificador,
                                                    cita.TP_nombre,
                                                    cita.AO_identificador,
                                                    !cita.aceptado
                                                )
                                            }
                                        />

                                    </td>
                                    <td className="text-center">{new Date(cita.HO_fecha).toISOString().slice(0, 10)}</td>
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
                                                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
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
                                            onClick={() => handleDelete(cita)}
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
                                        <Button
                                            variant="light"
                                            className="ml-2"
                                            onClick={() =>
                                                handleToggleAceptado(
                                                    cita.SD_identificador,
                                                    cita.UO_identificador,
                                                    cita.TP_nombre,
                                                    cita.AO_identificador
                                                )
                                            }
                                            disabled={!citasAceptadas.includes(cita.SD_identificador)}
                                            style={buttonStyle}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                                            }}
                                        >
                                            Aceptar
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
                    <Modal.Title>Editar Cita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedCita.HO_fecha}
                                onChange={(e) => setEditedCita({ ...editedCita, HO_fecha: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hora</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedCita.HO_hora}
                                onChange={(e) => setEditedCita({ ...editedCita, HO_hora: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedCita.UO_primer_nombre}
                                onChange={(e) => setEditedCita({ ...editedCita, UO_primer_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cedula</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedCita.UO_identificador}
                                onChange={(e) => setEditedCita({ ...editedCita, UO_identificador: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Carrera</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedCita.CA_nombre}
                                onChange={(e) => setEditedCita({ ...editedCita, CA_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Dispositivo</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedCita.TP_nombre}
                                onChange={(e) => setEditedCita({ ...editedCita, TP_nombre: e.target.value })}
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

            {/* Ventana modal de confirmación de eliminación */}
            <Modal show={deleteConfirmation} onHide={() => setDeleteConfirmation(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro de que deseas eliminar esta cita?
                </Modal.Body>
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

            {/* Alerta de confirmación para la creación de una nueva cita */}
            <Alert variant="success" show={alertVisible} onClose={handleAlertClose} dismissible>
                Cita creada exitosamente.
            </Alert>
        </div>
    );
}


export const getServerSideProps = async (context) => {
    try {
        const { data: Citas } = await axios.get("http://localhost:3000/api/config/BibliotecaCitas");
        return {
            props: {
                Citas,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                Citas: [],
            },
        };

    }
};