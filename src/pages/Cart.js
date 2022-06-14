import '../pages/Cart.css'
import { Button, Container } from "@mui/material"
import DeleteButton from "@mui/icons-material/Delete"
import CartContext from "../context/CartContext"
import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'


const Cart = (( ) => {


    const { cartListItems, precioTotal, cantidadEnCarro, deleteItem} = useContext(CartContext)

    useEffect(()=> {
        validadorProductos()
    }, [cantidadEnCarro])
    

    const [hayProdus, setHayProdus] = useState(false)

    const validadorProductos = () => {

        if (cantidadEnCarro !== 0) {
            setHayProdus(true)
        } else if (cantidadEnCarro == 0) {
            setHayProdus(false)
        }
    }

    return (

        <Container className='contenedor-general'>
            
            <div className='contenedor-titulos'>

                    <p>Imagen</p>
                    <p>Producto</p>
                    <p>Cantidad</p>
                    <p>Precio unitario</p>
                    <p>Precio total</p>
                    <p>Eliminar</p>
            </div>
           
                {cartListItems.map((item) => {
                    const {id, nombre, imagen, precio, cantidad} = item
                    
                    
                    return(
                        <>
                         <div className='contenido-tabla' key={id} 
                            style={{display: 'flex', 
                            justifyContent:'space-around', 
                            alignItems:'center'}}>
                                <div className='imagen-producto'>
                                    <img src={`../images/${imagen}`} alt='imagen-producto'></img>
                                </div>
                                <div className='nombre-producto'>
                                    <h5>{nombre}</h5>
                                </div>
                                <div className='cantidad-productos'>
                                    <h5>{cantidad}</h5>
                                </div>
                                <div className='precio-unitario'>
                                    <h5>${precio}</h5>
                                </div>
                                <div className='precio-total'>
                                   <h5>${precio*cantidad}</h5>
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
                    : <div>
                        <h3>Subtotal: ${precioTotal} </h3>
                    </div>
                    }
                    
                   

        </Container>
        )
})

export default Cart

