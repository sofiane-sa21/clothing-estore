import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage: React.FC = (): JSX.Element => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path=":categoryId" element={<CollectionPage />} />
        <Route path="*" element={<CollectionsOverview />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
