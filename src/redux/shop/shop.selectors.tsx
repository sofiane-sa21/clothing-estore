import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsToArray = createSelector(
  [selectShopCollections],
  (collections) =>
    collections
      ? (Object.keys(collections) as Array<keyof typeof collections>).map(
          (key) => collections[key]
        )
      : []
);

export const selectShopCollection = (collectionUrl: string | undefined) =>
  createSelector([selectShopCollections], (collections) => {
    if (collections) {
      if (collectionUrl) {
        return collections[collectionUrl];
      }
    } else {
      return null;
    }
  });
