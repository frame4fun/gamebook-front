import React, { Component } from 'react';
import style from './Stories.module.css';
import { StorySummary } from './StorySummary';

class Stories extends Component {
  render() {
    return (
      <div className={style.div}>
        <StorySummary />
        <StorySummary />
        <StorySummary />
        <StorySummary />
        <StorySummary />
      </div>
    );
  }
}
export default Stories;
