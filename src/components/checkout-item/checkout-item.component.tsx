import React from 'react';

import { CartItem } from '../../redux/cart/cart.slice';

import './checkout-item.styles.scss';

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  cartItem: { name, imageUrl, price, quantity },
}): JSX.Element => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button">&#10005;</span>
  </div>
);

export default CheckoutItem;
