import React from 'react';
import classes from './subject.module.css';

export default function subject({ title }) {
    return <h1 className={classes.subject}>{title}</h1>;
}
