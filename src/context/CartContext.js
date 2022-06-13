import { createContext, useEffect, useState } from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {

    const [precioTotal, setPrecioTotal] = useState (0)
    const [cartListItems, setCartListItems] = useState ([])
    const [cantidadEnCarro, setCantidadEnCarro] = useState (0)

    useEffect ( () => {
        console.log('Carrito Modificado: ', cartListItems)
    },[cartListItems])
    
    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (product.cantidad>0) {

            if (!isInCart) {
                setCartListItems(cartListItems => [...cartListItems, product])
                setCantidadEnCarro(cantidadEnCarro + product.cantidad)
                setPrecioTotal(precioTotal + product.precio * product.cantidad)

                // return console.log('Se agrego el producto : ', product)
            }
        }
    }

    const deleteItem = (id) => {
        const auxCart = cartListItems.filter(cartItem => cartItem.id !== id);
        setCartListItems(auxCart);
        console.log('producto eliminado del carrito')
    }

    const clearCart = () => {
        setCartListItems([])
        setCantidadEnCarro (0)
        console.log('Se vaciaron todos los elementos del carrito')
    }

   
    const values = {
        cartListItems,
        addProductToCart,
        deleteItem,
        clearCart,
        precioTotal,
        cantidadEnCarro,
      
        
        
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
        )

}

export default CartContext
export { CartProvider }

