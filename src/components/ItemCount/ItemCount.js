import '../ItemCount/itemCount.css'
import '../Item/Item'
import React, { useState } from 'react';
import Button from '@mui/material/Button';




const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0);
    
    const clickSuma = () => {
        
        if( count <= stock ) {
            setCount (count + 1);
        }
    };

    const clickResta = () => {
        if ( count > 0) {
            setCount (count - 1);
        }
    };

    return (
        <div className="container-cantidades">
            
            <Button variant="outlined" onClick={clickResta} >-</Button>
            <div className="cantidad-productos">
                <p>{count}</p>
            </div>
            <Button variant="outlined" onClick={clickSuma} >+</Button>
        </div>
    )
}

export default ItemCount