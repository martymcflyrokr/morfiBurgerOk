import '../ItemList/itemList.css'
import Item from '../Item/Item';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import productos from '../../utils/productMocks';

const ItemList = ({}) => {
    const [products,setProducts] = useState ([])
    
    useEffect(()=> {

        getProductos()
        .then((res)=> {
            setProducts(res)
        })
        .catch((err)=> {
        })
        .finally(() => {
        })

    },[])
    
    const getProductos = () => {

        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
            
        } )
    }

    return (
        <>
            <Grid container className="contenedor-lista-productos" spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }} >
                {
                products.map(({nombre, precio, stock, imagen}) => {
                    
                    return (
                            <div>
                                <Grid item >
                                    <Item producto={nombre} precio={precio} stock={stock} imagen={imagen}>xs=2</Item>
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