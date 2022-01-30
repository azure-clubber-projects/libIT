import axios from "axios";

export default class BooksService{
    static async getAll(){
        const response = await axios.get(`https://mylibraryapi.azurewebsites.net/Books`);
        return response.data;
    }
}