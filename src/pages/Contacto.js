import '../pages/contacto.css'
import { Container} from "@mui/material"
import { useState } from 'react'
import Empleo from '../components/Empleo/Empleo'
import { Grid } from '@mui/material'


const Contacto = () => {

    const [ubicacion, setUbicacion] = useState('catan')

    const handleClick = (ubi) => {
        setUbicacion(ubi)
    }

    return(
       
            <Container className='contenedor-general-ubicacion'>
                            <div className="contenedor-ubicacion" style={{color:'black', paddingBottom:'20px', padding:'30px', flexWrap:'wrap'}}>
                            <Grid container spacing={12}>
                                <Grid item xs={4}>
                                        <div className='contenedor-imagen-ubicacion'> 
                                            <img src="./images/icons/shophouse.png" style={{width: '20%'}} alt={'icono-merch'} 
                                                onClick={ () => {handleClick('catan')}} />
                                            <p style={{marginBottom:'0px', marginTop:'0px'}}>CATAN SHOPPING</p>
                                            <p style={{marginBottom:'0px', marginTop:'0px'}}>Av. J. Manuel de Rosas 4235</p>
                                        </div>
                                </Grid>
                                <Grid item xs={4}>

                                        <div className='contenedor-imagen-ubicacion'>
                                            <img src="./images/icons/shophouse.png" style={{width: '20%'}} alt={'icono-merch2'}
                                                onClick={() => {handleClick('dorrego')}}/>
                                            <p style={{marginBottom:'0px', marginTop:'0px'}}>B. DORREGO</p>
                                            <p style={{marginBottom:'0px', marginTop:'0px'}}>Lopez May 4235</p>
                                        </div>
                                </Grid>
                                <Grid item xs={4}>
                                        <div className='contenedor-imagen-ubicacion'>
                                            <img src="./images/icons/shophouse.png" style={{width: '20%'}} alt={'icono-merch3'}
                                                onClick={ () => {handleClick('independencia')}}/>
                                            <p style={{marginBottom:'0px', marginTop:'0px'}}>B. INDEP.</p>
                                            <p style={{marginBottom:'0px', marginTop:'0px'}}>Av. Cobo 25359</p>
                                        </div>
                                </Grid>
                            </Grid>

                            </div>
                            
                                <div className='contenedor-mapas'>
                                    {ubicacion === 'catan' 
                                    ? 
                                    <div className='contenedor-catan'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.661492197086!2d-58.61969918416738!3d-34.76411907351091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc12dbc4dacd3%3A0x4e094949ab99576f!2sCat%C3%A1n%20Shopping!5e0!3m2!1ses-419!2sar!4v1656027312798!5m2!1ses-419!2sar"  style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='ubicacion-catan-shopping-morfi'></iframe>
                                    </div>
                                    : <div>
                                        {ubicacion === 'dorrego' 
                                            ? 
                                            <div className='contenedor-dorrego'>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26222.680441601482!2d-58.637557642751894!3d-34.75974763956506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc4ee2d53cd4b%3A0x2af07e6c6ffc4ff!2sMorfi%20Burger!5e0!3m2!1sen!2sar!4v1656023074844!5m2!1sen!2sar" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='ubicacion-dorrego-morfi'></iframe>
                                            </div>
                                            :
                                            <div className='contenedor-independencia'>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104972.14069201429!2d-58.58072611036621!3d-34.69560947497083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc3811d0e2ff1%3A0x1f5fe3bbe0b26362!2sMorfi%20Burger!5e0!3m2!1sen!2sar!4v1656023190453!5m2!1sen!2sar"  style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='ubicacion-independencia-morfi'></iframe>
                                            </div>
                                            
                                            }
                                    </div> }
                                        
                                </div>
                    <Empleo/>
            </Container>
 
    )
}

export default Contacto