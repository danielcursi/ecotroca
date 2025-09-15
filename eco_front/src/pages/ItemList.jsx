import Card from "../components/card/Card";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

import {buscarDadosItem} from "../services/itemServico";
import {useEffect, useState} from "react";

export default function ItemList() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  function voltarPagina() {
    navigate(-1);
  }
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await buscarDadosItem();
        // Ajuste dependendo do que sua API retorna
        setItems(response.data || response); 
      } catch (err) {
        console.error("Erro ao buscar itens:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);
  
  
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
              key={item.id_item}
              img={item.foto_uris}
              title={item.titulo}
              description={item.descricao}
              rota={`${item.id}`}
            />
          ))}
        </section>
      </section>
    </>
  );
}
