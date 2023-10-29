'use client'
import Link from "next/link"
import React, { useState } from "react";
import { Row, Col, Container, Button, Form, Table } from "react-bootstrap"


export default function Report() {
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
                                    <Form.Control type="text" placeholder="Buscar..." style={{
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
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
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
                                        </tr>
                                    </tbody>
                                </Table>
                            </Container>
                            <Button variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>
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
                            <Button className="" variant="primary" type="submit" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                                Generar
                            </Button>
                        </Container>}
                    </Container>
                )}
            </Container>
        </div>
    );
}