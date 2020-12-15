import React from 'react';
import classes from './Plan.module.scss';

const plan = props => {
  return (
    <div className={classes.box}>
      <div className={classes.plan_logo} data-plan='aetna'></div>
      <div className={classes.plan_name}>{props.name}</div>
    </div>
  )
};

export default plan;
