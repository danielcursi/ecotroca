import { CiLocationOn } from "react-icons/ci";
import "./CardItem.css";

export default function CardItem({
  img,
  title,
  description,
  location,
  category,
}) {
  return (
    <div className="cardItem">
      <h1 className="title">{title}</h1>
      <div className="box">
        <p className="category">{category}</p>
        <div className="location">
          <CiLocationOn />
          <span>{location}</span>
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
      <p className="description">{description}</p>
      <img src={img} alt={title} className="img" />
    </div>
  );
}
