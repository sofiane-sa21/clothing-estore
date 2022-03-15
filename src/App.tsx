import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { Unsubscribe } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { setCurrentUser } from './redux/slices/user.slice';
import { RootState } from './redux/store';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';

const mapState = (state: RootState) => ({
  currentUser: state.user.currentUser,
});
const mapDispatch = {
  setCurrentUser: setCurrentUser,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

class App extends React.Component<PropsFromRedux> {
  unsubscribeFromAuth: Unsubscribe | null;

  constructor(props: PropsFromRedux) {
    super(props);
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          onSnapshot(userRef, (snapShot) => {
            const user = snapShot.data();
            if (user) {
              this.props.setCurrentUser({
                ...user,
                uid: userRef.id,
              });
            }
          });
        }
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/signin"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default connector(App);
