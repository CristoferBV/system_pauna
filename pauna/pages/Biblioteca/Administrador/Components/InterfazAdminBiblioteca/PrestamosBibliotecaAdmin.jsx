import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Table, Button, Form, Modal, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function SidebarCitas({ Citas }) {
    const [searchText, setSearchText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedCita, setEditedCita] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [citas, setCitas] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);
    const router = useRouter();

    const [cita, setCita] = useState({
        SD_identificador: "",
        SD_identificador_horario: "",
        SD_identificador_tipo: "",
        SD_identificador_usuario: "",
        fechaPrestamo: ""
    });

    useEffect(() => {
        if (Citas && Citas.Citas) {
            setCitas(Citas.Citas);
        }
    }, [Citas]);


    const handleChange = ({ target: { name, value } }) => {
        if (name in cita) {
            setCita({ ...cita, [name]: value });
        }
    };

    const handleEdit = (cita) => {
        setEditedCita(cita);
        setEditMode(true);
    };

    const saveChanges = () => {
        // Aquí deberías implementar la lógica para guardar los cambios
        setEditMode(false);
    };

    const handleDelete = (cita) => {
        setEditedCita(cita);
        setDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        // Aquí deberías implementar la lógica para eliminar la cita
        setDeleteConfirmation(false);
    };

    const handleAlertClose = () => {
        setAlertVisible(false);
    };

    const filteredCitas = citas && Array.isArray(citas)
        ? citas.filter((cita) => {
            return (
                (cita.UO_identificador && cita.UO_identificador.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.HO_fecha && cita.HO_fecha.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.HO_hora && cita.HO_hora.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.UO_primer_nombre && cita.UO_primer_nombre.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.CA_nombre && cita.CA_nombre.toLowerCase().includes(searchText.toLowerCase())) ||
                (cita.TP_nombre && cita.TP_nombre.toLowerCase().includes(searchText.toLowerCase()))
            );
        })
        : [];

    const reloadPage = () => {
        router.push("/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/SidebarCitas");
    };

    const buttonStyle = {
        backgroundColor: '#021730',
        color: 'white',
        border: 'none',
        transition: 'background-color 0.3s, border 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#010E1F',
        color: 'black',
        border: '1px solid white',
    };

    return (
        <div className="flex-1 p-8">
            <Card style={{ backgroundColor: '#2F3E5B', color: 'white' }} text="white">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <span>Prestamos Estudiantes</span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="mb-3">
                        <Form>
                            <Form.Group>
                                <Form.Label>Cédula de Estudiante</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Cédula de estudiante"
                                    value={cita.SD_identificador_usuario}
                                    onChange={(e) => handleChange(e)}
                                    name="SD_identificador_usuario"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Fecha de Préstamo</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={cita.fechaPrestamo}
                                    onChange={(e) => handleChange(e)}
                                    name="fechaPrestamo"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Elegir Activo</Form.Label>
                                <Form.Control as="select">
                                    <option>-Seleccionar-</option>
                                    <option>Activo 1</option>
                                    <option>Activo 2</option>
                                    <option>Activo 3</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Elegir Periferico</Form.Label>
                                <Form.Control as="select">
                                    <option>-Seleccionar-</option>
                                    <option>Periferico 1</option>
                                    <option>Periferico 2</option>
                                    <option>Periferico 3</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </Card.Body>
            </Card>

            {/* Resto del código como está */}
        </div>
    );
}


export const getServerSideProps = async (context) => {
    try {
        const { data: Citas } = await axios.get("http://localhost:3000/api/config/BibliotecaCitas");
        return {
            props: {
                Citas,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                Citas: [],
            },
        };

    }
};
