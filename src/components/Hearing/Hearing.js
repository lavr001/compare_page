import React from 'react';
import classes from './Hearing.module.scss';

const hearing = props => {
  return (
    <div className={classes.box} data-section-hearing>
      <div className={classes.section_header}>Hearing</div>
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
        <div className={classes.section_disclaimer}>* 1 per year. ** Depending on service provided.</div>
      </div>
    </div>
  )
};

export default hearing;
