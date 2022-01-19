import React, { useState } from "react";
import classes from './Card.module.css';

function Card(props) {
    return (<div className={classes.card}>{props.children}</div>);

}

export default Card;

// return (<div className={classes.card}>{props.children}</div>);