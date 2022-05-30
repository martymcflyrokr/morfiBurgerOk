import ItemDetail from "../ItemDetail/ItemDetail"
import { producto } from "../../utils/productMocks"
import { useEffect, useState } from "react"

const ItemDetailContainer =  () => {

    const [product, setProduct] = useState ({})

    const getItem = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }

    useEffect ( () => {
        getItem()
        .then((res) => {
            console.log('respuesta get item : ',res)
            setProduct(res)
        })

    }, [])
   
    return (
       
        <div>
        <ItemDetail data={product}/>
        </div>
      
    )
}

export default ItemDetailContainer