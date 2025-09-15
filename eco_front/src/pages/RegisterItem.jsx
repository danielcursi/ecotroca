import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { cadastrarItem } from "../services/itemServico";

export default function NewItem() {
  const [idUsuario, setIdUsuario] = useState(null);
  const [loadingUsuario, setLoadingUsuario] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tipe, setTipe] = useState("");
  const [estado, setEstado] = useState("");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  // Buscar usuário logado
  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      try {
        const usuario = JSON.parse(usuarioSalvo);
        setIdUsuario(usuario.id_usuario);
      } catch (err) {
        console.error("Erro ao parsear usuário:", err);
      }
    }
    setLoadingUsuario(false);
  }, []);

  // Envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idUsuario) {
      alert("Usuário não identificado. Faça login novamente.");
      return;
    }

    // Transformar imagens em base64
    const foto_uris = images.length > 0
      ? images.map((img) => img.base64.split(",")[1])
      : [];

    const newItem = {
      id_categoria: parseInt(tipe),
      titulo: title,
      descricao: description,
      condicao: estado,
      foto_uris: JSON.stringify(foto_uris),
      id_usuario_proprietario: idUsuario,
      status_item: "DISPONIVEL",
    };

    try {
      await cadastrarItem(newItem);
      alert("Item cadastrado com sucesso!");
      setTitle("");
      setDescription("");
      setTipe("");
      setEstado("");
      setImages([]);
      navigate("/profile");
    } catch (error) {
      console.error("Erro no cadastro:", error.response?.data || error);
      alert("Erro ao cadastrar item. Verifique os dados e tente novamente.");
    }
  };

  // Preview da imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImages([{ base64: reader.result, preview: URL.createObjectURL(file) }]);
    };
    reader.readAsDataURL(file);
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

  const conditions = ["Novo", "Como novo", "Bom estado", "Estado regular", "Para reparo"];

  const voltarPagina = () => navigate(-1);

  return (
    <section className="register">
      <h1>Adicionar Novo Item</h1>
      <p>Compartilhe um item que você não usa mais e encontre algo que precisa</p>

      <section className="section-register">
        <form onSubmit={handleSubmit} className="form">
          <h3>Informações Básicas</h3>

          {!loadingUsuario && !idUsuario && (
            <p style={{ color: "red" }}>
              Não foi possível identificar o usuário. Faça login novamente.
            </p>
          )}

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

          <button type="submit" className="button-form" disabled={loadingUsuario}>
            {loadingUsuario ? "Carregando..." : "Publicar Item"}
          </button>

          <button onClick={voltarPagina} type="button" className="button-form" style={{ marginBottom: "1rem" }}>
            <FaArrowLeft /> Voltar
          </button>
        </form>

        <section className="photo">
          <div>
            <h2>Fotos do Item</h2>
            <p>Adicione apenas uma foto do seu item</p>
          </div>

          <input type="file" accept="image/*" onChange={handleImageChange} />

          <div className="photo-preview">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.preview}
                alt={`Foto ${index + 1}`}
                width="150"
                height="200"
                style={{ borderRadius: "8px", objectFit: "cover", marginRight: "8px" }}
              />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
