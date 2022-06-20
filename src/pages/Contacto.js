import '../pages/contacto.css'
import { Container} from "@mui/material"
import { Grid } from "@mui/material"

const Contacto = () => {

    return(
        <div className='contenedor-general-contacto'>
            <Container> 
                <Grid container className='contenedor-contacto' >
                    <Grid item xs={4} >
                        <div className="contenedor-redes" style={{display: 'flex', color:'black', paddingBottom:'20px', padding:'30px'}}>
                            <ul style={{listStyle: 'none', alignItems:'center'}}>
                                <li>
                                    <div> 
                                        <img src="./images/icons/shophouse.png" style={{width: '20%'}} alt={'icono-merch'}/>
                                        <p style={{marginBottom:'0px', marginTop:'0px'}}>CATAN SHOPPING</p>
                                        <p style={{marginBottom:'0px', marginTop:'0px'}}>Av. J. Manuel de Rosas 4235</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="./images/icons/shophouse.png" style={{width: '20%'}} alt={'icono-merch'}/>
                                        <p style={{marginBottom:'0px', marginTop:'0px'}}>B. DORREGO</p>
                                        <p style={{marginBottom:'0px', marginTop:'0px'}}>Lopez May 4235</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="./images/icons/shophouse.png" style={{width: '20%'}} alt={'icono-merch'}/>
                                        <p style={{marginBottom:'0px', marginTop:'0px'}}>B. INDEPENDENCIA</p>
                                        <p style={{marginBottom:'0px', marginTop:'0px'}}>Av. Cobo 25359</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </Grid>
                        <Grid item xs={8}>
                            <div className='contenedor-mapas'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4072.5405341271967!2d-58.62101202678415!3d-34.773126338877695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc4ee2d53cd4b%3A0x2af07e6c6ffc4ff!2sMorfi%20Burger!5e0!3m2!1sen!2sar!4v1655739785625!5m2!1sen!2sar" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Grid>
                </Grid>
            </Container>
        </div>   
    )
}

export default Contacto