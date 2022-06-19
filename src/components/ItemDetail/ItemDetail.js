import '../ItemDetail/itemDetail.css'
import { Grid, Container, Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'
import { useState} from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const ItemDetail = ({data}) => {

    const { addProductToCart} = useContext(CartContext)
    
    const sendItemToCart = (qty) => {
        addProductToCart({...data, cantidad : qty})
        terminarCompra();
    }

    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const terminarCompra = () => {
        setShowButton(true);
    }
    
       

    return (
        <div className="detalle-producto">
        <Container className="container-detalle-producto">
            <Grid container spacing={2}>
                <Grid item xs={8} className="contenedor-imagen-detail">
                    <img src={`../images/${data.imagen}`} className="imagen-producto" alt="imagen-burger"/>
                </Grid>
                <Grid item xs={4} >
                    <p className='titulo-burger'>{data.nombre}</p>
                    <p className='precio-burger'>Precio: ${data.precio}</p> 
                    <p className='descripcion-burger'>{data.descripcion}</p>

                    {!showButton ?
                    <ItemCount 
                        stock={data.stock}
                        actualizarCantidad={setCantidad}
                        cantidad={cantidad}
                        setShowButton = {setShowButton}
                        onAdd = {sendItemToCart}
                        />
                        :
                        <div>
                        <Button variant='outlined'><Link to='/productos' style={{textDecoration:'none'}}>AGREGAR MAS PRODUCTOS</Link></Button>
                        <Button style={{background:'green'}}><Link style={{textDecoration:'none', color:'white'}}to='/cart' >IR A CHECKOUT</Link></Button>

                    </div>
                    }
                </Grid>

            </Grid>
        </Container>
        </div>
    )
}

export default ItemDetail