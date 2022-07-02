import '../Item/item.css';
import { Link } from 'react-router-dom';

const Item = ({nombre, precio, stock, imagen, id, categoria}) => {
    
    return (
        <div className="card-item">
            <div className="card-container">
                <div className="card-imagencontainer">
                <Link to={"/item/" + id}><img src={`../images/${imagen}`} className="imagen-producto" alt={`"imagen_producto_"${nombre}`} /></Link>
                </div>
                <div className="card-info">
                    <h4 className="producto-info">{nombre}</h4>
                    <p className="precio-info">${precio}</p>
                </div>
                
            </div>
        </div>

    )
}

export default Item