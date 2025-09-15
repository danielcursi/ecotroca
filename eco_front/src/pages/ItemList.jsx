import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Card from "../components/card/Card";
import Button from "../components/button/Button";
import { buscarDadosItem } from "../services/itemServico";

export default function ItemList() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Voltar para página anterior
  const voltarPagina = () => navigate(-1);

  // Buscar itens do backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await buscarDadosItem();
        setItems(response.data || response); 
      } catch (err) {
        console.error("Erro ao buscar itens:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // Função para tratar a imagem (URL ou base64)
  const getImage = (foto_uris) => {
    if (!foto_uris) return "https://via.placeholder.com/150"; // placeholder

    try {
      const fotosArray = JSON.parse(foto_uris); // converte string JSON em array
      if (!fotosArray || fotosArray.length === 0) return "https://via.placeholder.com/150";

      const primeiraFoto = fotosArray[0];
      if (primeiraFoto.startsWith("http")) return primeiraFoto; // URL direta
      return `data:image/jpeg;base64,${primeiraFoto}`; // base64
    } catch (err) {
      console.warn("Erro ao parsear foto_uris:", err);
      return "https://via.placeholder.com/150";
    }
  };

  return (
    <section style={{ width: "80%", margin: "0 auto" }}>
      <div className="buttonProduct">
        <button onClick={voltarPagina} className="button-arrow">
          <FaArrowLeft />
          Voltar
        </button>
        <Button to={"/item/register"} text={"Novo item"} />
      </div>

      {loading ? (
        <p>Carregando itens...</p>
      ) : items.length === 0 ? (
        <p>Nenhum item disponível.</p>
      ) : (
        <section className="allCards">
          {items.map((item) => (
            <Card
              key={item.id_item}
              img={getImage(item.foto_uris)}
              title={item.titulo}
              description={item.descricao}
              rota={`/item/${item.id_item}`}
            />
          ))}
        </section>
      )}
    </section>
  );
}
