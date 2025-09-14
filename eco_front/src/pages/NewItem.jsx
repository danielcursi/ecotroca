import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

import { buscarDadosItemId } from "../services/itemServico";
import CardItem from "../components/cardDetalheItem/CardItem";
import CardDono from "../components/cardDetalheItem/CardDono";

export default function NewItem() {
  const navigate = useNavigate();
  const { id } = useParams(); // pega o id da rota

  const [item, setItem] = useState(null);
  const [user, setUser] = useState(null); // dono do item

  function voltarPagina() {
    navigate(-1);
  }

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const dados = await buscarDadosItemId(id);
        setItem(dados);

          //NAO ESTA FAZENDO A CHAMADA DO DONO
          
      } catch (error) {
        console.error("Erro ao buscar item:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <p>Carregando item...</p>;
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
          img={item.foto_uris}
          title={item.titulo}
          description={item.descricao}
          category={item.condicao}
        />

        <CardDono user={user.username} rota="/profile" />
      </div>
    </>
  );
}
