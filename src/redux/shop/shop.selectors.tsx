import { createSelector } from '@reduxjs/toolkit';
import { Collection } from '../../models/shop';

import { RootState } from '../store';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsToArray = createSelector(
  [selectShopCollections],
  (collections) =>
    (Object.keys(collections) as Array<keyof typeof collections>).map(
      (key) => collections[key]
    )
);

export const selectShopCollection = (
  collectionUrl: 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens' | undefined
) =>
  createSelector([selectShopCollections], (collections) => {
    if (collectionUrl) {
      return collections[collectionUrl];
    }
  });
