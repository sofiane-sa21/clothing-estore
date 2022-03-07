import React from 'react';

import { Item } from '../../pages/shop/shop.data';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

type CollectionPreviewProps = {
  title: string;
  items: Item[];
};

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}): JSX.Element => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
