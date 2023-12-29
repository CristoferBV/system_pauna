import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
        <div className="col-12">
          <Carousel
            nextIcon={<BsChevronRight className="carousel-arrow" style={carouselArrowStyle} />}
            prevIcon={<BsChevronLeft className="carousel-arrow" style={carouselArrowStyle} />}
            interval={null} // Desactiva el autoavance
            slide={true} // Activa el modo "slide"
            slidesToScroll={1} // Número de elementos a desplazar
          >
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={3} style={{ margin: "0.5rem"}}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://static.vecteezy.com/system/resources/previews/028/537/897/non_2x/3d-illustration-icon-design-of-metallic-orange-learning-book-education-with-square-podium-free-png.png"
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Administrativo
                      </Card.Title>
                      <Card.Text>Bienvenido al modo administrativo.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} style={{ margin: "0.5rem"}}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://static.vecteezy.com/system/resources/previews/028/537/897/non_2x/3d-illustration-icon-design-of-metallic-orange-learning-book-education-with-square-podium-free-png.png"
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Administrativo
                      </Card.Title>
                      <Card.Text>Bienvenido al modo administrativo.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} style={{ margin: "0.5rem"}}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://static.vecteezy.com/system/resources/previews/028/537/897/non_2x/3d-illustration-icon-design-of-metallic-orange-learning-book-education-with-square-podium-free-png.png"
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Administrativo
                      </Card.Title>
                      <Card.Text>Bienvenido al modo administrativo.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Agrega más columnas según sea necesario */}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={3} style={{ margin: "0.5rem"}}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://static.vecteezy.com/system/resources/previews/028/537/897/non_2x/3d-illustration-icon-design-of-metallic-orange-learning-book-education-with-square-podium-free-png.png"
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Administrativo
                      </Card.Title>
                      <Card.Text>Bienvenido al modo administrativo.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} style={{ margin: "0.5rem"}}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://static.vecteezy.com/system/resources/previews/028/537/897/non_2x/3d-illustration-icon-design-of-metallic-orange-learning-book-education-with-square-podium-free-png.png"
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Administrativo
                      </Card.Title>
                      <Card.Text>Bienvenido al modo administrativo.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} style={{ margin: "0.5rem"}}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://static.vecteezy.com/system/resources/previews/028/537/897/non_2x/3d-illustration-icon-design-of-metallic-orange-learning-book-education-with-square-podium-free-png.png"
                    />
                    <Card.Body>
                      <Card.Title style={cardTitleStyle}>
                        Sistema Administrativo
                      </Card.Title>
                      <Card.Text>Bienvenido al modo administrativo.</Card.Text>
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
