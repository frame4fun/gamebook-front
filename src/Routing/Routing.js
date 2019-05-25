import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { SignInForm } from '../Connexion/SignInForm';
import { SignUpForm } from '../Connexion/SignUpForm';
import { Profile } from '../Pages/Profile';
import { Welcome } from '../Pages/Welcome';

class Routing extends Component {
  handleCancel = () => this.props.history.push('/');

  render() {
    return (
      <div>
        <Route
          path="/signin/"
          render={props => (
            <SignInForm
              {...props}
              handleCancel={this.handleCancel}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          path="/signup/"
          render={props => (
            <SignUpForm
              {...props}
              handleCancel={this.handleCancel}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          path="/profile/"
          render={props => (
            <Profile {...props} handleCancel={this.handleCancel} />
          )}
        />
        <Route path="/" component={Welcome} />
      </div>
    );
  }
}

export default withRouter(Routing);
