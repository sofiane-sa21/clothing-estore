import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { useAppDispatch } from '../../redux/hooks';
import { toggleHidden } from '../../redux/cart/cart.slice';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const numberItemsInCart = useAppSelector(selectCartItemsCount);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{numberItemsInCart}</span>
    </div>
  );
};

export default CartIcon;
