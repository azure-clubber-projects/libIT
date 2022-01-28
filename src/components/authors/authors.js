import React from "react"
import Author from "../authorItem/authorItem";
import classes from './authors.module.css';


export default function Authors({ authors }){
    authors = [
        {
            id: 1,
            firstname: 'authF11',
            middlename: 'authF12',
            lastname: 'authF13'
        },
        {
            id: 2,
            firstname: 'authF21',
            middlename: 'authF22',
            lastname: 'authF23'
        },
        {
            id: 3,
            firstname: 'authF31',
            middlename: 'authF32',
            lastname: 'authF33'
        },
    ]
    return(
        <div className={classes.listWrapper}>
            <h1 className={classes.listName}>Authors List</h1>
            <div className={classes.container} >
                {
                    authors.map(obj => <Author key={obj.id} {...obj}/>)
                }
            </div>
        </div>
        
    );
}