import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import { buscarUsuarioPorId } from "../services/usuarioServico";
import { buscarItemId,atualizarItem,deletarItem } from "../services/itemServico";

export default function MyProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // buscar perfil do usuário e itens
  useEffect(() => {
  const usuarioSalvo = localStorage.getItem("usuario");
  if (!usuarioSalvo) {
    setLoading(false);
    return;
  }

  const usuario = JSON.parse(usuarioSalvo);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      // busca usuário
      const dadosUsuario = await buscarUsuarioPorId(usuario.id_usuario);

      // busca itens do usuário
      const itens = await buscarItemId(usuario.id_usuario);

      // junta os dois
      setProfile({
        ...dadosUsuario,
        items: itens || []
      });

    } catch (err) {
      console.error("Erro ao buscar dados:", err);
      setError("Erro ao carregar perfil");
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, []);

  // função para deletar item
  const handleDelete = async (id_item) => {
    if (!window.confirm("Confirma a exclusão do item?")) return;

    try {
      await deletarItem(id_item);

      // Atualizar a lista de itens no estado do profile
      setProfile({
        ...profile,
        items: profile.items.filter((a) => a.id_item !== id_item),
      });
    } catch (err) {
      console.error("Erro ao excluir item:", err);
    }
  };

  const renderImg = (item) => {
    let fotos = item.foto_uris;
    if (!fotos) return "/placeholder.png";

    if (typeof fotos === "string") {
      try {
        fotos = JSON.parse(fotos);
      } catch {
        fotos = [fotos];
      }
    }

    if (Array.isArray(fotos) && fotos.length > 0) {
      const first = fotos[0];
      return first.startsWith("data:") ? first : `data:image/jpeg;base64,${first}`;
    }

    return "/placeholder.png";
  };

  if (loading) return <p>Carregando perfil...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <p>Perfil não encontrado.</p>;

  return (
    <section className="profile">
      <section className="card-perfil">
        <h2>{profile.nome}</h2>
        <p>{profile.email}</p>
        <p>{profile.telefone}</p>
        <p>
          {profile.cidade} - {profile.bairro}
        </p>
      </section>

      {profile.items && profile.items.length > 0 ? (
        <section className="card-item">
          {profile.items.map((item) => (
            <div key={item.id_item} className="card-wrapper">
              <Card
                img={renderImg(item)}
                title={item.titulo}
                description={item.descricao}
                rota={`/item/${item.id_item}`}
              />

              <div className="card-actions">
                <Link
                  to={`/edit-item/${item.id_item}`}
                  className="btn btn-sm btn-outline-primary"
                >
                  Editar
                </Link>

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(item.id_item)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <p>Você ainda não tem itens cadastrados.</p>
      )}
    </section>
  );
}