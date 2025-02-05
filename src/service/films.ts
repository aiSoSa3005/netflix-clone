import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;
const poplular_URL = `/movie/popular?api_key=${apiKey}&language=en-US&page=1`
export const imgURL = ' https://image.tmdb.org/t/p/original'


export const getFilms = async () => {

    try {
      console.log("API Key:", apiKey);
      console.log("URL della richiesta:", BASE_URL + poplular_URL);
  
      const res = await axios.get(BASE_URL + poplular_URL);
      return res.data.results;
    } catch (error) {
      throw error;
    }
  };
  export const fetchMovieTrailer = async (movieId: number): Promise<string | null> => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
        params: {
          api_key: apiKey,
          language: 'it-IT',
        },
      });
      const videos = response.data.results;
  
      const trailer = videos.find(
        (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
      );
  
      if (trailer && trailer.key) {
        return `https://www.youtube.com/embed/${trailer.key}?autoplay=1`; // Usa l'URL di incorporamento
      }
  
      return null;
    } catch (error) {
      console.error('Errore nel fetch dei trailer:', error);
      return null;
    }
  };