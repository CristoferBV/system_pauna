import React, { useState } from "react";
import axios from "axios";
import {
  Table,
  Card,
  FormControl,
  InputGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

export default function SidebarEstudiantes({ Estudiantes }) {
  const [searchText, setSearchText] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedValues, setEditedValues] = useState({});
  const [selectedEstudiante, setSelectedEstudiante] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const filteredEstudiantes = Estudiantes.filter((estudiante) => {
    return (
      (estudiante.UO_primer_nombre || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (estudiante.UO_identificador || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (estudiante.EE_nivel || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (estudiante.TP_nombre || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (estudiante.EA_nombre || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (estudiante.AO_identificador || "")
        .toString()
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (estudiante.EE_campus || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (estudiante.CE_correoElectronico || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (estudiante.TO_numero || "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (estudiante.LP_fechaDevolucion || "")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  });

  const updateEstudiante = async (updatedEstudiante) => {
    try {
      // Realiza una solicitud HTTP (por ejemplo, con Axios) para actualizar el estudiante en el servidor
      await axios.put("URL_de_tu_API", updatedEstudiante);
      // Lógica adicional, como actualizar el estado local con los nuevos datos si es necesario
    } catch (error) {
      console.error("Error al actualizar el estudiante:", error);
    }
  };

  const createEstudiante = async (newEstudiante) => {
    try {
      // Realiza una solicitud HTTP (por ejemplo, con Axios) para crear un nuevo estudiante en el servidor
      await axios.post("URL_de_tu_API", newEstudiante);
      // Lógica adicional, como actualizar el estado local con los nuevos datos si es necesario
      setShowCreateForm(false); // Cierra el modal después de crear el estudiante
    } catch (error) {
      console.error("Error al crear el estudiante:", error);
    }
  };

  const handleDeletePrestamoAceptado = async (LP_identificador) => {
    try {
      const response = await axios.delete(
        `/api/config/BibliotecaPrestamosAceptado?LP_identificador=${LP_identificador}`
      );
      console.log(response);
      // Realizar otras acciones después de la eliminación
    } catch (error) {
      console.error("Error al eliminar el prestamo:", error);
      throw error; // Permitir que el control fluya fuera de la función
    }
    reloadPage();
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
    backgroundColor: "#233C5B",
    color: "white",
    border: "none", // Agregar un borde blanco
    transition: "background-color 0.3s, border 0.3s", // También añadir la transición para el borde
  };

  const buttonHoverStyle = {
    backgroundColor: "#152C4A", // Nuevo color de fondo al pasar el cursor
    color: "black", // Texto de color oscuro
    border: "1px solid white",
  };

  return (
    <div className="p-8">
      <Card style={{ backgroundColor: "#DEEFE7", color: "white" }} text="white">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span className="text-black font-semibold">Estudiantes Con Prestamo</span>
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
          <Table style={{ backgroundColor: "#252440", color: "white" }}
            striped
            bordered
            hover
            responsive>
            <thead>
              <tr>
                <th className="text-center">Nombre</th>
                <th className="text-center">Cedula</th>
                <th className="text-center">Nivel</th>
                <th className="text-center">Codigo</th>
                <th className="text-center">Activo</th>
                <th className="text-center">Periferico</th>
                <th className="text-center">Campus</th>
                <th className="text-center">Correo</th>
                <th className="text-center">Telefono</th>
                <th className="text-center">Devolucion</th>
              </tr>
            </thead>
            <tbody>
              {filteredEstudiantes.map((estudiante, index) => (
                <tr key={`${estudiante.EE_idenficador}_${index}`}>
                  <td className="text-center">{estudiante.Nombre}</td>
                  <td className="text-center">{estudiante.Cedula}</td>
                  <td className="text-center">{estudiante.EE_nivel}</td>
                  <td className="text-center">{estudiante.AO_identificador}</td>
                  <td className="text-center">{estudiante.TP_nombre}</td>
                  <td className="text-center">{estudiante.EA_nombre}</td>
                  <td className="text-center">{estudiante.EE_campus}</td>
                  <td className="text-center">
                    {estudiante.CorreoElectronico}
                  </td>
                  <td className="text-center">{estudiante.NumeroTelefono}</td>
                  <td className="text-center">
                    {new Date(
                      estudiante.LP_fechaDevolucion
                    ).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { data: Estudiantes } = await axios.get(
      "http://localhost:3000/api/config/BibliotecaPrestamoAceptado"
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
