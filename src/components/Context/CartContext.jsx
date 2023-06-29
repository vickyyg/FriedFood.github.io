import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
        );
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>{children}</CartContext.Provider>
      )
}

export { CartContext, CartProvider };