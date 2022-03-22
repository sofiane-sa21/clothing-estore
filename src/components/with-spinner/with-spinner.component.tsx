import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

interface WithLoadingProps {
  loading: boolean;
}

const WithSpinner =
  <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  ({ loading, ...otherProps }: P & WithLoadingProps) => {
    return loading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...(otherProps as P)} />
    );
  };

export default WithSpinner;
