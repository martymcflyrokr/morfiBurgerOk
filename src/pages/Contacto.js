import { Container} from "@mui/material"
import { Grid } from "@mui/material"

const Contacto = () => {

    return(
        
        <Container> 
            <Grid container backgroundColor={'gray'}>
                <Grid item xs={4} >
                    <div className="contenedor-redes" style={{display: 'flex', backgroundColor: 'gray', color:'white', paddingBottom:'20px'}}>
                        <ul style={{listStyle: 'none'}}>
                            <li>
                                <div> 
                                    <img src="./images/icons/shophouse.png" style={{width: '20%'}}/>
                                    <p style={{marginBottom:'0px', marginTop:'0px'}}>CATAN SHOPPING</p>
                                    <p style={{marginBottom:'0px', marginTop:'0px'}}>Av. J. Manuel de Rosas 4235</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="./images/icons/shophouse.png" style={{width: '20%'}}/>
                                    <p style={{marginBottom:'0px', marginTop:'0px'}}>B. DORREGO</p>
                                    <p style={{marginBottom:'0px', marginTop:'0px'}}>Lopez May 4235</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="./images/icons/shophouse.png" style={{width: '20%'}}/>
                                    <p style={{marginBottom:'0px', marginTop:'0px'}}>B. INDEPENDENCIA</p>
                                    <p style={{marginBottom:'0px', marginTop:'0px'}}>Av. Cobo 25359</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div style={{width:'100%', fontSize:'100px'}}>
                            ACA VA UN MAPA
                        </div>
                    </Grid>
            </Grid>
        </Container>
    
    )
}

export default Contacto