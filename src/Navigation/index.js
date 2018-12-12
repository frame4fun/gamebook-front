import React from 'react';
import './Navigation.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignInForm from '../Connexion/SignInForm';
import SignUpForm from '../Connexion/SignUpForm';
import Welcome from '../Welcome';

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/signin/">Sign In</Link>

            <Link to="/signup/">Sign Up</Link>
          </nav>

          <Route exact path="/" component={Welcome} />
          <Route path="/signin/" component={SignInForm} />
          <Route path="/signup/" component={SignUpForm} />
        </div>
      </Router>
    );
  }
}

export default Nav;
