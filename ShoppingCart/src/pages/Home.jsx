import {useParams} from 'react-router-dom'
import { Container, Card } from 'react-bootstrap' 

export default function Perfil(){
    const {id} = useParams();

    return(
        <Container className='mt-4'>
            <Card className="p-4 shadow-sm"> 
                <Card.Body>
                    <Card.Title as="h2" className="mb-3">Perfil del Usuario</Card.Title>
                    <Card.Text>Bienvenido, **{id}**</Card.Text>
                    <Card.Text>Aquí podrás ver y gestionar tu información personal.</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}