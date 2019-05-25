import React, { Component } from 'react';
import styles from './Profile.module.css';

class Profile extends Component {
  render() {
    return (
      <form className={styles.Profile}>
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
        <input type="button" value="Cancel" onClick={this.props.handleCancel} />
      </form>
    );
  }
}

export default Profile;
