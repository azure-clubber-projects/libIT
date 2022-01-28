import axios from "axios";

export default class AuthorsService{
    static async getAll(){
        const response = await axios.get('https://thingproxy.freeboard.io/fetch/https://mylibraryapi.azurewebsites.net/Authors');
        return response.data;
    }
}