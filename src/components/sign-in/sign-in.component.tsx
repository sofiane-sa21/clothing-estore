import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  state: {
    email: string;
    password: string;
  };

  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="email"
            value={this.state.email}
            name="email"
            type="email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="password"
            value={this.state.password}
            name="password"
            type="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
