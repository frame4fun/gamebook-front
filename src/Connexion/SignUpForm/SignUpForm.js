import React, { Component } from 'react';

import style from '../Connexion.module.css';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { alias: '', email: '', password: '', pass2: '' };
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
    if (this.state.password !== this.state.pass2) {
      alert('The password fiels are not equals. Please fill them again');
      this.setState({
        password: '',
        pass2: '',
      });
    } else {
      fetch('http://localhost:3001/users/signup', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(this.state),
      });
      this.props.handleCancel();
    }
  }
  render() {
    return (
      <form className={style.Connexion} onSubmit={this.handleSubmit}>
        <label>
          Alias:
          <input type="text" name="alias" onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" onChange={this.handleChange} />
        </label>
        <label>
          Confirm Password:
          <input type="text" name="pass2" onChange={this.handleChange} />
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
