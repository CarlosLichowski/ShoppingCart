import { Navbar, Container, Nav, Button   } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    
    const navigate = useNavigate();

    const isAuth = localStorage.getItem('auth') === 'true';

    const cerrarSession = () =>{

        localStorage.removeItem('auth')
        navigate('login');


    }

    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Link to={/}> Inicio</Link>
                        <Link to={/productos}>Productos</Link>

                        {isAuth && (
                            <>
                            <Link to="perfil/usuario123">Perfil</Link>
                            <Link to="/Admin">Admin</Link>
                            </>
                        )}

                        
                    </Nav>

                    <Nav>
                        {!isAuth ? (
                            <Link to="/loggin">Login</Link>

                        ): (
                            <Button variant="outline-light">Cerrar Session</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
        

}