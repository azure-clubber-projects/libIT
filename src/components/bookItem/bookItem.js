import React from "react"
import DocsService from "../../API/docsService";
import UploadButton from "../UI/UploadButton/uploadButton";
import classes from './book.module.css';

export default function Book({id, title, price }) {

    const fileChangedHandler = (formFile) => {
        DocsService.uploadToServer(formFile);
    }

    return (
        <div className={classes.container}>
            <p>{title}</p>
            <p>{price.toFixed(2)} UAH</p>
            <UploadButton id={id} variant="contained" color="secondary" onFileChangedHandler={fileChangedHandler}>Upload Book</UploadButton>
        </div>
    );
}