'use client'
import Link from "next/link"
import React, { useState } from "react";
import { Row, Col, Container, Button, Form, Table } from "react-bootstrap"
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

export default function Report({ materials, colors, brands, ubications, types }) {
    const [showReportes, setShowReportes] = useState(false);
    const [showMovimientos, setShowMovimientos] = useState(false);

    const handleShowReportes = () => {
        setShowReportes(true);
        setShowMovimientos(false);
    };

    const handleShowMovimientos = () => {
        setShowReportes(false);
        setShowMovimientos(true);
    };
    const [material, setMaterial] = useState({
        ML_identificador: "",
        ML_descripcion: "",
        ML_observacion: "",
        ML_cantidad: "",
    })

    const [color, setColor] = useState({
        tipo: "Color",
        CR_identificador: "",
        CR_nombre: ""
    });
    const [brand, setBrand] = useState({
        tipo: "Brand",
        MC_identificador: "",
        MC_nombre: "",
        MC_descripcion: ""
    });
    const [ubication, setUbication] = useState({
        tipo: "Ubication",
        UN_identificador: "",
        UN_lugar: "",
        UN_descripcion: ""
    });
    const [type, setTypes] = useState({
        tipo: "Type",
        TP_identificador: "",
        TP_nombre: "",
        TP_descripcion: ""
    });

    const handleChange = ({ target: { name, value } }) => {
        if (name in color) {
            setColor({ ...color, [name]: value });
        } else if (name in brand) {
            setBrand({ ...brand, [name]: value });
        } else if (name in ubication) {
            setUbication({ ...ubication, [name]: value });
        } else if (name in type) {
            setTypes({ ...type, [name]: value });
        } else if (name in material) {
            setMaterial({ ...material, [name]: value });
        }
    };

    const [filterValue, setFilterValue] = useState('');
    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };
    const filteredMaterials = materials.filter((material) => {
        const description = material.ML_descripcion.toLowerCase();
        const name = material.MC_nombre.toLowerCase();
        const id = material.ML_identificador;
        const filterValueLowerCase = filterValue.toLowerCase();

        return description.includes(filterValueLowerCase) || name.includes(filterValueLowerCase) || id == filterValue;
    });

    const exportCurrentjsPDF = (items) => {
        const doc = new jsPDF('p', 'pt', 'letter');

        const fontSize = 16;
        const tableFontSize = 12; // Ajusta el tamaño de la fuente de la tabla según sea necesario
        doc.setFontSize(tableFontSize);
        const title = "PLATAFORMA ADMINISTRATIVA UNA";
        const subTitle = "Área de Reporte Generales de Materiales";
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('es-ES', options);

        // Set font size
        doc.setFontSize(fontSize);

        const titleWidth = doc.getStringUnitWidth(title) * fontSize;
        const subTitleWidth = doc.getStringUnitWidth(subTitle) * fontSize;
        const dateWidth = doc.getStringUnitWidth(formattedDate) * fontSize;

        const pageWidth = doc.internal.pageSize.width;
        const titleXPosition = (pageWidth - titleWidth) / 2;
        const subTitleXPosition = (pageWidth - subTitleWidth) / 2;
        const dateXPosition = (pageWidth - dateWidth) / 2;
        // Adjust the vertical positions based on your needs
        const titleYPosition = 30;
        const subTitleYPosition = 70;
        const dateYPosition = 90;




        doc.text(title, titleXPosition, titleYPosition);
        doc.text(subTitle, subTitleXPosition, subTitleYPosition);
        doc.text(formattedDate, dateXPosition, dateYPosition);
        // Add an image to the left
        const imageWidth = 100; // Adjust the width of the image as needed
        const imageHeight = 85; // Adjust the height of the image as needed
        const imageXPosition = 20; // Adjust the X position of the image as needed
        const imageYPosition = titleYPosition - 25; // Adjust the Y position of the image as needed

        doc.addImage('/CampusCOTO.png', 'PNG', imageXPosition, imageYPosition, imageWidth, imageHeight);

        const tableColumns = [
            "Codigo",
            "Nombre",
            "Marca",
            "Cantidad",
            "Observaciones"
        ];

        const tableData = items.map((item) => [
            item.ML_identificador,
            item.ML_descripcion,
            item.ML_observacion,
            item.ML_cantidad,
        ]);
        const totalCantidad = items.reduce((total, item) => total + item.ML_cantidad, 0);

        // Adjust the startY position based on your title and subtitle
        const tableStartYPosition = Math.max(titleYPosition, dateYPosition) + 20;

        doc.autoTable({
            head: [tableColumns],
            body: tableData,
            startY: tableStartYPosition, // Adjust as needed based on your title and subtitle
            styles: { fontSize: tableFontSize },
        });
        const totalYPosition = doc.autoTable.previous.finalY + 20; // Ajustar según sea necesario
        const totalXPosition = (pageWidth - doc.getStringUnitWidth(`Total de materiales: ${totalCantidad}`) * fontSize) / 2;
        doc.text(`Total de materiales: ${totalCantidad}`, totalXPosition, totalYPosition);





        doc.save(`Reporte_General_De_Materiales_${formattedDate}.pdf`);
    }

    return (
        <div>
            <Container style={{ marginTop: '8rem', marginBottom: '8rem' }}>
                <Container style={{ padding: '2rem', marginRight: '0.8rem' }}>
                    <h1 className="text-center">Reportes y Movimientos</h1>
                    <Row>
                        <Col>
                            <Button
                                variant="primary"
                                type="submit"
                                style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                                onClick={handleShowReportes}
                            >
                                Mostrar Reportes
                            </Button>
                        </Col>
                        <Col className="text-end">
                            <Button
                                variant="primary"
                                type="submit"
                                style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                                onClick={handleShowMovimientos}
                            >
                                Mostrar Movimientos
                            </Button>
                        </Col>
                    </Row>

                </Container>
                {showReportes && (
                    <Container className="rounded" style={{ backgroundColor: '#212529' }}>
                        {<Container style={{ marginTop: '0.6rem', padding: '2rem', marginRight: '0.8rem' }}>
                            <Container>
                                <Form style={{ fontSize: '1.1rem', padding: '1.1rem', maxWidth: '300px' }}>
                                    <Form.Control type="text" placeholder="Buscar..." value={filterValue} onChange={handleFilterChange} style={{
                                        backgroundColor: '#041a34', fontSize: '1.1rem', color: 'white', padding: '1rem', WebkitTextFillColor: 'white',
                                    }}>
                                    </Form.Control>
                                </Form>
                            </Container>
                            <Container style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                <Table variant="dark" striped bordered hover style={{ fontSize: '1.1rem' }}>
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Nombre</th>
                                            <th>Marca</th>
                                            <th>Cantidad</th>
                                            <th>Observaciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredMaterials.map((material) => (
                                            <tr key={material.ML_identificador}>
                                                <td>{material.ML_identificador}</td>
                                                <td>{material.ML_descripcion}</td>
                                                <td>{material.MC_nombre}</td>
                                                <td>{material.ML_cantidad}</td>
                                                <td>{material.ML_observacion}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Container>
                            <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                                onClick={() => exportCurrentjsPDF(filteredMaterials)}>
                                Generar
                            </Button>
                        </Container>}
                    </Container>
                )}
                {showMovimientos && (
                    <Container className="rounded" style={{ backgroundColor: '#212529', color: 'white' }}>
                        {<Container style={{ marginTop: '0.6rem', padding: '2rem', marginRight: '0.8rem' }}>
                            <Row >
                                <Col >
                                    <Form style={{ fontSize: '1.1rem', padding: '1.1rem', maxWidth: '300px' }}>
                                        <Form.Label className="text-center">Fecha de inicio</Form.Label>
                                        <Form.Control type="date" style={{
                                            backgroundColor: '#041a34', fontSize: '1.1rem', color: 'white', padding: '1rem', WebkitTextFillColor: 'white',
                                        }}>
                                        </Form.Control>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form style={{ fontSize: '1.1rem', padding: '1.1rem', maxWidth: '300px' }}>
                                        <Form.Label className="text-center">Fecha de finalizacion</Form.Label>
                                        <Form.Control type="date" style={{
                                            backgroundColor: '#041a34', fontSize: '1.1rem', color: 'white', padding: '1rem', WebkitTextFillColor: 'white',
                                        }}>
                                        </Form.Control>
                                    </Form>
                                </Col>
                            </Row>
                            <Container style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                <Table variant="dark" striped bordered hover style={{ fontSize: '1.1rem' }}>
                                    <thead>
                                        <tr>
                                            <th>Movimiento</th>
                                            <th>Fecha</th>
                                            <th>Codigo</th>
                                            <th>Nombre</th>
                                            <th>Marca</th>
                                            <th>Cantidad</th>
                                            <th>Rebajo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry the Bird</td>
                                            <td>The Bird</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry the Bird</td>
                                            <td>The Bird</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry the Bird</td>
                                            <td>The Bird</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry the Bird</td>
                                            <td>The Bird</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry the Bird</td>
                                            <td>The Bird</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry the Bird</td>
                                            <td>The Bird</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Container>
                            <Button className="" variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                            >
                                Generar
                            </Button>
                        </Container>}
                    </Container>
                )}
            </Container>
        </div>
    );
}
export const getServerSideProps = async (context) => {
    try {
        const { data } = await axios.get(
            "http://localhost:3000/api/material/view"
        );
        const { materials, colors, brands, ubications, types } = data;
        return {
            props: {
                materials,
                colors,
                brands,
                ubications,
                types
            },
        };
    } catch (error) {
        console.log(error);
    }
}
