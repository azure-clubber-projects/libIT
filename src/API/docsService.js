import axios from "axios";

export default class DocsService{
    static async uploadToServer(file){
        const formData = new FormData();
        
        formData.append("fileToLoad", file);
        
        axios({
            method: "post",
            url: "https://mylibraryapi.azurewebsites.net/Docs",
            data: formData
        })
        .then(response=>{
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}