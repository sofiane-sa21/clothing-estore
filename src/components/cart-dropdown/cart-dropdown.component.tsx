import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectAllCartItems } from '../../redux/slices/cart.slice';

import CustomButton from '../custom-button/custom-button.component';
import CartItemComponent from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const cartItems = useAppSelector(selectAllCartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItemComponent key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
