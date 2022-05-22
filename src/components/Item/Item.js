import '../Item/item.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';

const Item = ({producto, precio, stock}) => {
    

    return (
        <div className="card-item">
            <div className="card-container">
                <div className="card-info">
                    <h4 className="producto-info">{producto}</h4>
                    <p className="precio-info">${precio}</p>
                    <ItemCount stock={stock}/>
                    <Button variant="contained">VER DETALLE</Button>
                </div>
                
            </div>
        </div>
    )

}

export default Item