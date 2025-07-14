import { CiLocationOn } from "react-icons/ci";
import "./CardItem.css";


export default function CardItem({ img, title, description, location, category }) {
  return (
    <div className="cardItem">
      <img src={img} alt={title} className="img" />

      <h3 className="title">{title}</h3>
      <p className="category">{category}</p>
      <div className="location">
        <CiLocationOn />
        <span>{location}</span>
      </div>
      <p style={{ fontWeight: "bold" }}>Descrição</p>
      <p className="description">{description}</p>
    </div>
  );
}

