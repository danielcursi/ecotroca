import { CiLocationOn } from "react-icons/ci";
import "./CardItem.css";

export default function CardItem({ item }) {
  return (
    <div className="cardItem">
      {item.foto_uris && (
        <img
          src={
            item.foto_uris.startsWith("data:")
              ? item.foto_uris
              : `data:image/jpeg;base64,${item.foto_uris}`
          }
          alt={item.titulo}
          className="img"
        />
      )}

      <h1 className="title">{item.titulo}</h1>

      <div className="box">
        <p className="category">{item.categoria?.nome_categoria || "Sem categoria"}</p>

        <div className="location">
          <CiLocationOn />
          <span>
            {item.usuario?.cidade
              ? `${item.usuario.cidade}`
              : "Localização não informada"}
          </span>
        </div>
      </div>

      <p className="description">{item.descricao}</p>
    </div>
  );
}
