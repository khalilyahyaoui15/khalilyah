import React, { useState } from 'react';
import CartItem from './CartItem';
import TotalPrice from './TotalPrice';

function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 1, liked: false },
    // Add more items here...
  ]);

  const handleQuantityAdjust = (itemId, increment) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity + increment) }
          : item
      )
    );
  };

  const handleItemDelete = (itemId) => {
    setItems(prevItems =>
      prevItems.filter(item => item.id !== itemId)
    );
  };

  const handleLikeToggle = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, liked: !item.liked } : item
      )
    );
  };

  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="shopping-cart">
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onQuantityAdjust={handleQuantityAdjust}
          onItemDelete={handleItemDelete}
          onLikeToggle={handleLikeToggle}
        />
      ))}
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
}

export default ShoppingCart;
