import { useNavigate } from "react-router-dom";
import "./CardDono.css";

export default function CardDono({user, rota }) {
     const navigate = useNavigate();
  return (
    <div className="cardDono">
      <p style={{ fontWeight: "bold" }}>Informacões do Dono</p>
      <h3 className="user">{user}</h3>
      <button onClick={() => navigate(rota)} className="button">
              Ver Perfil Completo
       </button> 
    </div>
  );
}

