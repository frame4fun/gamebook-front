import React from 'react';

class SignInForm extends React.Component {
  render() {
    return (
      <form>
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
          <input type="text" name="pass1" />
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
export default SignInForm;
