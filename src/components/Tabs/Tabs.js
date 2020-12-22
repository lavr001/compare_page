import React from 'react';
import classes from './Tabs.module.scss';

const tabs = props => {
  return (
    <div className={classes.box} data-tabs>
      <div className={classes.tab} data-active='true' onClick={(event, name) => props.clicked(event, 'aetna')}>Aetna</div>
      <div className={classes.tab} data-active='false' onClick={(event, name) => props.clicked(event, 'kaiser')}>Kaiser</div>
      <div className={classes.tab} data-active='false' onClick={(event, name) => props.clicked(event, 'anthem')}>Anthem</div>
    </div>
  )
};

export default tabs;
