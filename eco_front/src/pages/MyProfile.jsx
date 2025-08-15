import Card from "../components/card/Card";
import data from "../components/database.json";

export default function MyProfiler() {
  const token = localStorage.getItem("tokenUser");

  const userProfile = data.users;
  const profile = userProfile.find((user) => user.id == token);
  return (
    <section className="profile">
      {profile ? (
        <>
          <section className="card-perfil">
            <h2>{profile.username}</h2>
            <p>{profile.email}</p>
            <p>{profile.number}</p>
            <p>{profile.local}</p>
          </section>
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
        </>
      ) : (
        <p>Usuário não logado!</p>
      )}
    </section>
  );
}
