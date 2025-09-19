import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { cadastrarItem } from "../services/itemServico";
import { useAuth } from "../contexts/AuthContext";

export default function NewItem() {
  const { user } = useAuth(); // pega usuário logado e token
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tipe, setTipe] = useState("");
  const [estado, setEstado] = useState("");
  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState(null);

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

  const conditions = ["Novo", "Como novo", "Bom estado", "Estado regular", "Para reparo"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Usuário não identificado. Faça login novamente.");
      return;
    }

    const newItem = {
      id_categoria: parseInt(tipe),
      titulo: title,
      descricao: description,
      condicao: estado,
      foto_uris: foto,
      id_usuario_proprietario: user.id_usuario,
      status_item: "DISPONIVEL",
    };

    try {
      // Envia item junto com token para autenticação
      await cadastrarItem(newItem, user.token);
      alert("Item cadastrado com sucesso!");
      setTitle("");
      setDescription("");
      setTipe("");
      setEstado("");
      setFoto(null);
      setPreview(null);
      navigate("/profile");
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert(error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFoto(reader.result); // base64
      setPreview(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="register">
      <h1>Adicionar Novo Item</h1>
      <p>Compartilhe um item que você não usa mais e encontre algo que precisa</p>

      <section className="section-register">
        <form onSubmit={handleSubmit} className="form">
          <h3>Informações Básicas</h3>

          {!user && <p style={{ color: "red" }}>Não foi possível identificar o usuário. Faça login novamente.</p>}

          <label>Título do item *</label>
          <input
            type="text"
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
            placeholder="Descreva seu item em detalhes, incluindo tamanho, marca, etc."
            required
          />

          <div className="section-select">
            <div>
              <label>Escolha uma opção *</label>
              <select value={tipe} onChange={(e) => setTipe(e.target.value)} required>
                <option value="">Selecione</option>
                {categories.map((item, index) => (
                  <option key={index} value={index + 1}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Estado de conservação *</label>
              <select value={estado} onChange={(e) => setEstado(e.target.value)} required>
                <option value="">Selecione</option>
                {conditions.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="button-form">
            Publicar Item
          </button>

          <button onClick={() => navigate(-1)} type="button" className="button-form" style={{ marginBottom: "1rem" }}>
            <FaArrowLeft /> Voltar
          </button>
        </form>

        <section className="photo">
          <div>
            <h2>Foto do Item</h2>
            <p>Adicione apenas uma foto do seu item</p>
          </div>

          <input type="file" accept="image/*" onChange={handleImageChange} />

          <div className="photo-preview">
            {preview && (
              <img
                src={preview}
                alt="Foto do item"
                width="150"
                height="200"
                style={{ borderRadius: "8px", objectFit: "cover", marginRight: "8px" }}
              />
            )}
          </div>
        </section>
      </section>
    </section>
  );
}
