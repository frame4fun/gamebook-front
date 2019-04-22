import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(event.target);

    fetch('http://192.168.1.10:8080/users/signup', {
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
      <form onSubmit={this.handleSubmit}>
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
      </form>
    );
  }
}
export default SignUpForm;
