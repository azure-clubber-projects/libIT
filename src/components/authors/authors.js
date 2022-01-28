import React from "react"
import Author from "../authorItem/authorItem";
import classes from './authors.module.css';
import AuthorService from '../../API/authorsService'


export default function Authors(){
    const [auth, setAuth] = new React.useState([]);
    const [isLoading,setIsLoading] = new React.useState(false);


    async function fetchAuthors() {
        let authors = await AuthorService.getAll();
        
        setIsLoading(true);
        setAuth(authors);
        setIsLoading(false);
    }

    React.useEffect(()=>{
        fetchAuthors();
    }, []);

    return(
        <div className={classes.listWrapper}>
            <h1 className={classes.listName}>Authors List</h1>
            <div className={classes.container} >
                {
                    isLoading ? <h1>Waiting...</h1> : (auth !== null ? auth.map(obj => <Author key={obj.id} {...obj}/>): <h1>No author yet.</h1>)
                }
            </div>
        </div>
        
    );
}