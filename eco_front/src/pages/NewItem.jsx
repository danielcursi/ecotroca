import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

import { buscarDadosItemId } from "../services/itemServico";
import { buscarUsuarioPorId } from "../services/usuarioServico";
import CardItem from "../components/cardDetalheItem/CardItem";
import CardDono from "../components/cardDetalheItem/CardDono";

export default function NewItem() {
  const navigate = useNavigate();
  const { id } = useParams(); // pega o id da rota

  const [item, setItem] = useState(null);
  const [user, setUser] = useState(null); // dono do item
  const [loading, setLoading] = useState(true);

  function voltarPagina() {
    navigate(-1);
  }

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const dados = await buscarDadosItemId(id);
        setItem(dados);

        // Buscar dono do item
        if (dados?.id_usuario_proprietario) {
          const dono = await buscarUsuarioPorId(dados.id_usuario_proprietario);
          setUser(dono);
        }

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar item ou dono:", error);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Carregando item...</p>;

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
          item={item} // Agora passamos o objeto inteiro
        />

        {user ? (
          <CardDono user={user.username || user.nome} rota="/profile" />
        ) : (
          <p>Carregando informações do dono...</p>
        )}
      </div>
    </>
  );
}
