import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

export interface CustomButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: React.FormEvent) => void;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
