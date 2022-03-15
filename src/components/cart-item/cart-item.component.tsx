import React from 'react';

import { CartItem } from '../../redux/slices/cart.slice';

import './cart-item.styles.scss';

interface ICartItemProps {
  item: CartItem;
}

const CartItemComponent: React.FC<ICartItemProps> = ({
  item: { name, price, imageUrl, quantity },
}): JSX.Element => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="Item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItemComponent;
