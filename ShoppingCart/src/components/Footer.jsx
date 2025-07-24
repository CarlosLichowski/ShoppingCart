import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p>&copy; {new Date().getFullYear()} Mi Tienda Online. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ en [Ciudad Inventada], [País Inventado]</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p>
              **Dirección:** Calle Falsa 123, Barrio Imaginario, 
              <br />
              12345 Ciudad Ficticia, País del Ensueño.
            </p>
            <p>
              **Contacto:** <a href="mailto:info@mitiendaonline.com">info@mitiendaonline.com</a> | (123) 456-7890
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;