import axios from "axios";

export default class AuthorsService{
    static async getAll(){
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://mylibraryapi.azurewebsites.net/Authors');
        return response.data;
    }
}