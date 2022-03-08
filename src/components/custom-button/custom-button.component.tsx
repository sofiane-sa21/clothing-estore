import React from 'react';

import './custom-button.styles.scss';

type CustonButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: React.FormEvent) => void;
  isGoogleSignIn?: boolean;
};

const CustomButton: React.FC<CustonButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
