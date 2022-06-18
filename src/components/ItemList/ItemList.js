import '../ItemList/itemList.css'
import { useParams } from "react-router-dom";
import Item from '../Item/Item';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
//firestore
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const ItemList = ({}) => {
    const [products,setProducts] = useState ([])
    const {categoria} = useParams()    

    useEffect(()=> {
        getProducts().then( (productos) => {            
            categoria ? filtroFirebase() : setProducts(productos)
        })

    },[categoria])

    const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product;
        })
        return productList
    }

    const filtroFirebase = async() => {
        const productRef = collection(db, 'productos')
        const resultadoQuery = query(productRef, where("categoria", "==", categoria));
        const querySnapshot = await getDocs(resultadoQuery);
        const productList = querySnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product;
        })

        return setProducts(productList)
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