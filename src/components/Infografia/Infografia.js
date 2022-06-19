import '../Infografia/infografia.css'
import { Container, Row, Col } from 'react-bootstrap'

const Infografia = (() => {
    return (
        <Container className="contenedor-infografia">
            <Row className="contenedor-columnas-infografia">
                <Col>
                    <div className='contenedor-imagen'>
                        <img className = "imagen-infografia" src="../images/infografia/horarios.png"/>
                    </div>
                    <div>
                        <h4 className='titulo-infografia'>ABIERTO DE 12 a 02 HS</h4>
                    </div>
                    <div>
                        <p className='descripcion-infografia'>Estamos casi todo el día trabajando para darte el mejor servicio y que nunca 
                            te quedes con hambre!
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className='contenedor-imagen'>
                        <img className = "imagen-infografia" src="../images/infografia/corporate.png"/>
                    </div>
                    <div>
                        <h4 className='titulo-infografia'>CORPORATE/FIESTAS</h4>
                    </div>
                    <div>
                        <p className='descripcion-infografia'>Contactate con nosotros si necesitas un almuerzo o cena empresarial/laboral, podemos hacerte
                            buenas promociones y beneficios exclusivos!
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className='contenedor-imagen'>
                        <img className = "imagen-infografia" src="../images/infografia/music.png"/>
                    </div>
                    <div>
                        <h4 className='titulo-infografia'>MUSICA EN VIVO</h4>
                    </div>
                    <div>
                        <p className='descripcion-infografia'>Todos los Sábados podes venir a disfrutar musica en vivo en nuestras sucursales, vamos
                            variando los generos y harán que tu cena sea con todo el estilo.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
})

export default Infografia