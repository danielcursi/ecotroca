import { FaSearch, FaRecycle, FaUsers, FaBoxOpen } from "react-icons/fa";
import Button from "../components/button/Button";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <>
      <section className="banner-home">
        <h1>Troque, Reutilize, Sustente</h1>
        <p>
          Uma plataforma para trocar itens de forma sustentável e consciente.
        </p>
        <p> Dê nova vida aos seus objetos e encontre o que precisa.</p>
        <div className="container-search">
          <div className="banner-input">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="O que está procurando?" />
          </div>
          <Button link={"http://localhost:5173/"} text={"Buscar"} />
        </div>
      </section>
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
      <section className="section-emphasis">
        <h1>Itens em Destaque</h1>
        <p>Descubra itens únicos disponíveis para troca em sua região</p>
        <section className="section-cards"></section>
      </section>
    </>
  );
}
