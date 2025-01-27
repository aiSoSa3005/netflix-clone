import { useEffect, useState } from "react";
import "./GridContainer.css";
import { getFilms, imgURL } from "../../service/films";

interface Films {
  poster_path: string;
}

const GridContainer = () => {
  const [films, setFilms] = useState<Films[]>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const films = await getFilms();
        setFilms(films.slice(0, 20));
      } catch (error) {
        setError(error);
      }
    };
    fetchFilms();
  }, []);

  return (
    <div className="container">
      {films?.map((film) => (
        <div className="card">
          <img src={`${imgURL}${film.poster_path}`}></img>
        </div>
      ))}
      {error && <p>Errore</p>}
    </div>
  );
};

export default GridContainer;
