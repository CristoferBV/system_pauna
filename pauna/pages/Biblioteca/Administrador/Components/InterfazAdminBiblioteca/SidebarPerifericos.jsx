import React, { useState } from 'react';
import axios from 'axios';
import { Card, Table, Button, Form, Modal, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function SidebarPerifericos({ Perifericos, cita }) {
    const [searchText, setSearchText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedCita, setEditedCita] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newCita, setNewCita] = useState({});
    const [alertVisible, setAlertVisible] = useState(false);
    const router = useRouter();

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

    const filteredPeriferico = Perifericos.Perifericos && Array.isArray(Perifericos.Perifericos)
        ? Perifericos.Perifericos.filter((periferico) => {

            return (
                periferico.EA_identificador.toLowerCase().includes(searchText.toLowerCase()) ||
                periferico.EA_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
                periferico.EA_descripcion.toLowerCase().includes(searchText.toLowerCase())
            );
        })
        : [];

    const [periferico, setPeriferico] = useState({
        EA_identificador: "",
        EA_nombre: "",
        EA_descripcion: "",
    })

    const handleChange = ({ target: { name, value } }) => {
        if (name in periferico) {
            setPeriferico({ ...periferico, [name]: value });
        }
    };

    const handleSubmit = async (data) => {
        try {
            const res = await axios.post("/api/config/BibliotecaPerifericos", data);
            console.log(res);
        } catch (error) {
            console.error("Error al crear el periférico:", error);
            // Puedes mostrar un mensaje de error al usuario aquí
        }
    };


    const handleSave = async (object) => {
        await handleSubmit(object);
        setShowCreateForm(true);
        reloadPage(); // Actualiza la lista de periféricos después de la creación
    };

    const reloadPage = () => {
        router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarPerifericos");
    }

    const handleDeletePeriferico = async (EA_identificador) => {
        try {
            const response = await axios.delete(`/api/config/BibliotecaPerifericos?EA_identificador=${EA_identificador}`);
            console.log(response);
            // Realizar otras acciones después de la eliminación
        } catch (error) {
            console.error("Error al eliminar el periférico:", error);
            throw error;  // Permitir que el control fluya fuera de la función
        }
        reloadPage();
    };
    
    const buttonStyle = {
        backgroundColor: '#021730',
        color: 'white',
        border: 'none', // Agregar un borde blanco
        transition: 'background-color 0.3s, border 0.3s', // También añadir la transición para el borde
    };

    const buttonHoverStyle = {
        backgroundColor: '#010E1F', // Nuevo color de fondo al pasar el cursor
        color: 'black', // Texto de color oscuro
        border: '1px solid white',
    };

    const tableButtonStyle = {
        backgroundColor: '#021730',
        color: 'white',
        border: 'none',
        transition: 'background-color 0.3s, border 0.3s',
    };

    const tableButtonHoverStyle = {
        backgroundColor: '#010E1F',
        color: 'black',
        border: '1px solid white',
    };

    return (
        <div className="flex-1 p-8">
            <Card style={{ backgroundColor: '#2F3E5B', color: 'white' }} text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Perifericos</span>
                        <Button variant="success" onClick={createCita} style={buttonStyle}>
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
                    <Table striped bordered hover variant="secondary" responsive>
                        {/* Encabezado de la tabla */}
                        <thead>
                            <tr>
                                <th className="text-center">Codigo ID</th>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Descripción</th>
                                <th className="text-center">Administrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPeriferico.map((periferico) => (
                                <tr key={periferico.EA_identificador}>
                                    <td className="text-center">{periferico.EA_identificador}</td>
                                    <td className="text-center">{periferico.EA_nombre}</td>
                                    <td className="text-center">{periferico.EA_descripcion}</td>
                                    <td className="text-center">
                                        <Button
                                            variant="light"
                                            className="ml-2"
                                            onClick={() => handleEdit(cita)}
                                            style={tableButtonStyle}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            variant="light"
                                            className="ml-2"
                                            onClick={() => {
                                                console.log("EA_identificador:", periferico.EA_identificador);
                                                handleDeletePeriferico(periferico.EA_identificador);
                                            }}
                                            style={tableButtonStyle}
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
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="primary"
                        onClick={saveChanges}
                        style={buttonStyle}
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
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="danger"
                        onClick={confirmDelete}
                        style={buttonStyle}
                    >
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Ventana modal para crear una nueva cita */}
            <Modal show={showCreateForm} onHide={() => setShowCreateForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Periferico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Campos para crear una nueva cita */}
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
                        style={buttonStyle}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSave({
                            tipo: "Periferico",
                            EA_identificador: periferico.EA_identificador,
                            EA_nombre: periferico.EA_nombre,
                            EA_descripcion: periferico.EA_descripcion
                        })}
                        style={buttonStyle}
                    >
                        Crear
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
        const { data: Perifericos } = await axios.get("http://localhost:3000/api/config/BibliotecaPerifericos");
        return {
            props: {
                Perifericos,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                Perifericos: [], // Puedes proporcionar un valor predeterminado en caso de error.
            },
        };
    }
};
