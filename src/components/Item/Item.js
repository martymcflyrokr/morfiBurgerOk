import '../Item/item.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';
import { Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({nombre, precio, stock, imagen, id, categoria}) => {

    console.log('este es el ID de producto:', id)
    
    return (
        <div className="card-item">
            <div className="card-container">
                <div className="card-imagencontainer">
                    <img src={`../images/${imagen}`} className="imagen-producto"/>
                </div>
                <div className="card-info">
                    <h4 className="producto-info">{nombre}</h4>
                    <p className="precio-info">${precio}</p>
                    <p className="precio-info">Categoria: {categoria}</p>
                    
                    <Button variant="contained" ><Link to={"/item/" + id} style={{color: 'white', textDecoration:'none'}}>VER DETALLE</Link></Button>
                </div>
                
            </div>
        </div>

    )
}

export default Item