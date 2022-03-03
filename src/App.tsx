import React from 'react';
import './App.scss';

import Homepage from './pages/homepage/homepage.component';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Homepage />
    </div>
  );
};

export default App;
