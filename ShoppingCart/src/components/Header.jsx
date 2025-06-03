import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const cerrarSession = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Added aria-controls for accessibility */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Added id for accessibility */}
          <Nav className="me-auto">
            {/* Use Nav.Link with 'as={Link}' to integrate react-router-dom's Link */}
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

            {isAuth && (
              <>
                <Nav.Link as={Link} to="/perfil/usuario123">Perfil</Nav.Link>
                <Nav.Link as={Link} to="/Admin">Admin</Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            {!isAuth ? (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            ) : (
              <Button variant="outline-light" onClick={cerrarSession}>Cerrar Sesión</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}