import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';
import { useAppDispatch } from '../../redux/hooks';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleHidden } from '../../redux/cart/cart.slice';

import CustomButton from '../custom-button/custom-button.component';
import CartItemComponent from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItemComponent key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleHidden());
          navigate('/checkout');
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropDown;
