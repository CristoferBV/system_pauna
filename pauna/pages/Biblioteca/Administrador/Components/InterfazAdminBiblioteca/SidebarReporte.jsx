import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Card, InputGroup, FormControl } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function SidebarReporte({ Reporte }) {
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

    const [Reportes, setReportes] = useState([]);

    const [reporte, setReporte] = useState({
        AO_descripcion: "",
        AO_estado: "",
    })

    const handleChange = ({ target: { name, value } }) => {
        if (name in activo) {
            setActivo({ ...activo, [name]: value });
        } else if (name in type){
            setType({...type,[name]:value})
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

    const handleDeleteActivo = async (activoID) => {
        const res = await axios
          .delete("/api/config/BibliotecaDispositivos", {data: { AO_identificador:activoID}})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(res)
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

    const cancelDeleteDevice = () => {
        setDeleteConfirmation(false);
    };

        const filteredReporte = Reportes.filter((reporte) => {
            return (
              (reporte.UO_primer_nombre || '').toLowerCase().includes(searchText.toLowerCase()) ||
              (reporte.UO_identificador || '').toLowerCase().includes(searchText.toLowerCase()) ||
              (reporte.TP_nombre || '').toLowerCase().includes(searchText.toLowerCase()) ||
              (reporte.LP_fechaDevolucion || '').toLowerCase().includes(searchText.toLowerCase()) ||
              (reporte.RE_observacion || '').toLowerCase().includes(searchText.toLowerCase())
              );
            });

        const handleEditDispositivo = (reporte) => {
            setDispositivos(reporte);
            handleToggleForm('edit')
        };

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
        router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarReporte");
    }

    const loadDevices = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/config/BibliotecaReportes");
            const reportes = response.data; // Accede a los dispositivos desde la respuesta
            setReportes(reportes); // Almacena los dispositivos en el estado

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
            <Card style={{ backgroundColor: '#2F3E5B', color: 'white' }} text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Lista de Reportes</span>
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
                                Crear Reporte
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
                                Generar Reporte
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
                    <Table style={{ backgroundColor: '#252440', color: 'white' }} striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th className="text-center">Nombre Estudiante</th>
                                <th className="text-center">Cédula</th>
                                <th className="text-center">Dispositivo</th>
                                <th className="text-center">Fecha Devolucion</th>
                                <th className="text-center">Observacion</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReporte.map((reporte) => (
                                <tr key={reporte.LP_identificador}>
                                    <td className="text-center">{reporte.UO_primer_nombre}</td>
                                    <td className="text-center">{reporte.UO_identificador}</td>
                                    <td className="text-center">{reporte.TP_nombre}</td>
                                    <td className="text-center">{new Date (reporte.LP_fechaDevolucion).toISOString().slice(0, 10)}</td>
                                    <td className="text-center">{reporte.RE_observacion}</td>
                                    <td className="text-center">
                                        <Button
                                            variant="primary"
                                            onClick={() => handleEditDispositivo(device)}
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
                                            onClick={() => handleDeleteActivo(device.AO_identificador)}
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
                    <Modal.Title>Crear Reporte</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="AO_descripcion"
                                value={reporte.UO_primer_nombre}
                                onChange={handleChange}
                            />

                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="AO_descripcion"
                                value={reporte.AO_descripcion}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                name="AO_estado"
                                value={reporte.AO_estado}
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
                            <Form.Label>Codigo ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="TP_identificador"
                                value={reporte.TP_identificador}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="TP_nombre"
                                value={reporte.TP_nombre}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="TP_descripcion"
                                value={reporte.TP_descripcion}
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
                            <Form.Select
                                name="TP_identificador"
                                value={reporte.TP_identificador}
                                onChange={handleChange}
                            >
                            </Form.Select>
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
                        onClick={""}
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
        const response = await axios.get("http://localhost:3000/api/config/BibliotecaReporte");
        const data = response.data;

        if (data && data.Reportes) {
            const { Reportes } = data;
            return {
                props: {
                    Reportes
                },
            };
        } else {
            return {
                props: {
                  Reportes: [],
                },
            };
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                Reportes: [],
            },
        };
    }
};
