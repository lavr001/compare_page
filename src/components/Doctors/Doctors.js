import React from 'react';
import classes from './Doctors.module.scss';

const doctors = props => {
  return (
    <div className={classes.box} data-section-doctors>
      <div className={classes.section_header}>Doctors</div>
      <div className={classes.section_content}>
        {props.content.map( (el, i) => {
          if (el.includes('Covered') || el.includes('Not covered')) {
            return <div className={classes.section_wrap} key={i}>{el}</div>
          } else {
            if (i % 2 === 0) {
              return <div className={classes.section_subtitle} key={i}>{el}</div>
            } else {
              return <div className={classes.section_cost} key={i}>{el}</div>
            }
          }
        })}
      </div>
    </div>
  )
};

export default doctors;
