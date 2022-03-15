import React from 'react';

import { Item } from '../../models/shop';
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
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
