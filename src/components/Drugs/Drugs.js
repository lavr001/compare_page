import React from 'react';
import classes from './Drugs.module.scss';

const drugs = props => {
  return (
    <div className={classes.box} data-section='drugs' data-sticky='false'>
      <div className={classes.section_header}>Drugs</div>
      <div className={classes.section_content}>
        {props.content.map( (el, i) => {
          if (el.includes('Coverage')) {
            return <div className={classes.section_title} key={i}>{el}</div>
          } else if (el.includes('border')) {
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
        <div className={classes.section_disclaimer}>* Whichever is more.</div>
      </div>
    </div>
  )
};

export default drugs;
