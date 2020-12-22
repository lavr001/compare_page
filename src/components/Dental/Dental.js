import React from 'react';
import classes from './Dental.module.scss';

const dental = props => {
  return (
    <div className={classes.box} data-section-dental>
      <div className={classes.section_header}>Dental</div>
      <div className={classes.section_content}>
        {props.content.map( (el, i) => {
          if (el.includes('Copays')) {
            return <div className={classes.section_title} key={i}>{el}</div>
          } else if (!el) {
            return null
          } else {
            if (i % 2 === 0) {
              return <div className={classes.section_subtitle} key={i}>{el}</div>
            } else {
              return <div className={classes.section_cost} key={i}>{el}</div>
            }
          }
        })}
        <div className={classes.section_disclaimer}>* Depending on service provided.</div>
      </div>
    </div>
  )
};

export default dental;
