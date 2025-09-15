import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";
import { buscarUsuarioPorId } from "../services/usuarioServico";
import { buscarDadosItem } from "../services/itemServico";

export default function MyProfile() {
  const [profile, setProfile] = useState(null);
  const [meusItens, setMeusItens] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);

      const fetchData = async () => {
        try {
          // Buscar dados completos do usuário
          const dadosCompletos = await buscarUsuarioPorId(usuario.id_usuario);
          setProfile(dadosCompletos);

          // Buscar todos os itens e filtrar apenas os do usuário logado
          const itens = await buscarDadosItem();
          const itensDoUsuario = itens.filter(
            (item) => item.id_usuario_proprietario === usuario.id_usuario
          );

          setMeusItens(itensDoUsuario);
        } catch (error) {
          console.error("Erro ao buscar dados do perfil:", error);
        }
      };

      fetchData();
    }
  }, []);

  if (!profile) return <p>Carregando perfil...</p>;

  return (
    <div className="profile-container">
      {/* Coluna esquerda */}
      <aside className="profile-sidebar">
        <div className="profile-card">
          <img
            src={profile.foto || "https://via.placeholder.com/150"}
            alt="Foto de perfil"
            className="profile-avatar"
          />
          <h2>{profile.nome}</h2>
          <span className="badge">Usuário Verificado</span>

          <button className="btn-edit">Editar Perfil</button>

          <div className="profile-info">
            <p>📧 {profile.email}</p>
            <p>📞 {profile.telefone}</p>
            <p>
              📍 {profile.cidade} - {profile.bairro}
            </p>
          </div>
        </div>

        <div className="profile-stats">
          <h3>Estatísticas</h3>
          <ul>
            <li>
              <b>Itens Trocados:</b> {profile.itensTrocados || 0}
            </li>
            <li>
              <b>Avaliações:</b> {profile.avaliacoes || 0} ⭐
            </li>
            <li>
              <b>Favoritos:</b> {profile.favoritos || 0}
            </li>
          </ul>
        </div>
      </aside>

      {/* Coluna direita */}
      <main className="profile-content">
        <div className="tabs">
          <button className="active">Meus Itens</button>
          <button>Favoritos</button>
          <button>Avaliações</button>
        </div>

        <div className="items-header">
          <h3>Meus Itens ({meusItens.length})</h3>
          <button
            className="btn-add"
            onClick={() => navigate("/register-item")}
          >
            + Adicionar Item
          </button>
        </div>

        <div className="items-grid">
          {meusItens.length > 0 ? (
            meusItens.map((item) => (
              <Card
                key={item.id_item}
                img={item.foto_uris || ""} // pega direto a URL da imagem
                title={item.titulo}
                description={item.descricao}
                location={item.localizacao || ""}
                rota={`/item/${item.id_item}`}
              />
            ))
          ) : (
            <p>Você ainda não adicionou nenhum item.</p>
          )}
        </div>
      </main>
    </div>
  );
}
