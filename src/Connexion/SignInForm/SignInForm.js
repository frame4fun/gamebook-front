import React, { Component } from 'react';
import style from '../Connexion.module.css';

class SignInForm extends Component {
  handleSubmit = () => this.props.handleCancel();
  render() {
    return (
      <form className={style.Connexion}>
        <label>
          Alias:
          <input type="text" name="alias" />
        </label>
        <label>
          Password:
          <input type="text" name="pass1" />
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
