import React from 'react';

import './custom-button.styles.scss';

type CustonButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
};

const CustomButton: React.FC<CustonButtonProps> = ({
  children,
  ...otherProps
}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
