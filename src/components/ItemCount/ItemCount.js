import '../ItemCount/itemCount.css'
import '../Item/Item'
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

const ItemCount = ({stock, actualizarCantidad, cantidad, onAdd}) => {

    const clickSuma = () => {

        if( cantidad < stock ) {
            actualizarCantidad(cantidad + 1)
            // console.log('Producto agregado: ', data)
        }
    };

    const clickResta = () => {
        if ( cantidad > 1) {
            actualizarCantidad (cantidad - 1);
        }
    };

    return (
        <>
        <div className="container-cantidades">
            <Button variant="outlined" onClick={clickResta} >-</Button>
            <div className="cantidad-productos">
                <p>{cantidad}</p>
            </div>
            <Button variant="outlined" onClick={clickSuma} >+</Button>
        </div>

            <Button variant="contained" onClick={ () => {onAdd(cantidad)}}>AGREGAR PRODUCTOS</Button>
            
        </>
            
    )
}
export default ItemCount
