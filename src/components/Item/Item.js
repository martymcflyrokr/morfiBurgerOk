import '../Item/item.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';
import { Grid, Container } from '@mui/material';

const Item = ({producto, precio, stock, imagen}) => {
    
    return (
        <div className="card-item">
            <div className="card-container">
                <div className="card-imagencontainer">
                    <img src={`../images/${imagen}`} className="imagen-producto"/>
                </div>
                <div className="card-info">
                    <h4 className="producto-info">{producto}</h4>
                    <p className="precio-info">${precio}</p>
                    
                    <Button variant="contained">VER DETALLE</Button>
                </div>
                
            </div>
        </div>

    )
}

export default Item