import Card from "../components/card/Card";
import data from "../components/database.json";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

export default function ItemList() {
  const navigate = useNavigate();
  function voltarPagina() {
    navigate(-1);
  }
  const allProducts = data.users.flatMap((user) => user.products);
  return (
    <>
      <section style={{ width: "80%", margin: "0 auto" }}>
        <div className="buttonProduct">
          <button onClick={voltarPagina} className="button-arrow">
            <FaArrowLeft />
            Voltar
          </button>
          <Button to={"/item/register"} text={"Novo item"} />
        </div>
        <section className="allCards">
          {allProducts.map((item) => (
            <Card
              key={item.id}
              img={item.image}
              title={item.title}
              description={item.description}
              location={item.location}
              rota={`${item.id}`}
            />
          ))}
        </section>
      </section>
    </>
  );
}
