import { useState } from "react";
import "./MovieCard.css";
import Trailer from "../trailer";

interface Props {
  poster_path: string;
  link: string;
}

const MovieCard = ({ poster_path, link }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="card" onClick={() => setIsModalOpen(true)}>
        <img src={`${poster_path}`} alt="img serie-tv"></img>
      </div>

      {isModalOpen && (
        <Trailer link={link} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default MovieCard;    