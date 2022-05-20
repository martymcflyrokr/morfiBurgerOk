import './Test.css'
import React, { useState } from 'react';


const Clickeadas  = () => {
    const [contador, setContador] = useState(0);
    const [fecha, setFecha] = useState ();

    const tocarClick = () => {
        setContador(contador + 1 );
        setFecha(new Date().toLocaleString())
    }

    return (
        <div>
            <button onClick = {tocarClick}>Clickeame</button>
            <p>clicks tocados: {contador} </p>
            <p>horario ultimo click: {fecha}</p>
        </div>
        
    )
}

export default Clickeadas