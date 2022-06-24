import { TextField, Button, Radio, FormControl } from '@mui/material'
import '../Empleo/empleo.css'

const Empleo = (() => {

    return (
        <div className='contenedor-formulario-general'>
            <div className='Titulo-formulario-empleo'>
                <h2>TRABAJÁ CON NOSOTROS</h2>
                <p>Te ofrecemos un excelente clima laboral,<br/>un sueldo acorde al mercado y muchos beneficios mas!<br/>
                    Tenemos posiciones abiertas para administrativos y atención al cliente.
                </p>
            </div>
            <form className="formulario-empleo">
                <div className='formulario-campos'>
                    <ul className='lista-items-form'>
                        <li>
                            <TextField className='input-formulario' label='NOMBRE Y APELLIDO'></TextField>
                        </li>
                        <li>
                            <TextField className='input-formulario' label='TELEFONO'></TextField>
                        </li>
                        <li>
                            <TextField className='input-formulario' label='PERFIL LINKEDIN'></TextField>
                        </li>

                    <Button variant='contained'>POSTULATE!</Button>
                    </ul>
                </div>
            </form>
        </div>
    )
})

export default Empleo