import React from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { addItem, removeItem, clearItem } from '../../redux/cart/cart.slice';
import { CartItem } from '../../redux/cart/cart.slice';
import { Item } from '../../models/shop';

import './checkout-item.styles.scss';

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  cartItem,
}): JSX.Element => {
  const { name, imageUrl, price, quantity } = cartItem;
  const item = cartItem as Item;
  const dispatch = useAppDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => dispatch(clearItem(item))}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
