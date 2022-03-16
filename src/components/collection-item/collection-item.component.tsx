import React from 'react';

import { Item } from '../../models/shop';
import { useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cart.slice';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

interface CollectionItemProps {
  item: Item;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
  item,
}): JSX.Element => {
  const { name, price, imageUrl } = item;
  const dispatch = useAppDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
