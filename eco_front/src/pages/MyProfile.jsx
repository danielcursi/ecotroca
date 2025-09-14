import { useState, useEffect } from "react";
import Card from "../components/card/Card";
import { buscarUsuarioPorId } from "../services/usuarioServico";

export default function MyProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      
      // Busca os dados completos do usuário via API
      const fetchProfile = async () => {
        try {
          const dadosCompletos = await buscarUsuarioPorId(usuario.id_usuario);
          setProfile(dadosCompletos);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      };

      fetchProfile();
    }
  }, []);

  if (!profile) return <p>Carregando perfil...</p>;

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
            <Card
              key={item.id}
              img={item.image}
              title={item.title}
              description={item.description}
              location={item.location}
              rota={`/item/${item.id}`}
            />
          ))}
        </section>
      )}
    </section>
  );
}
