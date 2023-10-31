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
            (estudiante.TP_identificador || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.AO_descripcion || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante['DO-nombre'] || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.EE_campus || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.HO_fecha || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.LP_fechaDevolucion || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.RE_observacion || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante.CE_correoElectronico || '').toLowerCase().includes(searchText.toLowerCase()) ||
            (estudiante["TO-numero"] || '').toLowerCase().includes(searchText.toLowerCase())
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


    return (
        <div className="p-8">
            <Card bg="secondary" text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Lista de Estudiantes</span>
                        <Button
                            variant="success"
                            onClick={handleCreateEstudiante}
                        >
                            Crear Estudiante
                        </Button>
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
                    <Table variant="secondary" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cedula</th>
                                <th>Nivel</th>
                                <th>Requiere</th>
                                <th>Activo</th>
                                <th>Caracteristicas</th>
                                <th>Perteneciente</th>
                                <th className="text-nowrap">Otro Campus</th>
                                <th>Fecha de prestamo</th>
                                <th>Fecha Devolucion</th>
                                <th>Observacion</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th className="text-nowrap">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEstudiantes.map((estudiante) => (
                                <tr key={estudiante.EE_idenficador}>
                                    <td className="text-nowrap">{estudiante.UO_primer_nombre}</td>
                                    <td className="text-nowrap">{estudiante.UO_identificador}</td>
                                    <td className="text-nowrap">{estudiante.EE_nivel}</td>
                                    <td className="text-nowrap">{estudiante.TP_nombre}</td>
                                    <td className="text-nowrap">{estudiante.TP_identificador}</td>
                                    <td className="text-nowrap">{estudiante.AO_descripcion}</td>
                                    <td className="text-nowrap">{estudiante['DO-nombre']}</td>
                                    <td className="text-nowrap">{estudiante.EE_campus}</td>
                                    <td className="text-nowrap">{estudiante.HO_fecha}</td>
                                    <td className="text-nowrap">{estudiante.LP_fechaDevolucion}</td>
                                    <td className="text-nowrap">{estudiante.RE_observacion}</td>
                                    <td className="text-nowrap">{estudiante["CE-correoElectronico"]}</td>
                                    <td className="text-nowrap">{estudiante["TO-numero"]}</td>
                                    <td className="d-flex align-items-center">
                                        <Button variant="primary"
                                            onClick={handleEditEstudiante}

                                        > Editar
                                        </Button>
                                        <Button variant="danger" className='ml-2' onClick={() => confirmDeleteEstudiante(estudiante)}>
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
                    <Modal.Title>Crear Estudiante</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre del estudiante"
                                value={editedValues.UO_primer_nombre}
                                onChange={(e) => setEditedValues({ ...editedValues, UO_primer_nombre: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cédula</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cédula del estudiante"
                                value={editedValues.UO_identificador} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, UO_identificador: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nivel</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nivel del estudiante"
                                value={editedValues.EE_nivel} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, EE_nivel: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Requiere</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dispositivo del estudiante"
                                value={editedValues.TP_nombre} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, TP_nombre: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Activo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Activo del estudiante"
                                value={editedValues.TP_identificador} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, TP_identificador: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Caracteristicas</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Caracteristicas"
                                value={editedValues.AO_descripcion} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, AO_descripcion: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Perteneciente</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Perteneciente"
                                value={editedValues['DO-nombre']} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, ['DO-nombre']: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Otro Campus</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Campus"
                                value={editedValues.EE_campus} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, EE_campus: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha de Prestamo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Fecha de Prestamo"
                                value={editedValues.HO_fecha} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, HO_fecha: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha de Devolucion</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Fecha de Devolucion"
                                value={editedValues.LP_fechaDevolucion} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, LP_fechaDevolucion: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Observación</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Observación"
                                value={editedValues.RE_observacion} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, RE_observacion: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Correo del estudiante"
                                value={editedValues["CE-correoElectronico"]} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, ["CE-correoElectronico"]: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Teléfono del estudiante"
                                value={editedValues["TO-numero"]} // Reemplaza 'nombre' con el campo apropiado
                                onChange={(e) => setEditedValues({ ...editedValues, ["TO-numero"]: e.target.value })} // Reemplaza 'nombre' con el campo apropiado
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCreateForm(false)}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={() => createEstudiante(editedValues)}> {/* Reemplaza 'createEstudiante' con la función adecuada */}
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
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
                            <Form.Label>Requiere</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dispositivo del estudiante"
                                value={editedValues.TP_nombre}
                                onChange={(e) => setEditedValues({ ...editedValues, TP_nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Activo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Activo del estudiante"
                                value={editedValues.TP_identificador}
                                onChange={(e) => setEditedValues({ ...editedValues, TP_identificador: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Características</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Características"
                                value={editedValues.AO_descripcion}
                                onChange={(e) => setEditedValues({ ...editedValues, AO_descripcion: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Perteneciente</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Perteneciente"
                                value={editedValues['DO-nombre']}
                                onChange={(e) => setEditedValues({ ...editedValues, ['DO-nombre']: e.target.value })}
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
                            <Form.Label>Fecha de Prestamo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Fecha de Prestamo"
                                value={editedValues.HO_fecha}
                                onChange={(e) => setEditedValues({ ...editedValues, HO_fecha: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha de Devolucion</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Fecha de Devolucion"
                                value={editedValues.LP_fechaDevolucion}
                                onChange={(e) => setEditedValues({ ...editedValues, LP_fechaDevolucion: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Observación</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Observación"
                                value={editedValues.RE_observacion}
                                onChange={(e) => setEditedValues({ ...editedValues, RE_observacion: e.target.value })}
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
                    <Button variant="secondary" onClick={() => setShowEditForm(false)}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleSaveEditEstudiante}>
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
                    <Button variant="secondary" onClick={() => setShowDeleteConfirmation(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteEstudiante}>
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
            "http://localhost:3000/api/config/BibliotecaEstudiantes"
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
