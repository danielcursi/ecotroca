import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import data from "../components/database.json";

export default function RegisterItem() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tipe, setTipe] = useState("");
  const [estado, setEstado] = useState("");
  const [local, setLocal] = useState("");
  const [items, setItems] = useState(data);

  function voltarPagina() {
    navigate(-1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = data.map((item) => parseInt(item.id));
    const maiorId = Math.max(...ids);
    const novoId = maiorId + 1;

    const newItem = {
      id: novoId,
      title,
      description,
      category: tipe,
      location: local,
    };

    setItems([...items, newItem]);

    console.log("Novo item adicionado:", newItem);
  };

  const categories = [
    "Eletrônicos",
    "Roupas & Acessórios",
    "Casa & Jardim",
    "Livros & Educação",
    "Esporte & Lazer",
    "Transporte",
    "Ferramentas",
    "Brinquedos",
    "Outros",
  ];

  const conditions = [
    "Novo",
    "Como novo",
    "Bom estado",
    "Estado regular",
    "Para reparo",
  ];

  return (
    <>
      <section className="register">
        <section>
          <button
            onClick={voltarPagina}
            className="button-arrow"
            style={{ marginBottom: "1rem" }}
          >
            <FaArrowLeft />
            Voltar
          </button>
          <h1>Adicionar Novo Item</h1>
          <p>
            Compartilhe um item que você não usa mais e encontre algo que
            precisa
          </p>
          <section className="section-register">
            <form onSubmit={handleSubmit} className="form">
              <h3>Informações Básicas</h3>
              <label>Titulo do item *</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Bicicleta urbana em ótimo estado"
                required
              />
              <label>Descrição *</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="6"
                cols="50"
                placeholder="Descreva seu item em detalhes, incluindo tamanho, marca, etc."
                required
                className="description"
              ></textarea>
              <div className="section-select">
                <div>
                  <label>Escolha uma opção *</label>
                  <select
                    id="categories"
                    value={tipe}
                    onChange={(e) => setTipe(e.target.value)}
                    required
                  >
                    {categories.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Estado de conservação *</label>
                  <select
                    id="conditions"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                  >
                    {conditions.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <label>Localização *</label>
              <input
                type="text"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
                placeholder="Iguatu, CE"
                required
              />
              <button type="submit" className="button-form">
                Publicar Item
              </button>
            </form>
            <section className="photo">
              <div>
                <h2>Fotos do Item</h2>
                <p>Adicione até 5 fotos do seu item</p>
              </div>
              <input type="file" />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
