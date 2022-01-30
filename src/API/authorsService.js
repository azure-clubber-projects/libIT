import axios from "axios";

export default class AuthorsService{
    static async getAll(){
        console.log(process.env.REACT_APP_API_ADDRESS);
        const response = await axios.get(`https://mylibraryapi.azurewebsites.net/Authors`);
        return response.data;
    }
}