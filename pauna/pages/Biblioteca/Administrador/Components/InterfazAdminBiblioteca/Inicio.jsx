import React from "react";
import { Carousel, Card } from "react-bootstrap";

const Inicio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Card>
            <Card.Body>
              <Card.Title>Sistema Administrativo</Card.Title>
              <Card.Text>
                Bienvenido al modo administrativo.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/foto-gratis/abundante-coleccion-libros-antiguos-estantes-madera-generados-ia_188544-29660.jpg"
                alt="Primera imagen"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/foto-gratis/abundante-coleccion-libros-antiguos-estantes-madera-generados-ia_188544-29660.jpg"
                alt="Segunda imagen"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/foto-gratis/abundante-coleccion-libros-antiguos-estantes-madera-generados-ia_188544-29660.jpg"
                alt="Tercera imagen"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
