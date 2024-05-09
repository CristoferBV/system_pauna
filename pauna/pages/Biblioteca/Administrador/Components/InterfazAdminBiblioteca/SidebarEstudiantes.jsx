import React, { useState } from 'react';
import axios from 'axios';
import { Table, Card, FormControl, InputGroup, Button, Modal, Form } from 'react-bootstrap';

export default function SidebarEstudiantes({ Estudiantes }) {
    const [searchText, setSearchText] = useState('');
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editedValues, setEditedValues] = useState({});
    const [selectedEstudiante, setSelectedEstudiante] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const filteredEstudiantes = Estudiantes.filter((estudiante) => {
        return (
            (estudiante.UO_primer_nombre || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.UO_identificador || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.EE_nivel || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.TP_nombre || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.AO_identificador || '').toString().toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.EE_campus || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.CE_correoElectronico || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.TO_numero || '').toLowerCase().includes(searchText.toLowerCase())
        );
    });
    

    const confirmDeleteEstudiante = (estudiante) => {
        // Configura el estudiante seleccionado para eliminar
        setSelectedEstudiante(estudiante);
        // Muestra el formulario de confirmación de eliminación
        setShowDeleteConfirmation(true);
    };

    const updateEstudiante = async (updatedEstudiante) => {
        try {
            // Realiza una solicitud HTTP (por ejemplo, con Axios) para actualizar el estudiante en el servidor
            await axios.put('URL_de_tu_API', updatedEstudiante);
            // Lógica adicional, como actualizar el estado local con los nuevos datos si es necesario
        } catch (error) {
            console.error('Error al actualizar el estudiante:', error);
        }
    };

    const createEstudiante = async (newEstudiante) => {
        try {
            // Realiza una solicitud HTTP (por ejemplo, con Axios) para crear un nuevo estudiante en el servidor
            await axios.post('URL_de_tu_API', newEstudiante);
            // Lógica adicional, como actualizar el estado local con los nuevos datos si es necesario
            setShowCreateForm(false); // Cierra el modal después de crear el estudiante
        } catch (error) {
            console.error('Error al crear el estudiante:', error);
        }
    };

    const handleCreateEstudiante = () => {
        setShowCreateForm(true);
        setEditedValues({});
    };


    // Función para abrir el formulario de edición
    const handleEditEstudiante = (estudiante) => {
        setSelectedEstudiante(estudiante);
        setEditedValues({ ...estudiante });
        setShowEditForm(true);
    };

    // Función para guardar cambios en la edición del estudiante
    const handleSaveEditEstudiante = () => {
        // Lógica para guardar los cambios del estudiante (usar 'updateEstudiante' aquí)
        updateEstudiante(editedValues);
        setShowEditForm(false);
    };

    const buttonStyle = {
        backgroundColor: '#233C5B',
        color: 'white',
        border: 'none', // Agregar un borde blanco
        transition: 'background-color 0.3s, border 0.3s', // También añadir la transición para el borde
    };

    const buttonHoverStyle = {
        backgroundColor: '#152C4A',  // Nuevo color de fondo al pasar el cursor
        color: 'black',  // Texto de color oscuro
        border: '1px solid white',
    };


    return (
        <div className="p-8">
            <Card style={{ backgroundColor: '#DEEFE7', color: 'white' }} text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span className='text-[#293659] font-semibold'>Lista de Estudiantes</span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Buscar estudiante..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </InputGroup>
                    <Table 
                        striped
                        bordered
                        hover
                        responsive>
                        <thead>
                            <tr>
                                <th className="text-center" style={{ color: "#293659" }}>Nombre</th>
                                <th className="text-center" style={{ color: "#293659" }}>Cedula</th>
                                <th className="text-center" style={{ color: "#293659" }}>Nivel</th>
                                <th className="text-center" style={{ color: "#293659" }}>Campus</th>
                                <th className="text-center" style={{ color: "#293659" }}>Correo</th>
                                <th className="text-center" style={{ color: "#293659" }}>Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEstudiantes.map((estudiante, index) => (
                                <tr key={`${estudiante.EE_idenficador}_${index}`}>
                                    <td className="text-center">{estudiante.UO_primer_nombre}</td>
                                    <td className="text-center">{estudiante.UO_identificador}</td>
                                    <td className="text-center">{estudiante.EE_nivel}</td>
                                    <td className="text-center">{estudiante.EE_campus}</td>
                                    <td className="text-center">{estudiante.CE_correoElectronico}</td>
                                    <td className="text-center">{estudiante.TO_numero}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <Modal show={showEditForm} onHide={() => setShowEditForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Estudiante</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre del estudiante"
                                value={editedValues.UO_primer_nombre}
                                onChange={(e) => setEditedValues({ ...editedValues, UO_primer_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cédula</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cédula del estudiante"
                                value={editedValues.UO_identificador}
                                onChange={(e) => setEditedValues({ ...editedValues, UO_identificador: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nivel</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nivel del estudiante"
                                value={editedValues.EE_nivel}
                                onChange={(e) => setEditedValues({ ...editedValues, EE_nivel: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Otro Campus</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Campus"
                                value={editedValues.EE_campus}
                                onChange={(e) => setEditedValues({ ...editedValues, EE_campus: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Correo Electrónico del estudiante"
                                value={editedValues["CE-correoElectronico"]}
                                onChange={(e) => setEditedValues({ ...editedValues, ["CE-correoElectronico"]: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Teléfono del estudiante"
                                value={editedValues["TO-numero"]}
                                onChange={(e) => setEditedValues({ ...editedValues, ["TO-numero"]: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowEditForm(false)} style={buttonStyle} onMouseEnter={(e) => {
                        e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                    }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
                        Cerrar
                    </Button>
                    <Button onClick={handleSaveEditEstudiante} style={buttonStyle} onMouseEnter={(e) => {
                        e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                    }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteConfirmation} onHide={() => setShowDeleteConfirmation(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro de que deseas eliminar a este estudiante?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowDeleteConfirmation(false)} style={buttonStyle} onMouseEnter={(e) => {
                        e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                    }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
                        Cancelar
                    </Button>
                    <Button onClick={confirmDeleteEstudiante} style={buttonStyle} onMouseEnter={(e) => {
                        e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                    }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export const getServerSideProps = async (context) => {
    try {
        const { data: Estudiantes } = await axios.get(
            process.env.LINK+"/api/config/BibliotecaEstudiantes"
        );
        return {
            props: {
                Estudiantes,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                Estudiantes: [],
            },
        };
    }
};
