import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getDoc, doc} from "firebase/firestore";
import db from '../../utils/firebaseConfig'



const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product , setProduct] = useState({})


    useEffect(() => {

        getProduct()
        .then( (prod) => {
            setProduct(prod)
        })

    }, [id])


    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnap = await getDoc(docRef)
        let product = docSnap.data()
        product.id = docSnap.id
        return product
        
    }

    return(
        <>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer