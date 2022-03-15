import React from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { toggleHidden } from '../../redux/slices/cart.slice';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
