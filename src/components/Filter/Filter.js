import React from 'react';
import classes from './Filter.module.scss';

const filter = props => {
  return (
    <div className={classes.box} data-filter>
      <div className={classes.content}>
        <div className={classes.title}>Show only</div>
        <div className={classes.sections_box}>
          <label htmlFor="highlights">
            <input type="checkbox" id="highlights" />Highlights
          </label>
          <label htmlFor="doctors">
            <input type="checkbox" id="doctors" />Doctors
          </label>
          <label htmlFor="drugs">
            <input type="checkbox" id="drugs" />Drugs
          </label>
          <label htmlFor="hospital">
            <input type="checkbox" id="hospital" />Hospital
          </label>
          <label htmlFor="dental">
            <input type="checkbox" id="dental" />Dental
          </label>
          <label htmlFor="vision">
            <input type="checkbox" id="vision" />Vision
          </label>
          <label htmlFor="hearing">
            <input type="checkbox" id="hearing" />Hearing
          </label>
          <label htmlFor="more">
            <input type="checkbox" id="more" />More
          </label>
        </div>
        <div className={classes.buttons_box}>
          <div className={`${classes.button} ${classes.secondary}`} onClick={props.cancel}>Cancel</div>
          <div className={`${classes.button} ${classes.primary}`} onClick={props.compare}>Compare</div>
        </div>
      </div>
    </div>
  )
};

export default filter;
