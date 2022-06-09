import './itemListContainer.css'
import '../ItemList/ItemList'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title}) => {
    return(

        <div className="contenedor-list">
        <p className="title-item-list-container"> {title}</p>
            <ItemList />
        </div>
    )
}

export default ItemListContainer