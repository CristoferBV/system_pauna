import React, { useState } from 'react';
import axios from 'axios';
import { Card, Table, Button, Form, Modal, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function SidebarCitas({ Citas }) {
    const [searchText, setSearchText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedCita, setEditedCita] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newCita, setNewCita] = useState({});
    const [alertVisible, setAlertVisible] = useState(false);
    const router = useRouter();

    const [cita, setCita] = useState({
        SD_identificador_horario: "",
        SD_identificador_tipo: "",
        SD_identificador_usuario: "",
    })

    // const [horario, setHorario] = useState({
    //     HO_fecha: "",
    //     HO_hora: "",
    // })

    // const [usuario, setUsuario] = useState({
    //     UO_primer_nombre: "",
    //     UO_identificador: "",
    // })

    // const [type, setType] = useState({
    //     TP_nombre: "",
    // })

    // const [carrera, setCarrera] = useState({
    //     CA_nombre: "",
    // })

    const handleDeleteCita = async (citaID) => {
        const res = await axios
            .delete("/api/config/BibliotecaCitas", {data: { SD_identificador:citaID}})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(res)
        reloadPage();
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
        // Implementa la lógica para guardar los cambios aquí
        setEditMode(false);
    };

    const handleDelete = (cita) => {
        setEditedCita(cita);
        setDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        // Implementa la lógica para eliminar el elemento aquí
        setDeleteConfirmation(false);
    };

    const createCita = () => {
        setShowCreateForm(true);
    };

    const handleAlertClose = () => {
        setAlertVisible(false);
    };

    const submitNewCita = () => {
        // Implementa la lógica para guardar la nueva cita
        setAlertVisible(true);
    };

    const filteredCitas = Citas.Citas && Array.isArray(Citas.Citas)
        ? Citas.Citas.filter((cita) => {

        return(
        cita.HO_fecha.toLowerCase().includes(searchText.toLowerCase()) ||
        cita.HO_hora.toLowerCase().includes(searchText.toLowerCase()) ||
        cita.UO_primer_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
        cita.UO_identificador.toLowerCase().includes(searchText.toLowerCase()) ||
        cita.CA_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
        cita.TP_nombre.toLowerCase().includes(searchText.toLowerCase())
        );
    })
    : [];

    const reloadPage = () => {
        router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas");
    }

    const buttonStyle = {
        backgroundColor: '#021730',
        color: 'white',
        border: 'none', // Agregar un borde blanco
        transition: 'background-color 0.3s, border 0.3s', // También añadir la transición para el borde
    };

    const buttonHoverStyle = {
        backgroundColor: '#010E1F',  // Nuevo color de fondo al pasar el cursor
        color: 'black',  // Texto de color oscuro
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
                            {filteredCitas.map((cita) => (
                                    <tr key={cita.LP_identificador}>
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
                                                onClick={() => handleDeleteCita(cita.SD_identificador)}
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
                                        </td>
                                    </tr>
                                ))
                            }
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
