import '../ItemCount/itemCount.css'
import '../Item/Item'
import Button from '@mui/material/Button';

const ItemCount = ({stock, actualizarCantidad, cantidad, onAdd}) => {

    const clickSuma = () => {

        if( cantidad < stock ) {
            actualizarCantidad(cantidad + 1)
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
            <Button variant="contained" onClick={ () => {onAdd(cantidad)}}>AGREGAR PRODUCTOS</Button>
        </div>
            
            
        </>
            
    )
}
export default ItemCount
