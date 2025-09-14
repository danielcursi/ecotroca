import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import { buscarUsuarioPorId } from "../services/usuarioServico";
import itemService from "../services/itemServico";

export default function MyProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (!usuarioSalvo) return;

    const usuario = JSON.parse(usuarioSalvo);

    const fetchProfile = async () => {
      try {
        const dadosCompletos = await buscarUsuarioPorId(usuario.id_usuario);
        setProfile(dadosCompletos);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Carregando perfil...</p>;

  const deleteItem = async (id_item) => {
    if (!window.confirm("Deseja realmente excluir este item?")) return;

    try {
      await itemService.deletarItem(id_item);
      setProfile({
        ...profile,
        products: profile.products.filter((i) => i.id_item !== id_item),
      });
    } catch (error) {
      console.error("Erro ao excluir item:", error);
      alert("Erro ao excluir item");
    }
  };

  return (
    <section className="profile">
      <section className="card-perfil">
        <h2>{profile.nome}</h2>
        <p>{profile.email}</p>
        <p>{profile.telefone}</p>
        <p>{profile.cidade} - {profile.bairro}</p>
      </section>

      {profile.products && profile.products.length > 0 && (
        <section className="card-item">
          {profile.products.map((item) => (
            <div key={item.id_item} className="card-wrapper">
              <Card
                img={Array.isArray(item.foto_uris) ? item.foto_uris[0] : item.foto_uris}
                title={item.titulo}
                description={item.condicao}
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
                  onClick={() => deleteItem(item.id_item)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </section>
  );
}