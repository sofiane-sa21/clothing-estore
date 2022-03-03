import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const Homepage: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;