import React, { useState } from 'react';
import axios from 'axios';
import { Card, Table, Button, Form, Modal, Alert } from 'react-bootstrap';

export default function SidebarCitas({ Citas }) {
    const [searchText, setSearchText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedCita, setEditedCita] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newCita, setNewCita] = useState({}); // Almacena los datos de la nueva cita
    const [alertVisible, setAlertVisible] = useState(false);

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
        setAlertVisible(true); // Muestra una alerta para confirmar la creación
    };

    return (
        <div className="flex-1 p-8">
            <Card bg="dark" text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Citas</span>
                        <Button variant="success" onClick={createCita}>
                            Nueva Cita
                        </Button>
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
                    <Table striped bordered hover variant="dark" responsive>
                        {/* Encabezado de la tabla */}
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
                            {/* Filas de la tabla */}
                            {Citas
                                .filter((cita) =>
                                    cita.HO_fecha.toLowerCase().includes(searchText.toLowerCase()) ||
                                    cita.HO_hora.toLowerCase().includes(searchText.toLowerCase()) ||
                                    cita.UO_primer_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
                                    cita.UO_identificador.toLowerCase().includes(searchText.toLowerCase()) ||
                                    cita.CA_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
                                    cita.TP_nombre.toLowerCase().includes(searchText.toLowerCase())
                                )
                                .map((cita) => (
                                    <tr key={cita.LP_identificador}>
                                        <td className="text-center">{cita.HO_fecha}</td>
                                        <td className="text-center">{cita.HO_hora}</td>
                                        <td className="text-center">{cita.UO_primer_nombre}</td>
                                        <td className="text-center">{cita.UO_identificador}</td>
                                        <td className="text-center">{cita.CA_nombre}</td>
                                        <td className="text-center">{cita.TP_nombre}</td>
                                        <td className="text-center">
                                            <Button variant="light" className="ml-2" onClick={() => handleEdit(cita)}>
                                                Editar
                                            </Button>
                                            <Button variant="light" className="ml-2" onClick={() => handleDelete(cita)}>
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
                        {/* Campos de edición */}
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
                    <Button variant="secondary" onClick={() => setEditMode(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
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
                    <Button variant="secondary" onClick={() => setDeleteConfirmation(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Ventana modal para crear una nueva cita */}
            <Modal show={showCreateForm} onHide={() => setShowCreateForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva Cita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Campos para crear una nueva cita */}
                        <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewCita({ ...newCita, HO_fecha: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hora</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewCita({ ...newCita, HO_hora: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewCita({ ...newCita, UO_primer_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cedula</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewCita({ ...newCita, UO_identificador: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Carrera</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewCita({ ...newCita, CA_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Dispositivo</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewCita({ ...newCita, TP_nombre: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCreateForm(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={submitNewCita}>
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
        const { data: Citas } = await axios.get("http://localhost:3000/api/config/BibliotecaCitas");
        return {
            props: {
                Citas,
            },
        };
    } catch (error) {
        console.log(error);
    }
};
