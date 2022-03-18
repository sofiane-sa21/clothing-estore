import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage: React.FC = (): JSX.Element => {
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL : ${totalPrice}</span>
      </div>
      <div className="test-warning">
        Please use the follow test credit card for payments. <br />
        4242 4242 4242 4242 - Expiration date and CVC random.
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

export default CheckoutPage;
