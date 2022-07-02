import '../pages/Cart.css'
import { Button, Container, Modal, TextField } from "@mui/material"
import DeleteButton from "@mui/icons-material/Delete"
import CartContext from "../context/CartContext"
import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {addDoc, collection } from 'firebase/firestore'
import db from '../utils/firebaseConfig'

const Cart = (( ) => {


    const { cartListItems, cantidadEnCarro, deleteItem, getPrecioTotal, clearCart} = useContext(CartContext)

    useEffect(()=> {
        validadorProductos()
    }, [cantidadEnCarro])
    

    const [hayProdus, setHayProdus] = useState(false)
    const [formValue, setFormValue] = useState({
       nombre:'',
       email:'',
       telefono:'',
    })
    const [orden, setOrden] = useState({
        comprador :{},
        items : cartListItems.map( (item) => {
            return {
                id : item.id,
                nombre : item.nombre,
                precio : item.precio,
                cantidad : item.cantidad,
            }
        }), 
        total: getPrecioTotal()
    })
    
    const [ordenCompleta, setOrdenCompleta] = useState()
 
    const handleSubmit = (e) => {
        e.preventDefault()
        setOrden({...orden, comprador : formValue})
        guardarOrden({...orden, comprador : formValue})        
    }

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value})
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        clearCart()};

    const guardarOrden = async (nuevaOrden) => {
        const ordenFirebase = collection( db, 'ordenes',)
        const orderDoc = await addDoc(ordenFirebase, nuevaOrden)
        setOrdenCompleta(orderDoc.id)        
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }

    const validadorProductos = () => {

        if (cantidadEnCarro !== 0) {
            setHayProdus(true)
        } else if (cantidadEnCarro == 0) {
            setHayProdus(false)
        }
    }

    return (

        <Container className='contenedor-general'>
            
            {hayProdus && <div className='contenedor-titulos'>

                    <p>Imagen</p>
                    <p>Producto</p>
                    <p>Cantidad</p>
                    <p>Precio unitario</p>
                    <p>Precio total</p>
                    <p>Eliminar</p>
            </div>}
           
                {cartListItems.map((item) => {
                    const {id, nombre, imagen, precio, cantidad} = item
                    
                    return(
                        <>
                         <div className='contenido-tabla' key={id} 
                            style={{display: 'flex', 
                            justifyContent:'space-around', 
                            alignItems:'center'}}>
                                <div className='contenedor-imagen-producto'>
                                    <img className="imagen-producto-carrito" src={`../images/${imagen}`} alt='imagen-producto'></img>
                                </div>
                                <div className='nombre-producto'>
                                    <p className='nombre-producto-carro'>{nombre}</p>
                                </div>
                                <div className='cantidad-productos'>
                                    <precioTotal>{cantidad}</precioTotal>
                                </div>
                                <div className='precio-unitario'>
                                    <p className='precio-producto'>${precio}</p>
                                </div>
                                <div className='precio-total'>
                                   <p className='precio-total-font'>${precio*cantidad}</p>
                                </div>
                                <div className='boton-eliminar'>
                                    <DeleteButton onClick={() => {
                                          deleteItem(item.id)}}>ELIMINAR PRODUCTOS</DeleteButton>
                                </div>
                        </div>
                        </>
                    )
                })}
                {!hayProdus ?
                    <div className='contenedor-general-sin-items'>
                        <h4>NO TENES PRODUCTOS AGREGADOS AL CARRITO.</h4>
                        <h6>¿ya viste nuestros productos?</h6>
                    <Button variant='outlined'><Link to='/productos' style={{textDecoration:'none'}}>VOLVER A VER PRODUCTOS</Link></Button>
                    </div>
                    : 
                    
                    <div>
                        <h3>Subtotal: ${ getPrecioTotal()} </h3>
                        <Button variant='outlined'><Link to='/productos' style={{textDecoration:'none'}}>AGREGAR MAS PRODUCTOS</Link></Button>
                        <Button style={{background:'black', color:'white', marginLeft:'10px'}} onClick={handleOpen}>COMPLETAR COMPRA</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            
                          
                            >
                            <Box sx={style}>
                                {ordenCompleta ? ('COMPRA EXITOSA!') :  
                                (<Typography id="modal-modal-title" variant="h6" component="h2" >
                                FORMULARIO DE CONTACTO
                                </Typography>)}
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                {ordenCompleta ? (
                                    <div>
                                        Se generó su orden correctamente <br/>
                                        Numero de orden: <b>{ordenCompleta}</b>
                                    </div> ) 
                                : 
                                    (
                                    <form className='formulario-contacto' onSubmit={handleSubmit}>
                                        
                                    <TextField 
                                        name='nombre'
                                        label='Nombre y Apellido' 
                                        variant='outlined' 
                                        className='items-form'
                                        onChange={handleChange}
                                        value={formValue.nombre}
                                        required
                                        >
                                    </TextField>
                                    <TextField 
                                        name='telefono'
                                        label='Telefono' 
                                        variant='outlined' 
                                        className='items-form'
                                        onChange={handleChange}
                                        value={formValue.telefono}
                                        required
                                        >
                                    </TextField>
                                    <TextField 
                                        name='email'
                                        label='Email' 
                                        variant='outlined' 
                                        className='items-form'
                                        onChange={handleChange}
                                        value={formValue.email}
                                        required
                                        >
                                    </TextField>
                                    <Button 
                                        type='submit' 
                                        variant='contained' 
                                        className='items-form'
                                        >
                                            ENVIAR
                                    </Button>
                                </form> )}
                                
                                </Typography>
                            </Box>
                            </Modal>
                    </div>
                }
        </Container>
        )
})

export default Cart

