import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";
import { buscarUsuarioPorId } from "../services/usuarioServico";
import { buscarDadosItem } from "../services/itemServico";

export default function MyProfile() {
  const [profile, setProfile] = useState(null);
  const [meusItens, setMeusItens] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      setUsuarioLogado(true);

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
    } else {
      setUsuarioLogado(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUsuarioLogado(false);
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  if (!profile && usuarioLogado) return <p>Carregando perfil...</p>;

  return (
    <div className="profile-container">
      {/* Coluna esquerda */}
      <aside className="profile-sidebar">
        <div className="profile-card">
          {usuarioLogado ? (
            <>
        
              <h2>{profile?.nome}</h2>
              <span className="badge">Usuário Verificado</span>

              <button className="btn-edit">Editar Perfil</button>
              <button className="btn-logout-header" onClick={handleLogout}>
                Sair
              </button>

              <div className="profile-info">
                <p>📧 {profile?.email}</p>
                <p>📞 {profile?.telefone}</p>
                <p>
                  📍 {profile?.cidade} - {profile?.bairro}
                </p>
              </div>

              <div className="profile-stats">
                <h3>Estatísticas</h3>
                <ul>
                  <li>
                    <b>Itens Trocados:</b> {profile?.itensTrocados || 0}
                  </li>
                  <li>
                    <b>Avaliações:</b> {profile?.avaliacoes || 0} ⭐
                  </li>
                  <li>
                    <b>Favoritos:</b> {profile?.favoritos || 0}
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <button className="btn-login-header" onClick={handleLogin}>
              Fazer Login
            </button>
          )}
        </div>
      </aside>

      {/* Coluna direita */}
      {usuarioLogado && (
        <main className="profile-content">
          <div className="tabs">
            <button className="active">Meus Itens</button>
            <button>Favoritos</button>
            <button>Avaliações</button>
            <button onClick={() => navigate("/inbox")}>Inbox</button>
          </div>

          <div className="items-header">
            <h3>Meus Itens ({meusItens.length})</h3>
            <button
              className="btn-add"
              onClick={() => navigate("/item/register")}
            >
              + Adicionar Item
            </button>
          </div>

          <div className="items-grid">
            {meusItens.length > 0 ? (
              meusItens.map((item) => (
                <Card
                  key={item.id_item}
                  img={item.foto_uris || ""}
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
      )}
    </div>
  );
}
