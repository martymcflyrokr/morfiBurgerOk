import '../pages/Cart.css'
import { Button, Container } from "@mui/material"
import DeleteButton from "@mui/icons-material/Delete"
import CartContext from "../context/CartContext"
import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'


const Cart = (( ) => {


    const { cartListItems, precioTotal, cantidadEnCarro, deleteItem, getPrecioTotal} = useContext(CartContext)

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
                    : <div>
                        <h3>Subtotal: ${ getPrecioTotal()} </h3>
                    </div>
                    }
                    
                   

        </Container>
        )
})

export default Cart

