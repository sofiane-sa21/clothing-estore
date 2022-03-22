import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { query, onSnapshot, Unsubscribe } from 'firebase/firestore';

import {
  collectionsCol,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.slice';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component<PropsFromRedux> {
  state: {
    loading: boolean;
  };
  unsubscribeFromSnapshot: Unsubscribe | null;

  constructor(props: PropsFromRedux) {
    super(props);
    this.unsubscribeFromSnapshot = null;
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const q = query(collectionsCol);
    this.unsubscribeFromSnapshot = onSnapshot(q, async (querySnapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(querySnapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshot) {
      this.unsubscribeFromSnapshot();
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            path=":categoryId"
            element={<CollectionPageWithSpinner loading={loading} />}
          />
          <Route
            path="*"
            element={<CollectionsOverviewWithSpinner loading={loading} />}
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatch = {
  updateCollections: updateCollections,
};
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ShopPage);
