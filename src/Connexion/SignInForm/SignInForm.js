import React, { Component } from 'react';

class SignInForm extends Component {
  render() {
    return (
      <form>
        <label>
          Alias:
          <input type="text" name="alias" />
        </label>
        <label>
          Password:
          <input type="text" name="pass1" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignInForm;
