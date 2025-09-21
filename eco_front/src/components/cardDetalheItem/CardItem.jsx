import { CiLocationOn } from "react-icons/ci";
import "./CardItem.css";

export default function CardItem({ item }) {
  if (!item) {
    return <div className="cardItem">Item não disponível.</div>;
  }

  const {
    foto_uris,
    titulo = "Sem título",
    categoria,
    usuario,
    descricao = "Sem descrição",
    status_item,
  } = item;

  const imagemSrc = foto_uris
    ? foto_uris.startsWith("data:")
      ? foto_uris
      : `data:image/jpeg;base64,${foto_uris}`
    : null;

  const traduzirStatus = (status) => {
    switch (status) {
      case "DISPONIVEL":
        return "Disponível";
      case "RESERVADO":
        return "Reservado";
      case "INDISPONIVEL":
        return "Indisponível";
      default:
        return "Status não informado";
    }
  };

  return (
    <div className="cardItem">
      {imagemSrc && (
        <img src={imagemSrc} alt={titulo} className="img" />
      )}

      <h1 className="title">{titulo}</h1>

      <div className="box">
        <p className="category">
          {categoria?.nome_categoria || "Sem categoria"}
        </p>

        <div className="location">
          <CiLocationOn />
          <span>{usuario?.cidade || "Localização não informada"}</span>
        </div>

        <p className="status">
          <strong>Status:</strong> {traduzirStatus(status_item)}
        </p>
      </div>

      <p className="description">{descricao}</p>
    </div>
  );
}
