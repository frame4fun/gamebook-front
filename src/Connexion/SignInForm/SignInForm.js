import React, { Component } from 'react';
import style from '../Connexion.module.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3001/users/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(this.state),
    });
    this.props.handleCancel();
  }
  render() {
    return (
      <form className={style.Connexion}>
        <label>
          Alias:
          <input type="text" name="email" onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
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

export default SignInForm;
