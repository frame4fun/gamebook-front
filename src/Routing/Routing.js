import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../Connexion/Login';
import { SignUpForm } from '../Connexion/SignUpForm';
import { Profile } from '../Pages/Profile';
import { Welcome } from '../Pages/Welcome';
import { Stories } from '../Pages/Stories';
import { PrivateRoute } from '../components/PrivateRoute';

const Routing = () => (
  <div>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUpForm} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/stories" component={Stories} />
    <Route path="/" component={Welcome} />
  </div>
);

export default Routing;
