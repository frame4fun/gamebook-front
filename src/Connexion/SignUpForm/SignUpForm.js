import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import style from '../Connexion.module.css';

const SignUp = ({ history }) => {
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = cb => event => cb(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:3001/users/signup', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ email, password, alias }),
    }).then(() => history.push('/'));
  };

  return (
    <form className={style.Connexion} onSubmit={handleSubmit}>
      <label>
        Alias:
        <input
          type="text"
          name="alias"
          value={alias}
          onChange={handleChange(setAlias)}
        />
      </label>
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

export default withRouter(SignUp);
