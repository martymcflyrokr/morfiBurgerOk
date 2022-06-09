import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    
    const [cartListItems, setCartListItems] = useState ([])

    useEffect ( () => {
        console.log('Carrito Modificado: ', cartListItems)
    },[cartListItems])
    
    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (!isInCart) {
            setCartListItems(cartListItems => [...cartListItems, product])
            // return console.log('Se agrego el producto : ', product)
        }
        console.log('Producto ya esta agregado en el carrito')
    }

    const deleteItem = (id) => {
        const auxCart = cartListItems.filter(cartItem => cartItem.id !== id);
        setCartListItems(auxCart);
        console.log('producto eliminado del carrito')
    }

    const clearCart = () => {
        setCartListItems([])
        console.log('Se vaciaron todos los elementos del carrito')
    }

    const values = {
        cartListItems,
        addProductToCart,
        deleteItem,
        clearCart,
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
        )

}

export default CartContext
export { CartProvider }

