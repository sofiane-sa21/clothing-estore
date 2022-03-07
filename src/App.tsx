import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.scss';

const HatsPage: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
};

export default App;
