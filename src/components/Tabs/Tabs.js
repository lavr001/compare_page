import React from 'react';
import classes from './Tabs.module.scss';

const tabs = props => {
  return (
    <div className={classes.box}>
      <div className={classes.tab} data-active='true' onClick={(event, name) => props.clicked(event, 'aetna')}>Plan A</div>
      <div className={classes.tab} data-active='false' onClick={(event, name) => props.clicked(event, 'kaiser')}>Plan B</div>
      <div className={classes.tab} data-active='false' onClick={(event, name) => props.clicked(event, 'anthem')}>Plan C</div>
      <div className={classes.tab}>Add Current Plan</div>
    </div>
  )
};

export default tabs;
