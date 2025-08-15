import { useParams } from "react-router-dom";
import { users } from "../components/database.json";
import CardItem from "../components/cardDetalheItem/CardItem";
import CardDono from "../components/cardDetalheItem/CardDono";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NewItem() {
  const navigate = useNavigate();

  function voltarPagina() {
    navigate(-1);
  }

  const { id } = useParams();

  const result = userDono(id);

  if (!result) {
    return <p>Produto não encontrado</p>;
  }

  const { item, user } = result;

  function userDono(itemId) {
    for (const user of users) {
      const item = user.products.find((p) => p.id === itemId);
      if (item) {
        return { item, user };
      }
    }
    return null;
  }

  return (
    <>
      <div>
        <button
          onClick={voltarPagina}
          className="button-arrow-item"
          style={{ margin: "1.5rem auto" }}
        >
          <FaArrowLeft />
          Voltar
        </button>
      </div>
      <div className="detail-item">
        <CardItem
          img={item.image}
          title={item.title}
          location={item.location}
          description={item.description}
          category={item.category}
        />

        <CardDono user={user.username} rota="/profile" />
      </div>
    </>
  );
}
