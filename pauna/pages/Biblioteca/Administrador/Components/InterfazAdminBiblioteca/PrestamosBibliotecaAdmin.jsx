import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function PrestamosBibliotecaAdmin({ Dispositivo, Periferico }) {
  const [prestamo, setPrestamo] = useState({
    LP_identificador_usuario: "",
    LP_fechaDevolucion: "",
    LP_identificador: "",
    EA_identificador: "",
  });
  const [dispositivos, setDispositivos] = useState([]);
  const [perifericos, setPerifericos] = useState([]);

  useEffect(() => {
    if (
      Dispositivo &&
      Dispositivo.length > 0 &&
      Periferico &&
      Periferico.length > 0
    ) {
      setDispositivos(Dispositivo);
      setPerifericos(Periferico);
    }
  }, [Dispositivo, Periferico]);

  const handleChange = ({ target: { name, value } }) => {
    setPrestamo({ ...prestamo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !prestamo.LP_identificador_usuario ||
      !prestamo.LP_fechaDevolucion ||
      !prestamo.LP_identificador ||
      !prestamo.EA_identificador
    ) {
      Swal.fire({
        icon: "error",
        title: "Faltan datos",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }

    try {
      console.log("Datos de préstamo:", prestamo);
      await axios.post(
        process.env.LINK+"/api/config/BibliotecaPrestamos",
        prestamo
      );
      console.log("Préstamo insertado correctamente.");
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "El préstamo ha sido registrado exitosamente.",
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("El activo no existe.");
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Cedula sin solicitud de activo.",
        });
      } else if (error.response && error.response.status === 400) {
        console.error("Error con la cédula.");
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "La cédula ingresada es incorrecta.",
        });
      } else {
        console.error("Error al insertar el préstamo:", error);
        // Mostrar un mensaje de error general al usuario
      }
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
    <div className="flex-1 p-8">
      <Card style={{ backgroundColor: "#DEEFE7", color: "white" }} text="white">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span className=" text-black font-semibold">
              Prestamos Estudiantes
            </span>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label className=" text-black">
                Cédula de Estudiante
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Cédula de estudiante"
                value={prestamo.LP_identificador_usuario}
                onChange={handleChange}
                name="LP_identificador_usuario"
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label className=" text-black">Fecha de Préstamo</Form.Label>
              <Form.Control
                type="date"
                value={prestamo.LP_fechaDevolucion}
                onChange={handleChange}
                name="LP_fechaDevolucion"
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label className="text-black">Elegir Activo</Form.Label>
              <Form.Control
                as="select"
                onChange={handleChange}
                name="LP_identificador"
              >
                <option>-Seleccionar-</option>
                {dispositivos.map((dispositivo) => (
                  <option
                    key={dispositivo.AO_identificador}
                    value={dispositivo.AO_identificador}
                  >
                    Dispositivo:{" "}
                    {`${dispositivo.TP_nombre} - Descripción: ${dispositivo.TP_descripcion} - Estado: ${dispositivo.AO_estado}`}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label className=" text-black">Elegir Periferico</Form.Label>
              <Form.Control
                as="select"
                onChange={handleChange}
                name="EA_identificador"
              >
                <option>-Seleccionar-</option>
                {perifericos.map((periferico) => (
                  <option
                    key={periferico.EA_identificador}
                    value={periferico.EA_identificador}
                  >
                    Periferico:{" "}
                    {`${periferico.EA_nombre} - Descripción: ${periferico.EA_descripcion}`}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} style={{ marginTop: "1.5rem" }}>
              <Button
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                }} type = "submit"
              >
                Guardar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const {
      data: { Dispositivo, Periferico },
    } = await axios.get(process.env.LINK+"/api/config/BibliotecaPrestamos");
    return {
      props: {
        Dispositivo,
        Periferico,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        Dispositivo: [],
        Periferico: [],
      },
    };
  }
};
