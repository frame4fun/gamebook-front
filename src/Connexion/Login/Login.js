import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import style from '../Connexion.module.css';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = cb => event => cb(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:3001/users/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }).then(() => history.push('/'));
  };

  return (
    <form className={style.Connexion} onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange(setEmail)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange(setPassword)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default withRouter(Login);
