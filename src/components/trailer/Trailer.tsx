import "./Trailer.css";
import { IoClose } from "react-icons/io5";

interface TrailerProps {
  link: string;
  onClose: () => void;
}

const Trailer = ({ link, onClose }: TrailerProps) => {
  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content">
        <span id="btn-trailer" onClick={onClose}><IoClose /></span>
        {link ? (
          <iframe
            width="560"
            height="315"
            src={link}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Trailer non disponibile</p>
        )}
      </div>
    </div>
  );
};

export default Trailer;
