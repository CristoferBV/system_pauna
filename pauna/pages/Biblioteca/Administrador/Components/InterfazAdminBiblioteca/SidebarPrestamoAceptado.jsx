import React, { useState } from "react";
import axios from "axios";
import { Table, Card, FormControl, InputGroup, Button} from "react-bootstrap";
import { useRouter } from "next/router";

export default function SidebarEstudiantes({ Estudiantes }) {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

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

  const reloadPage = () => {
    router.push(
      "/Biblioteca/Administrador/Components/InterfazAdminBiblioteca/BibliotecaPrestamoAceptado"
    );
  };

  const handleDelete = async (prestamoId) => { // Aquí solo se pasa el ID del préstamo
    try {
      const res = await axios.delete(`/api/config/BibliotecaPrestamoAceptado`, { data: { LP_identificador: prestamoId } });
      console.log(res.data.message); // Mensaje de éxito de la eliminación
      //reloadPage();
    } catch (error) {
      console.error("Hubo un error al eliminar el préstamo:", error);
      // Manejar el error en caso de fallo
    }
  };
  
  const buttonStyle = {
    backgroundColor: "#233C5B",
    color: "white",
    border: "none",
    transition: "background-color 0.3s, border 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#152C4A",
    color: "black",
    border: "1px solid white",
  };
  

  return (
    <div className="p-8">
      <Card style={{ backgroundColor: "#DEEFE7", color: "white" }} text="white">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span className="text-black font-semibold">
              Estudiantes Con Prestamo
            </span>
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
          <Table
            style={{ backgroundColor: "#252440", color: "white" }}
            striped
            bordered
            hover
            responsive
          >
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
                <th className="text-center">Administrar</th>
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
                  <td className="text-center">
                    <Button
                      variant="light"
                      className="ml-2"
                      onClick={() => handleEdit(estudiante.LP_identificador)}
                      style={buttonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor =
                          buttonHoverStyle.backgroundColor;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor =
                          buttonStyle.backgroundColor;
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="light"
                      className="ml-2"
                      onClick={() => handleDelete(estudiante.LP_identificador)}
                      style={buttonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor =
                          buttonHoverStyle.backgroundColor;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor =
                          buttonStyle.backgroundColor;
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
