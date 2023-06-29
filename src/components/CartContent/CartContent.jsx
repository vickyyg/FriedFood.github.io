import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const CartContent = () => {

   const { cartItems, removeFromCart } = useContext(CartContext);

  return <div>
    <h2>Productos</h2>
    {cartItems.map((product) => (
      <div key={product.id}>
        <ItemCount product={product} />
        
      </div>
    ))}
     
  </div>;
  
}

export default CartContent;