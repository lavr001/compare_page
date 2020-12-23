import React from 'react';
import classes from './Hospital.module.scss';

const hospital = props => {
  return (
    <div className={classes.box} data-section='hospital' data-sticky='false'>
      <div className={classes.section_header}>Hospital</div>
      <div className={classes.section_content}>
        {props.content.map( (el, i) => {
          if (el.includes('Copays')) {
            return <div className={classes.section_title} key={i}>{el}</div>
          } else if (el.includes('days') || el.includes('day')) {
            return <div className={classes.section_wrap} key={i}>&#8226; {el}</div>
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
        <div className={classes.section_disclaimer}>* Depending on service provided.</div>
      </div>
    </div>
  )
};

export default hospital;
