import '../ItemList/itemList.css'
import Item from '../Item/Item';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';


const ItemList = () => {
    const [products,setProducts] = useState ([])
    const productos = [
    {
        nombre : 'Hamburgesa con queso',
        precio : 500,
        stock : 4,
        descripcion: '',
        id : 1,
        imagen : 'burger1.jpg'



    },
    {
        nombre : 'Burger completa',
        precio : 700,
        stock : 5,
        descripcion: '',
        id : 2,
        imagen : 'burger1.jpg'


    },
    {
        nombre : 'Combo con papas cheddar',
        precio : 900,
        stock : 10,
        descripcion: '',
        id : 3,
        imagen : 'burger1.jpg'


    },
    {
        nombre : 'Triple Bacon y cheddar con papas',
        precio : 1200,
        stock : 8,
        descripcion: '',
        id : 4,
        imagen : 'burger1.jpg'


    },
    {
        nombre : 'Super doble doble',
        precio : 1400,
        stock : 10,
        descripcion: '',
        id : 5,
        imagen : 'burger1.jpg',


    },

    ]
    
    const getProductos = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
            
        } )
    }

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

   

    return (
        <>
            <Grid container className="contenedor-lista-productos" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {
                products.map(({nombre, precio, stock,id}) => {
                    
                    return (
                        
                            <div>
                                <Grid item key={id}>
                                    <Item producto={nombre} precio={precio} stock={stock}>xs=2</Item>
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