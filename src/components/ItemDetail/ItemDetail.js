import '../ItemDetail/itemDetail.css'
import { Grid, Container, Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {

    const [cantidad, setCantidad] = useState(0)
    const [showButton, setShowButton] = useState(false)

    return (
        <div className="detalle-producto">
        <Container className="container-detalle-producto">
            <Grid container spacing={2}>
                <Grid item xs={8} className="contenedor-imagen">
                    <img src={`../images/${data.imagen}`} className="imagen-producto" alt="imagen-burger"/>
                </Grid>
                <Grid item xs={4} >
                    <h2>{data.nombre}</h2>
                    <h3>Precio: ${data.precio}</h3> 
                    <p>{data.descripcion}</p>
                    {!showButton ?
                    <ItemCount 
                        data = {data}
                        stock={data.stock} 
                        actualizarCantidad={setCantidad}
                        cantidad={cantidad}
                        setShowButton = {setShowButton}
                        />
                        :
                    <Button variant = "outlined"><Link to='/cart'
                    style={{
                        textDecoration: 'none', 
                        listStyle:'none', 
                            }}>TERMINAR COMPRA</Link></Button>}

                </Grid>

            </Grid>
        </Container>
        </div>
    )
}

export default ItemDetail