// src/pages/Admin.jsx
import { Container, Card } from "react-bootstrap"; // Importamos Card

export default function Administracion(){
    return(
        <Container className="mt-4">
            <Card className="p-4 shadow-sm"> {/* Agregamos estilos de Card */}
                <Card.Body>
                    <Card.Title as="h2" className="mb-3">Panel de Administración</Card.Title>
                    <Card.Text>Acceso exclusivo para usuarios autenticados. Desde aquí podrás gestionar productos, usuarios y pedidos.</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}