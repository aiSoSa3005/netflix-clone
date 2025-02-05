import { useEffect, useState } from "react";
import "./GridContainer.css";
import { getFilms, imgURL, fetchMovieTrailer } from "../../service/films";
import MovieCard from "../movie-card";

interface Films {
  poster_path: string;
  id: number;
  trailer?: string; // Aggiungi il campo opzionale per il trailer
}

const GridContainer = () => {
  const [films, setFilms] = useState<Films[]>([]); 
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true)
      try {
        const films = await getFilms();
        const moviesWithTrailers = await Promise.all(
          films.map(async (movie: Films) => {
            const trailer = await fetchMovieTrailer(movie.id);
            return { ...movie, trailer };
          })
        );
        setFilms(moviesWithTrailers);
      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false)
      }
    };
    fetchFilms();
  }, []);

  if (loading) return <div>loading...</div>

  return (
    <div className="container">
      {films.map((film) => (
        <MovieCard
          key={film.id} 
          poster_path={imgURL + film.poster_path}
          link={film.trailer || ""} 
        />
      ))}
      {error && <p>Errore</p>}
    </div>
  );
};

export default GridContainer;
