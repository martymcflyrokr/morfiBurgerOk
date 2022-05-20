import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './itemListContainer.css'
const ItemListContainer = ({title}) => {
    return(
        <>
        <div className="contenedor-title">
            <p> {title} </p>
        </div>
        </>
    )
}

export default ItemListContainer