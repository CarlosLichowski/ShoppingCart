import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext'; 
import { useCart } from '../context/CartContext'; 


export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart(); 

  const cerrarSession = () => {
    logout(); 
    navigate('/login');
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/perfil/usuario123">Perfil</Nav.Link>
                <Nav.Link as={Link} to="/Admin">Admin</Nav.Link>
                <Nav.Link as={Link} to="/cart">
                  Carrito ({totalItemsInCart}) 
                </Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            {!isAuthenticated ? (
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