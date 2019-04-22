import React from 'react';
import { Route } from 'react-router-dom';
import { SignInForm } from '../Connexion/SignInForm';
import { SignUpForm } from '../Connexion/SignUpForm';
import { Welcome } from '../Pages/Welcome';

const routing = () => (
  <div>
    <Route path="/signin/" component={SignInForm} />
    <Route path="/signup/" component={SignUpForm} />
    <Route path="/" component={Welcome} />
  </div>
);

export default routing;
