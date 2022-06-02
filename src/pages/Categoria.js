
import productos from '../utils/productMocks';
import ItemList from '../components/ItemList/ItemList'

const Categoria = () => {

  

    return(
        <div className="contenedor-list">
        <p className="title-item-list-container"></p>
            <ItemList title={"Lista de productos por categoria"} producto={productos}/>
        </div>
    )

}

export default Categoria