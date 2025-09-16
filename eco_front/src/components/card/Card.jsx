import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import style from "./style.module.css";

export default function Card({ img, title, description, location, rota }) {
  const navigate = useNavigate();

  // Função para gerar a URL correta da imagem
  const getImageSrc = () => {
    if (!img) return "/img/fallback.jpg"; // fallback
    return img.startsWith("data:") ? img : `data:image/jpeg;base64,${img}`;
  };

  return (
    <div className={style.card}>
      <img src={getImageSrc()} alt={title} className={style.img} />

      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>

      <div className={style.location}>
        <CiLocationOn />
        {location || "Localização não informada"}
      </div>

      <button onClick={() => navigate(rota)} className={style.button}>
        Ver Detalhes
      </button>
    </div>
  );
}
