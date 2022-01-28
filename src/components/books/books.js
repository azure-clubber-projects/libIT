import React from "react"
import Book from "../bookItem/bookItem";
import classes from './books.module.css';


export default function Books({ books }){
    books = [
        {
            id: 1,
            title: 'title1',
            price: 100,
        },
        {
            id: 2,
            title: 'title2',
            price: 200,
        },
        {
            id: 3,
            title: 'title3',
            price: 300,
        },
    ]
    return(
        <>
            <h1 className={classes.listName}>Books List</h1>
            <div className={classes.container}>
                {
                    books.map(obj => <Book key={obj.id} {...obj} />)
                }
            </div>
        </>
    );
}