import '../Banner/Banner.css'
import { Carousel } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Banner = (() => {

    return (
        <Container >
            <Row>
                <Col>
                    <Carousel className='contenedor-carrousel'>
                            <Carousel.Item interval={1000} className='carrousel-item' >
                                <img
                                    className="d-block"
                                    src="../images/carrouselimgs/banner4.png"
                                    alt="First slide"/>
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block"
                                    src="../images/carrouselimgs/banner5.png"
                                    alt="Second slide"/>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block"
                                    src="../images/carrouselimgs/banner3.png"
                                    alt="Third slide"/>
                            </Carousel.Item>    
                        </Carousel>
                </Col>
            </Row>
        </Container>
        
    )
})


export default Banner