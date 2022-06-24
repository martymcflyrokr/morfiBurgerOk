import '../Footer/footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Footer = ( () => {
    return (
        <Container fluid className="contenedor-footer">
            <Row className="row-footer">
                
              
                
                <Col>
                    <p>Todos los derechos reservados <br/>®MORFIBURGEROK - 2022</p>
                </Col>
                <Col className="columna-sugerencias">
                    <ul style={{textDecoration:'none', listStyle:'none'}}>
                        <li><h6>TRABAJA CON NOSOTROS</h6></li>
                        <li>DEJANOS TU CV</li>
                        <li>SUGERENCIAS</li>
                    </ul>
                </Col>
                <Col className="columna-nosotros">
                    <ul style={{textDecoration:'none', listStyle:'none'}}>
                        <li><h6>INFORMACIÓN</h6></li>
                        <Link to='/contacto' style={{textDecoration:'none', color:'black'}}><li>NUESTRAS SUCURSALES</li></Link>
                        <li>FRANQUICIAS</li>
                    </ul>
                </Col>
                <Col className="columna-redes">
                <ul style={{textDecoration:'none', listStyle:'none'}}>
                    <li><img src='../images/footer/instagram.png' alt='imagen-icono-insta'/> @MORFIBURGEROK</li>
                    <li><img src='../images/footer/facebook.png' alt='imagen-icono-fb'/> /MORFIBURGEROK</li>
                    <li><img src='../images/footer/whatsapp.png' alt='imagen-icono-whtsp'/> (+54) 11 1234 5689</li>
                </ul>        
            </Col>

            </Row>
            
        </Container>
    )
})

export default Footer