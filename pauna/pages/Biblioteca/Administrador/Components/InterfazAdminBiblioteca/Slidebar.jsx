import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Card, InputGroup, FormControl } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Slidebar({ types }) {
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [editedValues, setEditedValues] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showTipoForm, setShowTipoForm] = useState(false);
    const router = useRouter();

    useEffect(() => {
        loadDevices();
    }, []);

    const [Dispositivos, setDispositivos] = useState([]);

    const [activo, setActivo] = useState({
        AO_descripcion: "",
        AO_estado: "",
    })

    const [type, setType] = useState({
        tipo: "Type",
        TP_identificador: "",
        TP_nombre: "",
        TP_descripcion: "",
    })
    
    const handleChange = ({ target: { name, value } }) => {
        if (name === "TP_identificador") {
            setType({ ...type, TP_identificador: value });
        } else if (name in activo) {
            setActivo({ ...activo, [name]: value });
        }
    };

    const handleSubmit = async (data) => {
        console.log("hola");
        const res = await axios
            .post("/api/config/BibliotecaDispositivos", data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(res)
    };

    const handleSave = (object) => {
        handleSubmit(object)
        setShowCreateForm(true);
        setTimeout(() => {
            setShowCreateForm(false);
        }, 2000);
        reloadPage();
    };

    const handleSaveTipo = (object) => {
        handleSubmit(object)
        setShowTipoForm(true);
        setTimeout(() => {
            setShowTipoForm(false);
        }, 2000);
        reloadPage();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedValues({
            ...editedValues,
            [name]: value,
        });
    };


    const handleEditDevice = (device) => {
        setSelectedDevice(device);
        setEditedValues({
            TP_identificador: device.TP_identificador|| "",
            TP_nombre: device.TP_nombre || "",
            TP_cantidad: device.TP_cantidad || "",
            EA_nombre: device.EA_nombre || "",
            AO_descripcion: device.AO_descripcion || "",
            AO_estado: device.AO_estado || "",
        });
    };

    const confirmDeleteDevice = () => {
        // Realizar la acción para confirmar la eliminación aquí
        setDeleteConfirmation(false);
    };

    const cancelDeleteDevice = () => {
        setDeleteConfirmation(false);
    };


    const filteredDevices = Dispositivos.Dispositivos && Array.isArray(Dispositivos.Dispositivos)
        ? Dispositivos.Dispositivos.filter((device) => {
            return (
                (device.AO_identificador &&
                    ((typeof device.AO_identificador === 'string' && /^\d+$/.test(device.AO_identificador)) || (typeof device.AO_identificador === 'number')) &&
                    device.AO_identificador.toString().toLowerCase().includes(searchText.toLowerCase())
                ) ||
                (device.TP_nombre && device.TP_nombre.toLowerCase().includes(searchText.toLowerCase())) ||
                (device.TP_cantidad &&
                    ((typeof device.TP_cantidad === 'string' && /^\d+$/.test(device.TP_cantidad)) || (typeof device.TP_cantidad === 'number')) &&
                    device.TP_cantidad.toString().toLowerCase().includes(searchText.toLowerCase())
                ) ||
                (device.EA_nombre && device.EA_nombre.toLowerCase().includes(searchText.toLowerCase())) ||
                (device.AO_descripcion && device.AO_descripcion.toLowerCase().includes(searchText.toLowerCase())) ||
                (device.AO_estado && device.AO_estado.toLowerCase().includes(searchText.toLowerCase()))
            );
        })
        : [];



    const handleCreateDevice = () => {
        setShowCreateForm(true);
        setEditedValues({});
        setSelectedDevice(null);
    };

    const handleCreateTipo = () => {
        setShowTipoForm(true);
        setEditedValues({});
        setSelectedDevice(null);
        // Aquí puedes definir la lógica para mostrar un formulario o realizar otras acciones relacionadas con la creación de tipos.
    };

    const handleCloseForm = (key) => {
        handleToggleForm(key);
    };

    const handleToggleForm = (key) => {
        setShowFormState((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const reloadPage = () => {
        router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/Slidebar");
    }

    const loadDevices = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/config/BibliotecaDispositivos");
            const devices = response.data; // Accede a los dispositivos desde la respuesta
            setDispositivos(devices); // Almacena los dispositivos en el estado

            // Resto de tu código...
        } catch (error) {
            console.error('Error al cargar dispositivos:', error);
        }
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
        <div className="p-4">
            <Card bg="secondary" text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Lista de Dispositivos</span>
                        <div>
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
                            <Button className='ml-2'
                                variant="info"
                                onClick={handleCreateTipo}
                                style={buttonStyle}  // Puedes utilizar el mismo estilo o personalizarlo
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                                }}
                            >
                                Crear Tipo
                            </Button>
                        </div>
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
                    <Table variant='secondary' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th className="text-center">Codigo ID</th>
                                <th className="text-center">Dispositivo</th>
                                <th className="text-center">Descripción</th>
                                <th className="text-center">Estado</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDevices.map((device) => (
                                <tr key={device.LP_identificador}>
                                    <td className="text-center">{device.AO_identificador}</td>
                                    <td className="text-center">{device.TP_nombre}</td>
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
                            <Form.Select
                                name="TP_identificador"
                                value={type.TP_identificador}
                                onChange={handleChange}
                            >
                                {types.map((type) => (
                                    <option key={type.TP_identificador} value={type.TP_identificador}>
                                        {type.TP_nombre}
                                    </option>
                                ))}
                            </Form.Select>

                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="AO_descripcion"
                                value={activo.AO_descripcion}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                name="AO_estado"
                                value={activo.AO_estado}
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
                        onClick={() => handleSave({
                            tipo: "Activo",
                            TP_nombre: type.TP_nombre,
                            AO_descripcion: activo.AO_descripcion,
                            AO_estado: activo.AO_estado,
                            AO_identificador_tipo: type.TP_identificador
                        })}
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
            <Modal show={showTipoForm} onHide={() => setShowTipoForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Tipo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="TP_nombre"
                                value={type.TP_nombre}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="TP_descripcion"
                                value={type.TP_descripcion}
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
                        onClick={() => handleSaveTipo({
                            tipo: "Activo",
                            TP_nombre: type.TP_nombre,
                            TP_descripcion: type.TP_descripcion
                        })}
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
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                type="text"
                                name="TP_cantidad"
                                value={editedValues.TP_cantidad || ''}
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
        </div >
    );
}

export const getServerSideProps = async (context) => {
    try {
        const response = await axios.get("http://localhost:3000/api/config/BibliotecaDispositivos");
        const data = response.data;

        if (data && data.Dispositivos && data.types) {
            const { Dispositivos, types } = data;
            return {
                props: {
                    Dispositivos,
                    types
                },
            };
        } else {
            return {
                props: {
                    Dispositivos: [],
                    types: [],
                },
            };
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                Dispositivos: [],
                types: [],
            },
        };
    }
};


