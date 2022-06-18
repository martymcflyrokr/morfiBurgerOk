import { createContext, useEffect, useState } from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {

    const [precioTotal, setPrecioTotal] = useState (0)
    const [cartListItems, setCartListItems] = useState ([])
    const [cantidadEnCarro, setCantidadEnCarro] = useState (0)

    useEffect ( () => {
        console.log('Carrito Modificado: ', cartListItems)
        setCantidadEnCarro(getQuantity())
        setPrecioTotal(getPrecioTotal())
    },[cartListItems])
    
    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (product.cantidad>0) {

            if (!isInCart) {
                setCartListItems(cartListItems => [...cartListItems, product])
                setCantidadEnCarro(cantidadEnCarro + product.cantidad)
                setPrecioTotal(getPrecioTotal())
            }
        }
    }

    const getQuantity = () => {
        let acumulador = 0
        cartListItems.forEach(prod => {
            acumulador += prod.cantidad
        })
        return acumulador
    }

    const getPrecioTotal = () => {
        let acum = 0
        cartListItems.forEach(prod => {
            acum += prod.precio * prod.cantidad
        })
        return acum
    }

    const deleteItem = (id) => {
        const auxCart = cartListItems.filter(cartItem => cartItem.id !== id);
        setCartListItems(auxCart);
        getPrecioTotal()
        console.log('producto eliminado del carrito')
    }

    const clearCart = () => {
        setCartListItems([])
        setCantidadEnCarro (0)
        getPrecioTotal()
        console.log('Se vaciaron todos los elementos del carrito')
    }

   
    const values = {
        cartListItems,
        addProductToCart,
        deleteItem,
        clearCart,
        precioTotal,
        cantidadEnCarro,
        getQuantity,
        getPrecioTotal
      
        
        
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
        )

}

export default CartContext
export { CartProvider }

