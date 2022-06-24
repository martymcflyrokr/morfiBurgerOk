import { TextField, Button } from '@mui/material'
import '../Empleo/empleo.css'

const Empleo = (() => {

    return (
        <div className='contenedor-formulario-general'>
            <div className='Titulo-formulario-empleo'>
                <h2>TRABAJÁ CON NOSOTROS</h2>
            </div>
            <form className="formulario-empleo">
                <div className='formulario-campos'>
                    <ul>
                        <li>
                            <TextField className='input-formulario' label='NOMBRE Y APELLIDO'></TextField>
                        </li>
                        <li>
                            <TextField className='input-formulario' label='TELEFONO'></TextField>
                        </li>
                        <li>
                            <TextField className='input-formulario' label='PERFIL LINKEDIN'></TextField>
                        </li>
                    
                    
                   
                    <Button>ENVIAR</Button>
                    </ul>
                </div>
            </form>
        </div>
    )
})

export default Empleo