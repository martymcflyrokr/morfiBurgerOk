import '../ItemList/itemList.css'
import { useParams } from "react-router-dom";
import Item from '../Item/Item';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import productos from '../../utils/productMocks';


const ItemList = ({}) => {
    const [products,setProducts] = useState ([])
    const {categoria} = useParams()    

    useEffect(()=> {
        getProductos()
        .then((res)=> {
            setProducts(res)
        })
        .catch((err)=> {
        })
        .finally(() => {
        })
    },[categoria])
    
    const getProductos = () => {
        return new Promise ( (resolve, reject) => {
            if (categoria) {
            // setTimeout(() => {
                resolve(productos.filter((prod) => prod.categoria === categoria))
                // }, 2000)
            }
            else {
                resolve(productos)
            }
        } )
    }

    return (
        <>
            <Grid container className="contenedor-lista-productos" spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }} >
                {
                products.map(({nombre, precio, stock, imagen, categoria, id}) => {
                    
                    return (
                            <div key={id}>
                                <Grid item  >
                                    <Item 
                                        nombre={nombre} 
                                        precio={precio} 
                                        stock={stock} 
                                        imagen={imagen} 
                                        categoria={categoria} 
                                        id={id}
                                        >
                                        xs=2
                                    </Item>
                                </Grid>
                            </div>
                    )
                })
                }
            </Grid>
        </>
    )

}

export default ItemList