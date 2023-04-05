import React from 'react';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import classes from './CssForCards.module.css';

function CardToGrowText(props: any) {
  return (
    <div className={classes.helpToGrow__main_div}>
      <div>
        {' '}
        <h1>{props.title}</h1>
      </div>
      <div className={classes.helpToGrow__body}>
        <p>{props.body}</p>
      </div>
      <div>
        <span style={{ color: 'white' }}>Get Started</span>
        <span style={{ padding: '20px' }}>
          {' '}
          <ArrowRightIcon />
        </span>
      </div>
    </div>
  );
}

export default CardToGrowText;
