import React from 'react';

function CartItem({ item, onQuantityAdjust, onItemDelete, onLikeToggle }) {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>{item.price}</span>
      <button onClick={() => onQuantityAdjust(item.id, -1)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onQuantityAdjust(item.id, 1)}>+</button>
      <button onClick={() => onItemDelete(item.id)}>Delete</button>
      <button
        className={item.liked ? 'liked' : ''}
        onClick={() => onLikeToggle(item.id)}
      >
        ❤️
      </button>
    </div>
  );
}

export default CartItem;
