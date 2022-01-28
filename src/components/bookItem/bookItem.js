import React from "react"
import classes from './book.module.css';

export default function Book({ title, price}) {
    return (
        <div className={classes.container}>
            <p>{title}</p>
            <p>{price.toFixed(2)} UAH</p>
        </div>
    );
}