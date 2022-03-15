import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { Collection } from '../../models/shop';
import { SHOP_DATA } from './shop.data';

class ShopPage extends React.Component {
  state: {
    collections: Collection[];
  };

  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
