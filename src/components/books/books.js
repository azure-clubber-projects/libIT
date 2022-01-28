import React from "react"
import BooksService from "../../API/booksService";
import Book from "../bookItem/bookItem";
import classes from './books.module.css';


export default function Books(){

    const [books, setBooks] = new React.useState([]);
    const [isLoading,setIsLoading] = new React.useState(false);

    async function fetchBooks() {
        let books = await BooksService.getAll();

        setIsLoading(true);
        setBooks(books);
        setIsLoading(false);
        
    }

    React.useEffect(()=>{
        fetchBooks();
        console.log(books);
    }, []);


    return(
        <>
            <h1 className={classes.listName}>Books List</h1>
            <div className={classes.container}>
                {
                    isLoading ? <h1>Waiting...</h1> : (books !== null ? books.map(obj => <Book key={obj.id} {...obj}/>): <h1>No book yet.</h1>)
                }
                
            </div>
        </>
    );
}

{/* books.map(obj => <Book key={obj.id} {...obj} />) */}