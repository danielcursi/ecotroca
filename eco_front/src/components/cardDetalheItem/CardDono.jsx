import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adicionarMensagem } from "../../services/mensagemServico";
import "./CardDono.css";
import { buscarDadosItem } from "../../services/itemServico";
import { useParams } from "react-router-dom";
import { adicionarProposta } from "../../services/propostaServico";
import { useAuth } from "../../contexts/AuthContext";

export default function CardDono({ user, rota }) {
  const navigate = useNavigate();
  const [texto, setTexto] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const { id } = useParams();
  const { user: usuarioLogado } = useAuth(); // pegar token do usuário logado

  // Enviar mensagem simples
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!texto.trim()) return alert("Escreva uma mensagem antes de enviar.");

    try {
      await adicionarMensagem({ conteudo_mensagem: texto });
      alert("Mensagem enviada com sucesso!");
      setTexto("");
    } catch (error) {
      alert("Erro ao enviar mensagem para usuário");
      console.error(`Erro ao enviar mensagem ${error.message}`);
    }
  };

  // Abrir modal com lista de produtos
  const abrirModalTroca = async () => {
    try {
      const response = await buscarDadosItem();
      const lista = response.data || response;
      setProdutos(lista);
      setShowModal(true);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  // Propor troca
  const proporTroca = async (produto) => {
    try {
      if (!texto.trim()) return alert("Escreva uma mensagem inicial.");

      const confirmacao = confirm(`Você tem certeza que quer trocar ${produto.titulo}?`);
      if (!confirmacao) return;

      const payload = {
        id_item_oferecido: produto.id_item, // corrigido
        id_item_desejado: id,
        mensagem_inicial: texto
      };

      // Enviar proposta com token do usuário logado
      await adicionarProposta(payload, usuarioLogado.token);

      alert(`Você propôs troca com: ${produto.titulo}`);
      setShowModal(false);
      setTexto("");

    } catch (error) {
      console.error(`Erro ao Propor Troca: ${error.message}`);
      alert("Erro ao propor troca. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="container">
      <div className="coluna">
        {/* Card do Dono */}
        <div className="cardDono">
          <h2 style={{ fontWeight: "bold" }}>Nome do dono do Item</h2>
          <h3 className="user"> {user}</h3>
        </div>

        {/* Card de Enviar Mensagem */}
        <div className="cardMensagem">
          <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Entrar em Contato
          </h2>
          <textarea
            id="mensagem"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escreva uma mensagem para o dono do item..."
            className="box-message"
          ></textarea>
          
          <button onClick={abrirModalTroca} className="button-troca">
            Propor Troca
          </button>
        </div>

        {/* Card de Dicas de Segurança */}
        <div className="cardSeguranca">
          <h2 style={{ fontWeight: "bold" }}>Dicas de Segurança</h2>
          <ul className="list">
            <li>Sempre se encontre em locais públicos</li>
            <li>Verifique o item pessoalmente antes da troca</li>
            <li>Confie na sua intuição</li>
            <li>Use o sistema de avaliações</li>
          </ul>
        </div>
      </div>

      {/* Modal para propor troca */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Escolha um produto para propor troca</h2>
            <ul>
              {produtos.map((p) => (
                <li
                  key={p.id_item} // corrigido
                  className="produto-item"
                >
                  {p.titulo}
                  <button
                    onClick={() => proporTroca(p)}
                    className="btn-selecionar"
                  >
                    Selecionar
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => setShowModal(false)} className="btn-fechar">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6276/6276642.png"
                alt="close modal"
                width={"30px"}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
