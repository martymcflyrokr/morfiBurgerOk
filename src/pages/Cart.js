import '../pages/Cart.css'
import { Button, Container } from "@mui/material"
import DeleteButton from "@mui/icons-material/Delete"
import CartContext from "../context/CartContext"
import { useContext, useState } from "react"


const Cart = (( ) => {


    const { cartListItems, precioTotal, cantidadEnCarro} = useContext(CartContext)

    const [hayProdus, setHayProdus] = useState(false)

    const validadorProductos = () => {

        if (cantidadEnCarro !== []) {
            setHayProdus(true)
        }
        return hayProdus
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
                        
                         <div className='contenido-tabla' key={id} 
                            style={{display: 'flex', 
                            justifyContent:'space-around', 
                            alignItems:'center'}}>
                                <div className='imagen-producto'>
                                    <img src={`../images/${imagen}`}></img>
                                
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
                                    <DeleteButton></DeleteButton>
                                </div>
                        </div>
                    )
                })}
                    <div>
                        <h3>Subtotal: ${precioTotal} </h3>
                    </div>
                    <div>
                        <h4>NO TENES PRODUCTOS AGREGADOS AL CARRITO.</h4>
                        <h6>¿ya viste nuestros productos?</h6>
                        <Button>VOLVER A VER PRODUCTOS</Button>
                    </div> 
        </Container>


        )
})

export default Cart

