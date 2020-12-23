import React from 'react';
import classes from './More.module.scss';

const more = props => {
  return (
    <div className={classes.box} data-section='more' data-sticky='false'>
      <div className={classes.section_header}>More</div>
      <div className={classes.section_content}>
        {props.content.map( (el, i) => {
          if (el.includes('border')) {
            return <div className={classes.section_subtitle_border} key={i}></div>
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

export default more;
