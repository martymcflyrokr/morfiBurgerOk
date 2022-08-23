import '../Empleo/empleo.css';
import { TextField, Button } from '@mui/material'
import db from '../../utils/firebaseConfig';
import { collection, addDoc } from '@firebase/firestore';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row, Col } from 'react-bootstrap';


const Empleo = (() => {

    const [postulacion, setPostulacion] = useState({
        postulante:{
            nombre: '',
            email: '',
            telefono: '',
            puesto:''
        }
    }
    )
    const [formValue, setFormValue] = useState({
        nombre:'',
        email:'',
        telefono:'',
        puesto:''
     })
     
    const [postulacionCompleta, setPostulacionCompleta] = useState()


    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPostulacion({...postulacion, postulante : formValue})
        guardarPostulante({...postulacion, postulante : formValue})
    }
    
    const guardarPostulante = async (nuevoPostulante) => {
        const ordenFirebase = collection( db, 'postulaciones',)
        const orderDoc = await addDoc(ordenFirebase, nuevoPostulante)
        setPostulacionCompleta(orderDoc.id)
        if (postulacionCompleta) {
            notify()
        }
    }

    const notify = () => toast("Postulación exitosa, buena suerte!",{
        className: 'black-background',
        bodyClassName: "grow-font-size",
        progressClassName: 'fancy-progress-bar'
      });

    
    
    return (
        <Row className='contenedor-formulario-general'>
            <Col className='Titulo-formulario-empleo'>
                <h2>TRABAJÁ CON NOSOTROS</h2>
                <p>Te ofrecemos un excelente clima laboral,<br/>un sueldo acorde al mercado y muchos beneficios mas!<br/>
                    Tenemos posiciones abiertas para administrativos y atención al cliente.
                </p>
                <h3>FRANQUICIAS</h3>
                <p>Si queres informarte acerca de nuestro metodo de franquicias, escribi "franquicia"<br/>
                    en el campo Puesto del formulario.
                </p>
            </Col>
            <Col>    
                <form className="formulario-empleo" onSubmit={handleSubmit}>
                    <div className='formulario-campos'>
                        <ul className='lista-items-form'>
                            <li>
                                <TextField className='input-formulario' 
                                    label='NOMBRE Y APELLIDO'
                                    name='nombre'
                                    value= {formValue.nombre}
                                    onChange={handleChange} 
                                    required></TextField>
                            </li>
                            <li>
                                <TextField className='input-formulario' 
                                    label='TELEFONO'
                                    name='telefono'
                                    value= {formValue.telefono}
                                    onChange={handleChange}
                                    required></TextField>
                            </li>
                            <li>
                                <TextField className='input-formulario' 
                                    label='EMAIL'
                                    name='email'
                                    value= {formValue.email}
                                    onChange={handleChange}
                                    required></TextField>
                            </li>
                            <li>
                                <TextField className='input-formulario' 
                                    label='PUESTO'
                                    name='puesto'
                                    value= {formValue.puesto}
                                    onChange={handleChange}
                                    required></TextField>
                            </li>
                            <li>
                                <Button variant='contained' type='submit'>POSTULATE!</Button>
                                <ToastContainer  style={{ fontSize: "1rem" }} />                            
                            </li>

                        </ul>
                    </div>
                </form>
            </Col>
        </Row>
    )
})

export default Empleo
