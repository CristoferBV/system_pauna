import React, { useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Card, InputGroup, FormControl } from 'react-bootstrap';

export default function Slidebar({ Dispositivos }) {
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [editedValues, setEditedValues] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [searchText, setSearchText] = useState(''); // Estado para almacenar el texto de búsqueda

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedValues({
            ...editedValues,
            [name]: value,
        });
    };

    const handleEditDevice = (device) => {
        // Muestra el formulario de edición solo para el dispositivo seleccionado
        setSelectedDevice(device);
        // Inicializa los valores editables con los datos actuales del dispositivo
        setEditedValues(device);
    };

    const confirmDeleteDevice = () => {
        // Realizar la acción para confirmar la eliminación
        // Cerrar el modal de eliminación
        setDeleteConfirmation(false);
    };

    const cancelDeleteDevice = () => {
        // Cancelar la eliminación
        // Cerrar el modal de eliminación
        setDeleteConfirmation(false);
    };

    const filteredDevices = Dispositivos.filter((device) => {
        // Filtrar los dispositivos que coinciden con el texto de búsqueda
        return (
            device.TP_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
            device.EA_nombre.toLowerCase().includes(searchText.toLowerCase()) ||
            device.AO_descripcion.toLowerCase().includes(searchText.toLowerCase()) ||
            device.AO_estado.toLowerCase().includes(searchText.toLowerCase())
        );
    });


    return (
        <div className="p-4">
            <Card bg="dark" text="white">
                <Card.Header>Lista de Dispositivos</Card.Header>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Buscar dispositivo..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </InputGroup>
                    <Table striped bordered hover variant="dark">
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
                                        <Button variant="primary" onClick={() => handleEditDevice(device)}>Editar</Button>
                                        {' '}
                                        <Button variant="danger" onClick={() => setDeleteConfirmation(true)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <Modal show={selectedDevice !== null} onHide={() => setSelectedDevice(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Dispositivo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedDevice && (
                        <Form>
                            <Form.Group>
                                <Form.Label>Dispositivo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="TP_nombre"
                                    value={editedValues.TP_nombre}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Periféricos</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="EA_nombre"
                                    value={editedValues.EA_nombre}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="AO_descripcion"
                                    value={editedValues.AO_descripcion}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="AO_estado"
                                    value={editedValues.AO_estado}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSelectedDevice(null)}>Cancelar</Button>
                    <Button variant="primary" onClick={handleEditDevice}>Guardar Cambios</Button>
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
                    <Button variant="secondary" onClick={cancelDeleteDevice}>Cancelar</Button>
                    <Button variant="danger" onClick={confirmDeleteDevice}>Eliminar</Button>
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
