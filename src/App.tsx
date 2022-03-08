import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Unsubscribe, User } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth: Unsubscribe | null;
  state: {
    currentUser: User | null;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: null,
    };
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          onSnapshot(userRef, (snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
          });
        }
      } else {
        this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
