import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Card, Alert, InputGroup, FormControl } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function SidebarDevoluciones({ Devoluciones }) {
    const [searchText, setSearchText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedDevolucion, setEditedDevolucion] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newDevolucion, setNewDevolucion] = useState({});
    const [alertVisible, setAlertVisible] = useState(false);
    const [showForm, setShowForm] = useState(false); // Agregado para mostrar el formulario
    const router = useRouter();

    const [devolucion, setdevolucion] = useState({
        UO_primer_nombre: '',
        UO_identificador: '',
        TP_nombre: '',
        CA_nombre: '',
        LP_fechaDevolucion: '',
    });




    // const loadDevoluciones = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:3000/api/config/BibliotecaDevoluciones");
    //         const devoluciones = response.data; // Accede a los dispositivos desde la respuesta
    //         setDevoluciones(devoluciones); // Almacena los dispositivos en el estado

    //         // Resto de tu código...
    //     } catch (error) {
    //         console.error('Error al cargar dispositivos:', error);
    //     }
    // }

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
        // Puedes acceder a los valores del formulario en el objeto devolucion
        setShowForm(false); // Oculta el formulario después de enviar
    };

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

    const filteredDevoluciones = Array.isArray(Devoluciones)
        ? Devoluciones.filter((devolucion) => {
            return (
                (devolucion.UO_primer_nombre && devolucion.UO_primer_nombre.toLowerCase().includes(searchText.toLowerCase())) ||
                (devolucion.UO_identificador && devolucion.UO_identificador.toLowerCase().includes(searchText.toLowerCase())) ||
                (devolucion.TP_nombre && devolucion.TP_nombre.toLowerCase().includes(searchText.toLowerCase())) ||
                (devolucion.CA_nombre && devolucion.CA_nombre.toLowerCase().includes(searchText.toLowerCase())) ||
                (devolucion.LP_fechaDevolucion && devolucion.LP_fechaDevolucion.toLowerCase().includes(searchText.toLowerCase()))
            );
        })
        : [];


    const reloadPage = () => {
        router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarDevoluciones");
    }

    return (
        <div className="flex-1 p-8">
            <Card bg="secondary" text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Devoluciones</span>
                        <div>
                            <Button variant="primary" onClick={createDevolucion} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                                }} className="mr-2">
                                Crear Devolución
                            </Button>
                            <Button variant="danger" onClick={showAlert} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                                }}>
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
                    <Table striped bordered hover variant="secondary" responsive>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cedula</th>
                                <th>Dispositivo</th>
                                <th>Carrera</th>
                                <th>Fecha entregado</th>
                                <th>Administrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDevoluciones.map((devolucion, index) => (
                                <tr key={index}>
                                    <td>{devolucion.PrimerNombreUsuario}</td>
                                    <td>{devolucion.IdentificadorUsuario}</td>
                                    <td>{devolucion.NombreTipo}</td>
                                    <td>{devolucion.NombreCarrera}</td>
                                    <td>{new Date(devolucion.FechaDevolucion).toISOString().slice(0, 10)}</td>
                                    <td>
                                        <Button variant="light" className="ml-2" onClick={() => handleEdit(devolucion)} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                                            }}>
                                            Editar
                                        </Button>
                                        <Button variant="danger" className="ml-2" onClick={() => handleDelete(devolucion)} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                                            }}>
                                            Eliminar
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
                    <Button variant="secondary" onClick={() => setEditMode(false)} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={saveChanges} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
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
                    <Button variant="secondary" onClick={() => setDeleteConfirmation(false)} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmDelete} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
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
                    <Button variant="secondary" onClick={() => setShowCreateForm(false)} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={submitNewDevolucion} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                        }}>
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
                                    value={devolucion.nombre}
                                    onChange={(e) =>
                                        setdevolucion({ ...devolucion, nombre: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Cédula</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={devolucion.cedula}
                                    onChange={(e) =>
                                        setdevolucion({ ...devolucion, cedula: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    value={devolucion.descripcion}
                                    onChange={(e) =>
                                        setdevolucion({ ...devolucion, descripcion: e.target.value })
                                    }
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowForm(false)} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                            }}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={submitForm} style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                            }}>
                            Enviar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

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
                Devoluciones: [],
            },
        };

    }
};

