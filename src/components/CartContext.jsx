import React, {useEffect, useState} from 'react';
import {guardarDataLocal, cargarDataLocal} from '../utils/functions.js';
export const CartContext = React.createContext();

const CartProvider = ({defaultValue = [], children}) =>{

    const [cartItems, setCartItems] = useState(defaultValue);
    const [selectedItemId, setSelectedItemId] = useState(defaultValue);
    let dataLocal = [];

    useEffect(() => {
        dataLocal = cargarDataLocal("carrito");
        if (dataLocal !== 0){
          setCartItems(dataLocal);
        } 
      }, [])

    useEffect (() => {
        dataLocal !== cartItems && (guardarDataLocal(cartItems, "carrito"));
    }, [cartItems])

    function getFromCart (id) {
        return cartItems.find(item => item.id === id)
    }

    function isInCart (id) {
        let itemInCart = getFromCart(id);
        return itemInCart 
    }

    const addItem = (newItem, seleccionados) =>{

        if (cartItems.length === 0) {
            newItem = {...newItem, seleccionados} 
            setCartItems([...cartItems, newItem]);
        }else{
            newItem.id ?? console.log("Item no definido.");
            let itemInCart = isInCart(newItem.id); 
            if (itemInCart) {
                itemInCart.seleccionados = itemInCart.seleccionados + seleccionados;
                setCartItems([...cartItems])
            }
            else {
                newItem = {...newItem, seleccionados} 
                setCartItems([...cartItems, {...newItem}]);
            }
        }
    }

    function removeItem (id) {
        let index = cartItems.findIndex(item => item.id === id)
        if (index >= 0){
            cartItems.splice(index,1)
            setCartItems([...cartItems])
        }
    }

    function clear() {
        setCartItems([]);
    }
    

    return <CartContext.Provider value = {{selectedItemId, setSelectedItemId, cartItems, getFromCart, addItem, removeItem, clear, isInCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;