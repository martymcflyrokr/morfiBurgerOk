import '../Footer/footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Footer = ( () => {
    return (
        <Container fluid className="contenedor-footer">
            <Row className="row-footer">
                <Col xs={12} md={3} >
                    <p>Todos los derechos reservados <br/>®MORFIBURGEROK - 2022</p>
                </Col>
                <Col xs={12} md={3} className="columna-sugerencias">
                    <ul style={{textDecoration:'none', listStyle:'none'}}>
                        <li><h6>TRABAJA CON NOSOTROS</h6></li>
                        <Link to='/contacto' style={{textDecoration:'none', color:'black'}}><li>DEJANOS TU CV</li></Link>
                        <Link to='/contacto' style={{textDecoration:'none', color:'black'}}><li>FRANQUICIAS</li></Link>
                    </ul>
                </Col>
                <Col xs={12} md={3} className="columna-nosotros">
                    <ul style={{textDecoration:'none', listStyle:'none'}}>
                        <li><h6>INFORMACIÓN</h6></li>
                        <Link to='/contacto' style={{textDecoration:'none', color:'black'}}><li>NUESTRAS SUCURSALES</li></Link>
                        <Link to='/contacto' style={{textDecoration:'none', color:'black'}}><li>CONTACTO</li></Link>
                    </ul>
                </Col>
                <Col xs={12} md={3} className="columna-redes">
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