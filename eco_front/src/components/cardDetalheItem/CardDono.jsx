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
  // const { user } = useAuth() // pegar token do usuário logado
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await adicionarMensagem(texto);
    } catch (error) {
      alert("Erro ao enviar mensagem para usúario");
      console.error(`Erro ao enviar mensagem ${error.message}`);
    }
  };

  const abrirModalTroca = async () => {
    try {
      const response = await buscarDadosItem();
      const lista = response.data || response;
      // console.log("Produtos recebidos:", lista);
      setProdutos(lista);
      setShowModal(true);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  const proporTroca = async (produto) => {
    try {
      alert(`Você propôs troca com: ${produto.titulo}`);
      confirm(`Você tem certeza que quer trocar ${produto.titulo}`)

      const payload = {
        id_item_oferecido: produto.id,
        id_item_desejado: id,
        mensagem_inicial: texto
      }
      // TODO passar token
      // const response = await adicionarProposta(payload, user.token)
      console.log(`URL ID ${id} | produto id ${produto.id_item} | nome ${produto.titulo} | mensagem: ${texto}`);
      setShowModal(false);

    }catch(error) {
      console.error(`Erro ao Propor Troca ${error.message}`);
      
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
          <button onClick={handleSubmit} className="button-message">
            Enviar Mensagem
          </button>
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
                 key={p.id}
                className="produto-item">
                  {p.titulo}
                  <button
                    onClick={() => proporTroca(p)}
                    className="btn-selecionar"
                  >Selecionar</button>
                </li>
              ))}
            </ul>
            <button  onClick={() => setShowModal(false)} className="btn-fechar">
              <img src="https://cdn-icons-png.flaticon.com/128/6276/6276642.png"
               alt="close modal"
               width={'30px'}
               />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
