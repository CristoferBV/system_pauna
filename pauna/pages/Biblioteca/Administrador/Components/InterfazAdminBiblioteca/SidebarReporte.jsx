import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Card, InputGroup, FormControl } from 'react-bootstrap';
import { useRouter } from 'next/router';
import jsPDF from 'jspdf';
import "jspdf-autotable";

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
        } else if (name in type) {
            setType({ ...type, [name]: value })
        }
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
            (reporte.EA_nombre || '').toLowerCase().includes(searchText.toLowerCase())
        );
    });

    const reloadPage = () => {
        router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarReporte");
    }

    const loadDevices = async () => {
        try {
            const response = await axios.get("/api/config/BibliotecaReportes");
            const reportes = response.data; 
            setReportes(reportes); 
        } catch (error) {
            console.error('Error al cargar dispositivos:', error);
        }
    }

    const buttonStyle = {
        backgroundColor: '#233C5B',
        color: 'white',
        border: 'none',
        transition: 'background-color 0.3s, border 0.3s', 
    };

    const buttonHoverStyle = {
        backgroundColor: '#152C4A',  
        color: 'black',  
        border: '1px solid white',
    };


    const exportCurrentjsPDF = (data) => {
        const doc = new jsPDF('p', 'pt', 'letter');

        const fontSize = 16;
        const tableFontSize = 12;
        doc.setFontSize(tableFontSize);
        doc.setFontSize(fontSize);
        const title = "PLATAFORMA ADMINISTRATIVA UNA";
        const subTitle = "Área de Reporte Generales de Citas";
        const titleWidth = doc.getStringUnitWidth(title) * fontSize;
        const pageWidth = doc.internal.pageSize.width;
        const titleXPosition = (pageWidth - titleWidth) / 2;
        const subTitleXPosition = (pageWidth - titleWidth) / 2.2;

        const titleYPosition = 30;
        const subTitleYPosition = 80;

        doc.text(title, titleXPosition, titleYPosition);
        doc.text(subTitle, subTitleXPosition, subTitleYPosition);
        const imageWidth = 100; 
        const imageHeight = 85; 
        const imageXPosition = 20; 
        const imageYPosition = titleYPosition - 25; 
        doc.addImage('/Logo-UNA-Rojo_HD.png', 'PNG', imageXPosition, imageYPosition, imageWidth, imageHeight);

        const tableColumns = [
            "Nombre Estudiante",
            "Cédula",
            "Dispositivo",
            "Periferico",
            "Fecha Devolucion",
        ];

        const tableData = data.map((reporte) => [
            reporte.UO_primer_nombre,
            reporte.UO_identificador,
            reporte.TP_nombre,
            reporte.EA_nombre,
            new Date(reporte.LP_fechaDevolucion).toISOString().slice(0, 10),
        ]);

        const startYPosition = titleYPosition + 70;

        doc.autoTable({
            head: [tableColumns],
            body: tableData,
            startY: startYPosition,
            styles: { fontSize: tableFontSize },
        });

        const totalYPosition = doc.autoTable.previous.finalY + 50;
        const totalXPosition = (pageWidth - doc.getStringUnitWidth(`Total: ${data.length}`) * fontSize) / 2;

        doc.text(`Total: ${data.length}`, totalXPosition, totalYPosition);

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

        doc.save(`Reporte_General_De_Devoluciones_${formattedDate}.pdf`);
    }

    return (
        <div className="p-4">
            <Card style={{ backgroundColor: '#DEEFE7', color: 'white' }} text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span className='text-black font-semibold'>Lista de Reportes</span>
                        <div>
                            <Button
                                className='ml-2'
                                variant="info"
                                onClick={() => exportCurrentjsPDF(filteredReporte)}
                                style={buttonStyle}
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
                                <th className="text-center">Periferico</th>
                                <th className="text-center">Fecha Devolucion</th>
                            </tr>
                        </thead>
                        <tbody>
                        {filteredReporte.map((reporte, index) => (
                            <tr key={`${reporte.LP_identificador}-${index}`}>
                            <td className="text-center">{reporte.UO_primer_nombre}</td>
                            <td className="text-center">{reporte.UO_identificador}</td>
                            <td className="text-center">{reporte.TP_nombre}</td>
                            <td className="text-center">{reporte.EA_nombre}</td>
                            <td className="text-center">{new Date(reporte.LP_fechaDevolucion).toISOString().slice(0, 10)}</td>
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
                    <Modal.Title>Crear Reporte</Modal.Title>
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
                    <Modal.Title>Editar Reporte</Modal.Title>
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
        const response = await axios.get("/api/config/BibliotecaReporte");
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
