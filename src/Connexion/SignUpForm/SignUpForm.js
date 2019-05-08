import React, { Component } from 'react';

import style from '../Connexion.module.css';

class SignUpForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(event.target);

    fetch('http://localhost:3001/users/signup', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: data,
    });
  }
  render() {
    return (
      <form className={style.Connexion} onSubmit={this.handleSubmit}>
        <label>
          Alias:
          <input type="text" name="alias" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <label>
          Confirm Password:
          <input type="text" name="pass2" />
        </label>

        <input type="submit" value="Submit" />
        <input
          type="button"
          name="cancelCourse"
          value="cancel"
          onClick={this.props.handleCancel}
        />
      </form>
    );
  }
}
export default SignUpForm;
