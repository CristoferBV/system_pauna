'use client'
import React, { useState } from "react";
import { Row, Col, Container, Button, Form, Table } from "react-bootstrap"
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InactivityTimer from "../InactivityTime";

export default function Report({ materials, rebajos, aumentos }) {
    const [showReportes, setShowReportes] = useState(false);
    const [showMovimientos, setShowMovimientos] = useState(false);

    const split = (data) => {
        const array = data.split("T");
        return array[0].split("-")
    }
    const formatDate = (data) => {
        const date = split(data);
        const format = date[2] + "/" + date[1] + "/" + date[0]
        return format
    }

    const handleShowReportes = () => {
        setShowReportes(true);
        setShowMovimientos(false);
    };

    const handleShowMovimientos = () => {
        setShowReportes(false);
        setShowMovimientos(true);
    };
    const [aumento, setAumento] = useState({
        MA_identificador: "",
        MA_fecha: "",
        MA_cantidad: "",
        ML_descripcion: "",
    })
    const [rebajo, setRebajo] = useState({
        MO_identificador: "",
        MO_fecha: "",
        MO_cantidad: "",
        ML_descripcion: "",
        DO_nombre: ""
    })
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


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const filteredAumentos = aumentos.filter((aumento) => {
        if (startDate && endDate) {
            const movimientoDate = new Date(aumento.MA_fecha);
            return movimientoDate >= startDate && movimientoDate <= endDate;
        }
        return true;
    });
    const filteredRebajos = rebajos.filter((rebajo) => {
        if (startDate && endDate) {
            const movimientoDate = new Date(rebajo.MO_fecha);
            return movimientoDate >= startDate && movimientoDate <= endDate;
        }
        return true;
    });
    

    // Funciones de manejo de cambios para las fechas de inicio y fin
    const handleStartDateChange = (dateString) => {
        const date = new Date(dateString);
        setStartDate(date);
    };

    const handleEndDateChange = (dateString) => {
        const date = new Date(dateString);
        setEndDate(date);

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
            item.MC_nombre,
            item.ML_cantidad,
            item.ML_observacion,
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
    const exportReportsAndMovimientosjsPDF = (filteredRebajos, filteredAumentos) => {
        const doc = new jsPDF('p', 'pt', 'letter');

        const fontSize = 16;
        const tableFontSize = 12; // Ajusta el tamaño de la fuente de la tabla según sea necesario
        doc.setFontSize(tableFontSize);
        const title = "PLATAFORMA ADMINISTRATIVA UNA";
        const rebajoTitle = "Rebajos";
        const aumentoTitle = "Aumentos";
        const subTitle = "Área de Reporte Generales de Rebajos y Aumentos";
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('es-ES', options);

        // Set font size
        doc.setFontSize(fontSize);

        const titleWidth = doc.getStringUnitWidth(title) * fontSize;
        const subTitleWidth = doc.getStringUnitWidth(subTitle) * fontSize;
        const dateWidth = doc.getStringUnitWidth(formattedDate) * fontSize;
        const rebajoWidth = doc.getStringUnitWidth(rebajoTitle) * 12;
        const aumentoWidth = doc.getStringUnitWidth(aumentoTitle) * 12;

        const pageWidth = doc.internal.pageSize.width;
        const titleXPosition = (pageWidth - titleWidth) / 2;
        const subTitleXPosition = (pageWidth - subTitleWidth) / 2;
        const dateXPosition = (pageWidth - dateWidth) / 2;
        const rebajoXPosition = (pageWidth - rebajoWidth) / 2;
        const aumentoXPosition = (pageWidth - aumentoWidth) / 2;
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
            "Movimiento",
            "Fecha",
            "Cantidad",
            "Material",
            "Departamento",
        ];
        const tableColumns2 = [
            "Movimiento",
            "Fecha",
            "Cantidad",
            "Material",
        ];

        const tableDataRebajos = filteredRebajos && filteredRebajos.map((rebajo) => [
            rebajo.MO_identificador,
            rebajo.MO_fecha,
            rebajo.MO_cantidad,
            rebajo.ML_descripcion,
            rebajo.DO_nombre
        ]);

        const tableDataAumentos = filteredAumentos && filteredAumentos.map((aumento) => [
            aumento.MA_identificador,
            aumento.MA_fecha,
            aumento.MA_cantidad,
            aumento.ML_descripcion
        ]);
        const totalCantidad = filteredRebajos.reduce((total, rebajo) => total + rebajo.MO_cantidad, 0);

        // Adjust the startY position based on your title and subtitle
        const tableStartYPositionR = Math.max(titleYPosition, dateYPosition) + 30;
        const tableStartYPositionA = Math.max(titleYPosition, dateYPosition) + 20;

        // Etiqueta para la tabla de rebajos
        doc.text("Rebajos", rebajoXPosition, tableStartYPositionR - 5);



        doc.autoTable({
            head: [tableColumns],
            body: tableDataRebajos,
            startY: tableStartYPositionR, // Adjust as needed based on your title and subtitle
            styles: { fontSize: tableFontSize },
        });
        const tableStartYPositionAumentos = doc.autoTable.previous.finalY + 20;
        doc.text("Aumentos", aumentoXPosition, tableStartYPositionAumentos - 5);
        doc.autoTable({
            head: [tableColumns2],
            body: tableDataAumentos,
            startY: tableStartYPositionAumentos, // Adjust as needed based on your title and subtitle
            styles: { fontSize: tableFontSize },
        });
        const totalYPosition = doc.autoTable.previous.finalY + 20; // Ajustar según sea necesario
        const totalXPosition = (pageWidth - doc.getStringUnitWidth(`Total de materiales: ${totalCantidad}`) * fontSize) / 2;






        doc.save(`Reporte_General_De_Movimientos_${formattedDate}.pdf`);
    }

    return (
        <div>
            <InactivityTimer logoutFunction={handleLogout} />
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
                            <Container>
                                <Form style={{ fontSize: '1.1rem' }}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Fecha de inicio: </Form.Label>
                                                <Form.Control type="date" value={startDate.toISOString().split('T')[0]} onChange={(e) => handleStartDateChange(e.target.value)} style={{
                                                    backgroundColor: '#041a34', fontSize: '1.1rem', color: 'white', padding: '1rem', WebkitTextFillColor: 'white',
                                                }}>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Fecha de fin: </Form.Label>
                                                <Form.Control type="date" value={endDate.toISOString().split('T')[0]} onChange={(e) =>handleEndDateChange(e.target.value)} style={{
                                                    backgroundColor: '#041a34', fontSize: '1.1rem', color: 'white', padding: '1rem', WebkitTextFillColor: 'white',
                                                }}>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    </Container>
                                </Form>
                            </Container>
                            <Container style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                <Table variant="dark" striped bordered hover style={{ fontSize: '1.1rem' }}>
                                    <thead>
                                        <tr>
                                            <th>Movimiento</th>
                                            <th>Fecha</th>
                                            <th>Cantidad</th>
                                            <th>Material</th>
                                            <th>Departamento</th>
                                            <th>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredRebajos && filteredRebajos.map((rebajo) => (
                                            <tr key={rebajo.MO_identificador}>
                                                <td>{rebajo.MO_identificador}</td>
                                                <td>{formatDate(rebajo.MO_fecha)}</td>
                                                <td>{rebajo.MO_cantidad}</td>
                                                <td>{rebajo.ML_descripcion}</td>
                                                <td>{rebajo.DO_nombre}</td>
                                                <td>Rebajo</td>
                                            </tr>
                                        ))}
                                        {filteredAumentos && filteredAumentos.map((aumento) => (
                                            <tr key={aumento.MA_identificador}>
                                                <td>{aumento.MA_identificador}</td>
                                                <td>{formatDate(aumento.MA_fecha)}</td>
                                                <td>{aumento.MA_cantidad}</td>
                                                <td>{aumento.ML_descripcion}</td>
                                                <td>No necesita</td>
                                                <td>Aumentos</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Container>
                            <Button className="" variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                                onClick={() => exportReportsAndMovimientosjsPDF(filteredRebajos, filteredAumentos)} >
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
            process.env.LINK + "/api/material/mov"
        );
        const { materials, rebajos, aumentos } = data;
        return {
            props: {
                materials,
                rebajos,
                aumentos
            },
        };
    } catch (error) {
        console.error("Error fetching data:");
        return {
            props: {
                materials: [],
                rebajos: [],
                aumentos: []
            },
        };
    }
}