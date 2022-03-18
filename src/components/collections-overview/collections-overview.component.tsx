import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectShopCollectionsToArray } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview: React.FC = (): JSX.Element => {
  const collections = useAppSelector(selectShopCollectionsToArray);
  // console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
