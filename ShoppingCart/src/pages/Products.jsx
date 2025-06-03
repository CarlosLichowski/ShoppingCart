import React from 'react'
import {Container,ListGroup} from 'react-bootstrap';

const Products = () => {
  return (
    <Container className='mt-4'>
        <h2>Products</h2>

        <ListGroup>
            <ListGroup.Item>Product A</ListGroup.Item>
            <ListGroup.Item>Product B</ListGroup.Item>
            <ListGroup.Item>Product C</ListGroup.Item>
            <ListGroup.Item>Product D</ListGroup.Item>
        </ListGroup>

    </Container>
  )
}

export default Products