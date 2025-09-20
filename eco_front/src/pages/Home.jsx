import { FaSearch, FaRecycle, FaUsers, FaBoxOpen } from "react-icons/fa";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import { buscarDadosItem } from "../services/itemServico";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await buscarDadosItem();
        const dados = response?.data ?? response;

        if (Array.isArray(dados)) {
          setItems(dados);
        } else {
          console.warn("Formato inesperado de dados:", dados);
          setItems([]);
        }
      } catch (err) {
        console.error("Erro ao buscar itens:", err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      {/* === Banner === */}
      <section className="banner-home">
        <h1>Troque, Reutilize, Sustente</h1>
        <p>Uma plataforma para trocar itens de forma sustentável e consciente.</p>
        <p>Dê nova vida aos seus objetos e encontre o que precisa.</p>

        <div className="container-search">
          <div className="banner-input">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="O que está procurando?" />
          </div>
          <Button link={"/item"} text={"Buscar"} />
        </div>
      </section>

      {/* === Infos === */}
      <section className="section-infos">
        <article>
          <FaRecycle className="i" />
          <p>Troca de Itens</p>
        </article>
        <article>
          <FaUsers className="i" />
          <p>Usuários Ativos</p>
        </article>
        <article>
          <FaBoxOpen className="i" />
          <p>Diversos Produtos</p>
        </article>
      </section>

      {/* === Itens em Destaque === */}
      <section className="section-emphasis">
        <h1>Itens em Destaque</h1>
        <p>Descubra itens únicos disponíveis para troca em sua região</p>

        {loading ? (
          <p>Carregando itens...</p>
        ) : Array.isArray(items) && items.length > 0 ? (
          <section className="section-cards">
            {items.slice(0, 4).map((item) => (
              <Card
                key={item.id_item}
                img={item.foto_uris}
                title={item.titulo}
                description={item.descricao}
                rota={`/item/${item.id_item}`}
              />
            ))}
          </section>
        ) : (
          <p>Nenhum item disponível no momento.</p>
        )}
      </section>

      {/* === Footer === */}
      <footer className="footer">
        <h2>Pronto para fazer parte da mudança?</h2>
        <p>Junte-se à nossa comunidade e contribua para um mundo mais sustentável</p>
        <Button
          to={"/item"}
          text={"Explorar itens"}
          icon={faArrowRightToBracket}
        />
      </footer>
    </>
  );
}
