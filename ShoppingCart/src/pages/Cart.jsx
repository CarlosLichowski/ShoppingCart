import React from 'react';
import { Container, ListGroup, Button, Row, Col, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext'; // Importa el hook useCart

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart(); // Obtiene el estado y las funciones del carrito

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <Container className='mt-4'>
            <h2>Tu Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <Alert variant="info">Tu carrito está vacío. ¡Añade algunos productos!</Alert>
            ) : (
                <>
                    <ListGroup className="mb-3">
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.id}>
                                <Row className="align-items-center">
                                    <Col xs={6}>
                                        <h5>{item.name}</h5>
                                        <p>Precio: ${item.price.toFixed(2)}</p>
                                    </Col>
                                    <Col xs={3}>
                                        <p>Cantidad: {item.quantity}</p>
                                    </Col>
                                    <Col xs={3} className="text-end">
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Eliminar
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Total: ${total.toFixed(2)}</h4>
                        <Button variant="warning" onClick={clearCart}>
                            Vaciar Carrito
                        </Button>
                    </div>
                    <Button variant="success" size="lg" className="w-100">
                        Proceder al Pago
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Cart;