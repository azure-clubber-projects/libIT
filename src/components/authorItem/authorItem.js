import React from "react"
import classes from './author.module.css';

export default function Author({ firstname, middlename, lastname }) {
    return (
        <div className={classes.container}>
            <p>{firstname}</p>
            <p>{middlename}</p>
            <p>{lastname}</p>
        </div>
    );
}