import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Alert, Spinner } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const MOCK_API_URL = 'https://68817ada66a7eb81224af99a.mockapi.io/products/products'; 


const Products = () => {
    const { addToCart, removeFromCart, cartItems } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(MOCK_API_URL);
  
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error al cargar los productos.');
                setLoading(false);
                console.error('Error fetching', err);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        setAlertMessage(`${product.name} agregado al carrito.`);
        setAlertVariant('success');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    };

    const handleRemoveFromCart = (productId, productName) => {
        removeFromCart(productId);
        setAlertMessage(`${productName} eliminado del carrito.`);
        setAlertVariant('danger');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    };

    const getProductQuantity = (productId) => {
        const item = cartItems.find(item => item.id === productId);
        return item ? item.quantity : 0;
    };

    if (loading) {
        return (
            <Container className="mt-5 text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando productos...</span>
                </Spinner>
                <p className="mt-3">Cargando productos...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-5 text-center">
                <Alert variant="danger">
                    {error}
                </Alert>
            </Container>
        );
    }

    return (
        <Container className='mt-4'>
            <h2>Nuestros Productos</h2>

            {showAlert && (
                <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible className="fade show">
                    {alertMessage}
                </Alert>
            )}

            <div className="d-flex flex-wrap justify-content-around">
                {products.length === 0 ? (
                    <Alert variant="info">No hay productos disponibles en este momento.</Alert>
                ) : (
                    products.map((product) => {
                        const quantityInCart = getProductQuantity(product.id);
                        return (
                            <Card key={product.id} style={{ width: '18rem', margin: '1rem' }}>
                                
                                {product.imageUrl && (
                                    <Card.Img variant="top" src={product.imageUrl} alt={product.name} style={{ height: '180px', objectFit: 'cover' }} />
                                )}
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                        <br />
                                        <strong>Precio: ${product.price ? product.price.toFixed(2) : 'N/A'}</strong>
                                        {product.stock !== undefined && ( 
                                            <p>Stock: {product.stock}</p>
                                        )}
                                        {quantityInCart > 0 && (
                                            <p className="mt-2 mb-0">
                                                En carrito: **{quantityInCart}**
                                            </p>
                                        )}
                                    </Card.Text>
                                    <div className="d-grid gap-2">
                                        <Button
                                            variant="primary"
                                            onClick={() => handleAddToCart(product)}
                                            className="mb-2"
                                        >
                                            Añadir al Carrito
                                        </Button>
                                        {quantityInCart > 0 && (
                                            <Button
                                                variant="outline-danger"
                                                onClick={() => handleRemoveFromCart(product.id, product.name)}
                                            >
                                                Eliminar del Carrito
                                            </Button>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        );
                    })
                )}
            </div>
        </Container>
    );
};

export default Products;