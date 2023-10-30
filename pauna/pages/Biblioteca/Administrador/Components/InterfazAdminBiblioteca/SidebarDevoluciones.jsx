import React, { useState } from 'react';
import axios from 'axios';
import { Card, Table, Button, Form, Modal, Alert } from 'react-bootstrap';

export default function SidebarDevoluciones({ Devoluciones }) {
    const [searchText, setSearchText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedDevolucion, setEditedDevolucion] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newDevolucion, setNewDevolucion] = useState({});
    const [alertVisible, setAlertVisible] = useState(false);
    const [showForm, setShowForm] = useState(false); // Agregado para mostrar el formulario

    const [formData, setFormData] = useState({
        nombre: '',
        cedula: '',
        dispositivo: '',
        carrera: '',
        fechaEntregado: '',
        fechaDevolucion: '',
        correo: '',
        descripcion: '', // Agregado para la descripción
    });

    const handleEdit = (devolucion) => {
        setEditedDevolucion(devolucion);
        setEditMode(true);
    };

    const saveChanges = () => {
        // Implementa la lógica para guardar los cambios aquí
        setEditMode(false);
    };

    const handleDelete = (devolucion) => {
        setEditedDevolucion(devolucion);
        setDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        // Implementa la lógica para eliminar la devolución aquí
        setDeleteConfirmation(false);
    };

    const createDevolucion = () => {
        setShowCreateForm(true);
    };

    const handleAlertClose = () => {
        setAlertVisible(false);
    };

    const submitNewDevolucion = () => {
        // Implementa la lógica para guardar la nueva devolución
        setAlertVisible(true);
    };

    const showAlert = () => {
        // Implementa la lógica para mostrar el formulario cuando se toca el botón "Alerta"
        setShowForm(true);
    };

    const submitForm = () => {
        // Implementa la lógica para enviar el formulario aquí
        // Puedes acceder a los valores del formulario en el objeto formData
        setShowForm(false); // Oculta el formulario después de enviar
    };

    return (
        <div className="flex-1 p-8">
            <Card bg="dark" text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Devoluciones</span>
                        <div>
                            <Button variant="primary" onClick={createDevolucion} className="mr-2">
                                Crear Devolución
                            </Button>
                            <Button variant="danger" onClick={showAlert}>
                                Alerta
                            </Button>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="mb-3">
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar devolución..."
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    <Table striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cedula</th>
                                <th>Dispositivo</th>
                                <th>Carrera</th>
                                <th>Fecha entregado</th>
                                <th>Fecha devolucion</th>
                                <th>Correo</th>
                                <th>Administrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Devoluciones
                                .filter((devolucion) =>
                                    devolucion.UO_primer_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
                                    devolucion.UO_identificador.toLowerCase().includes(searchText.toLowerCase()) ||
                                    devolucion.TP_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
                                    devolucion.CA_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
                                    devolucion.HO_fecha.toLowerCase().includes(searchText.toLowerCase()) ||
                                    devolucion.LP_fechaDevolucion.toLowerCase().includes(searchText.toLowerCase()) ||
                                    devolucion.CE_correoElectronico.toLowerCase().includes(searchText.toLowerCase())
                                )
                                .map((devolucion) => (
                                    <tr key={devolucion.EE_idenficador}>
                                        <td>{devolucion.UO_primer_nombre}</td>
                                        <td>{devolucion.UO_identificador}</td>
                                        <td>{devolucion.TP_nombre}</td>
                                        <td>{devolucion.CA_nombre}</td>
                                        <td>{devolucion.HO_fecha}</td>
                                        <td>{devolucion.LP_fechaDevolucion}</td>
                                        <td>{devolucion.CE_correoElectronico}</td>
                                        <td>
                                            <Button variant="light" className="ml-2" onClick={() => handleEdit(devolucion)}>
                                                Editar
                                            </Button>
                                            <Button variant="danger" className="ml-2" onClick={() => handleDelete(devolucion)}>
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
                    <Modal.Title>Editar Devolución</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Campos de edición */}
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedDevolucion.UO_primer_nombre}
                                onChange={(e) => setEditedDevolucion({ ...editedDevolucion, UO_primer_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cédula</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedDevolucion.UO_identificador}
                                onChange={(e) => setEditedDevolucion({ ...editedDevolucion, UO_identificador: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Dispositivo</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedDevolucion.TP_nombre}
                                onChange={(e) => setEditedDevolucion({ ...editedDevolucion, TP_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Carrera</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedDevolucion.CA_nombre}
                                onChange={(e) => setEditedDevolucion({ ...editedDevolucion, CA_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha Entregado</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedDevolucion.HO_fecha}
                                onChange={(e) => setEditedDevolucion({ ...editedDevolucion, HO_fecha: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha Devolución</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedDevolucion.LP_fechaDevolucion}
                                onChange={(e) => setEditedDevolucion({ ...editedDevolucion, LP_fechaDevolucion: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedDevolucion.CE_correoElectronico}
                                onChange={(e) => setEditedDevolucion({ ...editedDevolucion, CE_correoElectronico: e.target.value })}
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
                    ¿Estás seguro de que deseas eliminar esta devolución?
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

            {/* Ventana modal para crear una nueva devolución */}
            <Modal show={showCreateForm} onHide={() => setShowCreateForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva Devolución</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Campos para crear una nueva devolución */}
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewDevolucion({ ...newDevolucion, UO_primer_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cédula</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewDevolucion({ ...newDevolucion, UO_identificador: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Dispositivo</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewDevolucion({ ...newDevolucion, TP_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Carrera</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewDevolucion({ ...newDevolucion, CA_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha Entregado</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewDevolucion({ ...newDevolucion, HO_fecha: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha Devolución</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewDevolucion({ ...newDevolucion, LP_fechaDevolucion: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNewDevolucion({ ...newDevolucion, CE_correoElectronico: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCreateForm(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={submitNewDevolucion}>
                        Crear
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Alerta de confirmación para la creación de una nueva devolución */}
            <Alert variant="success" show={alertVisible} onClose={handleAlertClose} dismissible>
                Devolución creada exitosamente.
            </Alert>

            {showForm && (
                <Modal show={showForm} onHide={() => setShowForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Formulario de Devolución</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {/* Campos del formulario */}
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.nombre}
                                    onChange={(e) =>
                                        setFormData({ ...formData, nombre: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Cédula</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.cedula}
                                    onChange={(e) =>
                                        setFormData({ ...formData, cedula: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    value={formData.descripcion}
                                    onChange={(e) =>
                                        setFormData({ ...formData, descripcion: e.target.value })
                                    }
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowForm(false)}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={submitForm}>
                            Enviar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

// Función para obtener datos de Devoluciones (puede ajustarse según tu API)
export const getServerSideProps = async (context) => {
    try {
        const { data: Devoluciones } = await axios.get("http://localhost:3000/api/config/BibliotecaDevoluciones");
        return {
            props: {
                Devoluciones,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                Devoluciones: [], // Puedes proporcionar un valor predeterminado en caso de error.
            },
        };
        
    }
};
