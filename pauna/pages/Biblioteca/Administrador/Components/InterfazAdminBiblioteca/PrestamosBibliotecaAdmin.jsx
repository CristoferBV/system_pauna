import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function PrestamosBibliotecaAdmin({ Dispositivo, Periferico }) {
  const [prestamo, setPrestamo] = useState({
    LP_identificador_usuario: "",
    LP_fechaDevolucion: "",
    LP_identificador: "", // Cambiado el nombre
    EA_identificador: "", // Cambiado el nombre
  });
  const [dispositivos, setDispositivos] = useState([]);
  const [perifericos, setPerifericos] = useState([]);
  const router = useRouter();

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

    // Imprimir todos los nombres de los campos del objeto prestamo
    console.log(
      "Nombres de los campos del objeto prestamo:",
      Object.keys(prestamo)
    );

    if (
      !prestamo.LP_identificador_usuario ||
      !prestamo.LP_fechaDevolucion ||
      !prestamo.LP_identificador ||
      !prestamo.EA_identificador
    ) {
      console.error("Faltan datos en la solicitud.");
      return;
    }
    try {
      console.log("Datos de préstamo:", prestamo);
      await axios.post(
        "http://localhost:3000/api/config/BibliotecaPrestamos",
        prestamo
      );
      // Solo redirigir si la solicitud POST se completó correctamente
      console.log("Préstamo insertado correctamente.");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("El activo no existe.");
        // Mostrar un mensaje de error al usuario
      } else {
        console.error("Error al insertar el préstamo:", error);
        // Mostrar un mensaje de error general al usuario
      }
    }
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
                name="LP_identificador" // Cambiado el nombre
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
                name="EA_identificador" // Mantenido el nombre original
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
            <Button variant="primary" type="submit">
              Guardar
            </Button>
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
    } = await axios.get("http://localhost:3000/api/config/BibliotecaPrestamos");
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
