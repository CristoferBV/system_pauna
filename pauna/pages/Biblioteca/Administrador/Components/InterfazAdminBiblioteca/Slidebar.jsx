import React, { useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Card, InputGroup, FormControl } from 'react-bootstrap';

export default function Slidebar({ Dispositivos }) {
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [editedValues, setEditedValues] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedValues({
            ...editedValues,
            [name]: value,
        });
    };

    const handleEditDevice = (device) => {
        setSelectedDevice(device);
        setEditedValues(device);
    };

    const confirmDeleteDevice = () => {
        // Realizar la acción para confirmar la eliminación aquí
        setDeleteConfirmation(false);
    };

    const cancelDeleteDevice = () => {
        setDeleteConfirmation(false);
    };

    const filteredDevices = Dispositivos.filter((device) => {
        return (
            device.TP_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
            device.EA_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
            device.AO_descripcion.toLowerCase().includes(searchText.toLowerCase()) ||
            device.AO_estado.toLowerCase().includes(searchText.toLowerCase())
        );
    });

    const handleCreateDevice = () => {
        setShowCreateForm(true);
        setEditedValues({});
    };

    // Define los estilos CSS para los botones y sus efectos de hover
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
        <div className="p-4">
            <Card bg="dark" text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Lista de Dispositivos</span>
                        <Button
                            variant="success"
                            onClick={handleCreateDevice}
                            style={buttonStyle}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                            }}
                        >
                            Crear Dispositivo
                        </Button>
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
                    <Table striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr>
                                <th className="text-center">Dispositivo</th>
                                <th className="text-center">Periféricos</th>
                                <th className="text-center">Descripción</th>
                                <th className="text-center">Estado</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDevices.map((device) => (
                                <tr key={device.LP_identificador}>
                                    <td className="text-center">{device.TP_nombre}</td>
                                    <td className="text-center">{device.EA_nombre}</td>
                                    <td className="text-center">{device.AO_descripcion}</td>
                                    <td className="text-center">{device.AO_estado}</td>
                                    <td className="text-center">
                                        <Button
                                            variant="primary"
                                            onClick={() => handleEditDevice(device)}
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
                                        {' '}
                                        <Button
                                            variant="danger"
                                            onClick={() => setDeleteConfirmation(true)}
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
                            <Form.Control
                                type="text"
                                name="TP_nombre"
                                value={editedValues.TP_nombre || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Periféricos</Form.Label>
                            <Form.Control
                                type="text"
                                name="EA_nombre"
                                value={editedValues.EA_nombre || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="AO_descripcion"
                                value={editedValues.AO_descripcion || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                name="AO_estado"
                                value={editedValues.AO_estado || ''}
                                onChange={handleInputChange}
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
                        onClick={handleCreateDevice}
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
            <Modal show={selectedDevice !== null} onHide={() => setSelectedDevice(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Dispositivo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Dispositivo</Form.Label>
                            <Form.Control
                                type="text"
                                name="TP_nombre"
                                value={editedValues.TP_nombre || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Periféricos</Form.Label>
                            <Form.Control
                                type="text"
                                name="EA_nombre"
                                value={editedValues.EA_nombre || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="AO_descripcion"
                                value={editedValues.AO_descripcion || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                name="AO_estado"
                                value={editedValues.AO_estado || ''}
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
                        onClick={confirmDeleteDevice}
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
        const { data: Dispositivos } = await axios.get(
            "http://localhost:3000/api/config/BibliotecaDispositivos"
        );
        return {
            props: {
                Dispositivos,
            },
        };
    } catch (error) {
        console.log(error);
    }
};
