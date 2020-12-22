import React from 'react';
import classes from './Highlights.module.scss';

const highlights = props => {
  return (
    <div className={classes.box} data-section-highlights>
      <div className={classes.section_header} data-section-header-highlights>Highlights</div>
      <div className={classes.section_content}>
        {props.content.map( (el, i) => {
          if (i % 2 === 0) {
            return <div className={classes.section_subtitle} key={i}>{el}</div>
          } else {
            return <div className={classes.section_cost} key={i}>{el}</div>
          }
        })}
        <div className={classes.section_disclaimer}>* Depending on service provided.</div>
      </div>
    </div>
  )
};

export default highlights;
