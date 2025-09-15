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
  const [images, setImages] = useState([]);

  function voltarPagina() {
    navigate(-1);
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 5) {
      alert("Você só pode adicionar até 5 fotos.");
      return;
    }

    // criar URL temporária para preview
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages([...images, ...newImages]);
  };

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
      condition: estado,
      location: local,
      // Adicionar 
      // photos: images.map((img) => img.file.name),
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
    <section className="register">
      <section>
        <h1>Adicionar Novo Item</h1>
        <p>
          Compartilhe um item que você não usa mais e encontre algo que precisa
        </p>

        <section className="section-register">
          <form onSubmit={handleSubmit} className="form">
            <h3>Informações Básicas</h3>

            <label>Titulo do item <span className="item-required">*</span></label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Bicicleta urbana em ótimo estado"
              required
            />

            <label>Descrição <span className="item-required">*</span></label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="6"
              placeholder="Descreva seu item em detalhes..."
              required
              className="description"
            ></textarea>

            <div className="section-select">
              <div>
                <label>Categoria <span className="item-required">*</span></label>
                <select
                  value={tipe}
                  onChange={(e) => setTipe(e.target.value)}
                  required
                >
                  <option value="">Selecione...</option>
                  {categories.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Estado de conservação <span className="item-required">*</span></label>
                <select
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  required
                >
                  <option value="">Selecione...</option>
                  {conditions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label>Localização <span className="item-required">*</span></label>
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

            <button
              onClick={voltarPagina}
              type="button"
              className="button-form"
              style={{ marginBottom: "1rem" }}
            >
              <FaArrowLeft /> Voltar
            </button>
          </form>

          {/* Upload de fotos */}
          <section className="photo">
            <div>
              <h2>Fotos do Item</h2>
              <p>Adicione até 5 fotos do seu item</p>
            </div>

            <input
            id="upload-btn"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              />

            {/* Preview das imagens */}
            <div className="photo-preview">
              {images.map((img, index) => (
                <img id="img-hover"
                key={index}
                src={img.preview}
                alt={`Foto ${index + 1}`}
                width="150"
                height="200px"
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease, filter 0.3s ease"
                  }}
                />
              ))}
            </div>
        </section>
          </section>
      </section>
    </section>
  );
}
