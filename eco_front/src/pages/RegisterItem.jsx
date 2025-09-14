import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { cadastrarItem } from "../services/itemServico";
import { buscarUsuarioPorId } from "../services/usuarioServico";

export default function NewItem() {
  const [idUsuario, setIdUsuario] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tipe, setTipe] = useState("");
  const [estado, setEstado] = useState("");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  // Buscar usuário logado no backend
  useEffect(() => {
    async function fetchUsuario() {
      try {
        const id = localStorage.getItem("id_usuario"); 
        if (id) {
          const usuario = await buscarUsuarioPorId(id);
          setIdUsuario(usuario.id_usuario); 
        }
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      }
    }
    fetchUsuario();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idUsuario) {
      alert("Usuário não identificado.");
      return;
    }

    // remove o prefixo data:image/... do base64
    const foto_uris = images.map((img) => img.base64.split(",")[1]);

    const newItem = {
      id_categoria: parseInt(tipe), 
      titulo: title,
      descricao: description,
      condicao: estado,
      foto_uris: foto_uris,
      id_usuario_proprietario: idUsuario, 
      status_item: "disponivel",
    };

    try {
      await cadastrarItem(newItem);
      alert("Item cadastrado com sucesso!");

      // limpa campos
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

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 5) {
      alert("Você só pode adicionar até 5 fotos.");
      return;
    }

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((prev) => [
          ...prev,
          { base64: reader.result, preview: URL.createObjectURL(file) },
        ]);
      };

      reader.readAsDataURL(file);
    });
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

  function voltarPagina() {
    navigate(-1);
  }

  return (
    <>
      <section className="register">
        <section>
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
                  <select
                    id="conditions"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                  >
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

              <button
                onClick={voltarPagina}
                type="button"
                className="button-form"
                style={{ marginBottom: "1rem" }}
              >
                <FaArrowLeft /> Voltar
              </button>
            </form>

            {/* Upload e preview de fotos */}
            <section className="photo">
              <div>
                <h2>Fotos do Item</h2>
                <p>Adicione até 5 fotos do seu item</p>
              </div>

              <input
                type="file"
                className="form-control"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />

              <div className="photo-preview">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img.preview}
                    alt={`Foto ${index + 1}`}
                    width="150"
                    height="200"
                    style={{
                      borderRadius: "8px",
                      objectFit: "cover",
                      marginRight: "8px",
                    }}
                  />
                ))}
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}