import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

import { buscarDadosItemId } from "../services/itemServico";
import { buscarUsuarioPorId } from "../services/usuarioServico";
import CardItem from "../components/cardDetalheItem/CardItem";
import CardDono from "../components/cardDetalheItem/CardDono";

export default function NewItem() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [user, setUser] = useState(null);

  const voltarPagina = () => navigate(-1);

  // Função para tratar imagem (URL ou base64)
  const getImage = (foto_uris) => {
    if (!foto_uris) return "https://via.placeholder.com/150";

    try {
      const fotosArray = JSON.parse(foto_uris); // transforma string JSON em array
      if (!fotosArray || fotosArray.length === 0) return "https://via.placeholder.com/150";

      const primeiraFoto = fotosArray[0];
      if (primeiraFoto.startsWith("http")) return primeiraFoto; // URL direta
      return `data:image/jpeg;base64,${primeiraFoto}`; // base64
    } catch (err) {
      console.warn("Erro ao parsear foto_uris:", err);
      return "https://via.placeholder.com/150";
    }
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const dadosItem = await buscarDadosItemId(id);
        setItem(dadosItem);

        const dadosUsuario = await buscarUsuarioPorId(dadosItem.id_usuario_proprietario);
        setUser(dadosUsuario);
      } catch (error) {
        console.error("Erro ao buscar item ou dono:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item || !user) return <p>Carregando item...</p>;

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
          img={getImage(item.foto_uris)}
          title={item.titulo}
          description={item.descricao}
          category={item.condicao}
        />

        <CardDono user={user.username} rota="/profile" />
      </div>
    </>
  );
}
