import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Col } from "react-bootstrap";
import { useRouter } from "next/router";

export default function PrestamosBibliotecaAdmin({ Dispositivo, Periferico }) {
  const [prestamo, setPrestamo] = useState({
    EA_identificador: "",
    EA_nombre: "",
    EA_descripcion: "",
  });
  const [dispositivos, setDispositivos] = useState([]);
  const [perifericos, setPerifericos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log("Dispositivo:", Dispositivo);
    console.log("Periferico:", Periferico);

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
    if (name in prestamo) {
      setPrestamo({ ...prestamo, [name]: value });
    }
  };

  return (
    <div className="flex-1 p-8">
      <Card style={{ backgroundColor: "#DEEFE7", color: "white" }} text="white">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span className=" text-black font-semibold">Prestamos Estudiantes</span>
          </div>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label className=" text-black">Cédula de Estudiante</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cédula de estudiante"
                value={prestamo.SD_identificador_usuario}
                onChange={(e) => handleChange(e)}
                name="SD_identificador_usuario"
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label className=" text-black">Fecha de Préstamo</Form.Label>
              <Form.Control
                type="date"
                value={prestamo.fechaPrestamo}
                onChange={(e) => handleChange(e)}
                name="fechaPrestamo"
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label className=" text-black">Elegir Activo</Form.Label>
              <Form.Control as="select">
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
              <Form.Control as="select">
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
