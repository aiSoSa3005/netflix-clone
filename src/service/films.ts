import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
export const imgURL = ' https://image.tmdb.org/t/p/original'


export const getFilms = async () => {
    
    try {
        console.log("API Key:", apiKey);
        console.log("URL della richiesta:", BASE_URL);

        const res = await axios.get(BASE_URL);
        return res.data.results
        
    } catch (error) {
        throw error
    }
}