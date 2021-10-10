import React from 'react';

import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={props.label}>{props.label}</div>
        <button 
            className={props.Less}
            disabled={props.disabled}
            onClick={props.removed}>Less</button>
        <button 
            className={props.More}
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;