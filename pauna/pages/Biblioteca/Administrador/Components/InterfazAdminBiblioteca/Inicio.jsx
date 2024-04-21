import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Foto from '../../../../../public/img-fondo-inicio.webp';
import Image from "next/image";

const Inicio = () => {
  const cardTitleStyle = {
    borderBottom: "1px solid #ccc",
    paddingBottom: "0.5rem",
  };

  const carouselTitleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    backgroundImage: "linear-gradient(to right, #001f3f, #003366, #004080)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "200% 100%",
    animation: "gradientAnimation 6s linear infinite", // Ajusta la duración y el tipo de animación aquí
  };

  const carouselArrowStyle = {
    color: "#001f3f", // Azul oscuro
    fontSize: "2rem",
  };

  const styles = `
    @keyframes gradientAnimation {
      0% {
        background-position: 200% 0%;
      }
      100% {
        background-position: -200% 0%;
      }
    }
  `;

  return (
    <div className="container">
      <style>{styles}</style>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <h1 style={carouselTitleStyle}>Sistema Administrativo</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <div className="col-12">
          <Carousel
            nextIcon={
              <BsChevronRight
                className="carousel-arrow"
                style={carouselArrowStyle}
              />
            }
            prevIcon={
              <BsChevronLeft
                className="carousel-arrow"
                style={carouselArrowStyle}
              />
            }
            interval={3000} // Cambia el intervalo a 5000 milisegundos (5 segundos)
            slide={true} // Activa el modo "slide"s
          >
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={3} style={{ margin: "0.5rem" }}>
                  <Card>
                    <Image
                      src={Foto} 
                      alt="Descripción de tu imagen"
                      priority
                      style={{ width: "auto", height: "auto" }} //solo se utiliza cuando la imagen es tipo .web
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Citas
                      </Card.Title>
                      <Card.Text>
                        Parte encargada de validación de citas.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} style={{ margin: "0.5rem" }}>
                  <Card>
                    <Image
                      src={Foto} 
                      alt="Descripción de tu imagen"
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Prestamos
                      </Card.Title>
                      <Card.Text>
                        Parte encargada de realizar prestamos.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} style={{ margin: "0.5rem" }}>
                  <Card>
                    <Image
                      src={Foto} 
                      alt="Descripción de tu imagen"
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Activos
                      </Card.Title>
                      <Card.Text>
                        Parte encargada de crear, editar y eliminar activos.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={3} style={{ margin: "0.5rem" }}>
                  <Card>
                    <Image
                      src={Foto} 
                      alt="Descripción de tu imagen"
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Usuarios
                      </Card.Title>
                      <Card.Text>
                        Parte encarga de verificación de estudiantes.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} style={{ margin: "0.5rem" }}>
                  <Card>
                    <Image
                      src={Foto} 
                      alt="Descripción de tu imagen"
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Horario
                      </Card.Title>
                      <Card.Text>
                        Parte encargada de crear, editar y eliminar horarios.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} style={{ margin: "0.5rem" }}>
                  <Card>
                    <Image
                      src={Foto} 
                      alt="Descripción de tu imagen"
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Reportes
                      </Card.Title>
                      <Card.Text>
                        Parte encargada de generar reportes en PDF.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
