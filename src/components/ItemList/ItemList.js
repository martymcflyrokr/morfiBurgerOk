import '../ItemList/itemList.css'
import { useParams } from "react-router-dom";
import Item from '../Item/Item';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import productos from '../../utils/productMocks';
//firestore
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';



const ItemList = ({}) => {
    const [products,setProducts] = useState ([])
    const {categoria} = useParams()    


    useEffect(()=> {
        getProducts().then( (productos) => {
            // console.log('getProducts : ', productos)
        })
        
    
    },[categoria])

    const getProducts = async () => {
        const productSnapshot = await getDocs(collection(db, "productos"));
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product;
        })
        return productList

    }
    
    // const getProducts = () => {
    //     return new Promise ( (resolve, reject) => {
    //         if (categoria) {
    //         // setTimeout(() => {
    //             resolve(productos.filter((prod) => prod.categoria === categoria))
    //             // }, 2000)
    //         }
    //         else {
    //             resolve(productos)
    //         }
    //     } )
    // }

  
    return (
        <>
            <Grid container className="contenedor-lista-productos" spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }} >
                {
                productos.map(({nombre, precio, stock, imagen, categoria, id}) => {
                    
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