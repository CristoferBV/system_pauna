import React, { useState } from 'react';
import axios from 'axios';
import { Table, Button, Card, InputGroup, FormControl, Modal, Form } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Horario({ Horarios }) {
    const [searchText, setSearchText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedValues, setEditedValues] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedValues({
            ...editedValues,
            [name]: value,
        });
    };

    const handleEdit = (horario) => {
        setEditedValues(horario);
        setEditMode(true);
    };

    const saveChanges = () => {
        // Implementa la lógica para guardar los cambios aquí
        setEditMode(false);
    };

    const handleDelete = () => {
        setDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        // Implementa la lógica para eliminar el horario aquí
        setDeleteConfirmation(false);
    };

    const createHorario = () => {
        setShowCreateForm(true);
    };

    

    return (
        <div className="flex-1 p-8">
            <Card bg="dark" text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Horario</span>
                        <Button variant="success" onClick={createHorario}>
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
                    <Table striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr>
                                <th className="text-center">Hora</th>
                                <th className="text-center">Fecha</th>
                                <th className="text-center">Estado</th>
                                <th className="text-center">Administrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Horarios
                                .filter((horario) =>
                                    horario.HO_fecha.toLowerCase().includes(searchText.toLowerCase()) ||
                                    horario.HO_hora.toLowerCase().includes(searchText.toLowerCase()) ||
                                    horario.HO_estado.toLowerCase().includes(searchText.toLowerCase())
                                )
                                .map((horario) => (
                                    <tr key={horario.HO_identificador}>
                                        <td className="text-center">{horario.HO_fecha}</td>
                                        <td className="text-center">{horario.HO_hora}</td>
                                        <td className="text-center">{horario.HO_estado}</td>
                                        <td className="text-center">
                                            <Button variant="light" className="ml-2" onClick={() => handleEdit(horario)}>
                                                Editar
                                            </Button>
                                            <Button variant="light" className="ml-2" onClick={handleDelete}>
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

            {/* Modal de edición */}
            <Modal show={editMode} onHide={() => setEditMode(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Horario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                type="text"
                                name="HO_fecha"
                                value={editedValues.HO_fecha}
                                onChange={(e) => setEditedValues({ ...editedValues, HO_fecha: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hora</Form.Label>
                            <Form.Control
                                type="text"
                                name="HO_hora"
                                value={editedValues.HO_hora}
                                onChange={(e) => setEditedValues({ ...editedValues, HO_hora: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                name="HO_estado"
                                value={editedValues.HO_estado}
                                onChange={(e) => setEditedValues({ ...editedValues, HO_estado: e.target.value })}
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

            {/* Modal de confirmación de eliminación */}
            <Modal show={deleteConfirmation} onHide={() => setDeleteConfirmation(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro de que deseas eliminar este horario?
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

            {/* Modal de creación de horario */}
            <Modal show={showCreateForm} onHide={() => setShowCreateForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Horario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Hora</Form.Label>
                            <Form.Control
                                type="text"
                                name="HO_hora"
                                onChange={(e) => handleInputChange }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                type="text"
                                name="HO_fecha"
                                onChange={(e) => Han }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                name="HO_estado"
                                onChange={(e) => handleInputChange }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCreateForm(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => handleInputChange }>
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
            "http://localhost:3000/api/config/BibliotecaHorario"
        );
        return {
            props: {
                Horarios,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                Horarios: [], // Puedes proporcionar un valor predeterminado en caso de error.
            },
        };
        
    }
};
