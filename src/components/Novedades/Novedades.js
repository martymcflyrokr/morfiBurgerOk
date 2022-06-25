import '../Novedades/novedades.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';



const Novedades = () => {
    return(

        <Container fluid>
            <Row>
                <Col>
                <div className='contenedor-imagen-novedades'>
                    <img src='../../images/carrouselimgs/novedades.png' 
                        className='imagen-novedades'/>
                    <div className='texto-novedades'>
                        <p>La nueva especialidad de la casa<br/> a tan solo 1400 ARS.</p>
                        <Button variant='contained'><Link to='/categoria/especial' style={{textDecoration:'none', color:'white'}}>COMPRAR AQUÍ</Link></Button>                   
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Novedades