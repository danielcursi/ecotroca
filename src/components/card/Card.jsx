import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

export default function Card({ img, title, description, location, id }) {
  const navigate = useNavigate();
  return (
    <div className={style.card}>
      <img src={img} alt={title} className={style.img} />
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <div className={style.location}>
        <CiLocationOn />
        {location}
      </div>
      <button onClick={() => navigate(`item/${id}`)} className={style.button}>
        Ver Detalhes
      </button>
    </div>
  );
}
