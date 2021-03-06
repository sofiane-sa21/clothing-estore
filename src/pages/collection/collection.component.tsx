import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';
import { selectShopCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage: React.FC = (): JSX.Element => {
  const { categoryId } = useParams<{
    categoryId: string;
  }>();
  const collection = useAppSelector(selectShopCollection(categoryId));
  const navigate = useNavigate();

  if (!categoryId) {
    navigate('/shop');
    return <></>;
  }

  if (!collection) {
    navigate('/shop');
    return <></>;
  } else {
    const { title, items } = collection;
    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default CollectionPage;
