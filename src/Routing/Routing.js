import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../Connexion/Login';
import { SignUpForm } from '../Connexion/SignUpForm';
import { Profile } from '../Pages/Profile';
import { Welcome } from '../Pages/Welcome';
import { Stories } from '../Pages/Stories';
import { PrivateRoute } from '../components/PrivateRoute';

const Routing = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <SignUpForm />
    </Route>
    <PrivateRoute path="/profile">
      <Profile />
    </PrivateRoute>
    <Route path="/stories">
      <Stories />
    </Route>
    <Route path="/">
      <Welcome />
    </Route>
  </Switch>
);

export default Routing;
