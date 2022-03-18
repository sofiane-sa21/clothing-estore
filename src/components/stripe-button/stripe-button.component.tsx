import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Token } from 'react-stripe-checkout';

interface StripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({
  price,
}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KeexMKalTeuqHZPMRGGmXt1Y71h1kY3EkWrKDKULY2NygeykuQfk76oRBUYm8jAjIITEZRlx2g0j44rbaQr1iNQ00xQxV93vz';

  const onToken = (token: Token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
