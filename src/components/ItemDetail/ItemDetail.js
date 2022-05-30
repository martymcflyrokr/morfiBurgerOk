import '../ItemDetail/itemDetail.css'
import { Grid, Container, Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({data}) => {

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
                    <ItemCount stock={data.stock}/>
                    <Button variant="contained" color="success">Agregar Al Carrito</Button> 
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}

export default ItemDetail