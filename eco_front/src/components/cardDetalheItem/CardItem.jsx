import { CiLocationOn } from "react-icons/ci";
import "./CardItem.css";

export default function CardItem({ item }) {
  return (
    <div className="cardItem">
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
      <p
        style={{
          fontWeight: "bold",
          marginLeft: "16px",
          marginTop: "10px",
          fontSize: "20px",
        }}
      >
        Descrição
      </p>
      <p className="description">{item.descricao}</p>
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
    </div>
  );
}
