import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adicionarMensagem } from '../../services/mensagemServico'
import "./CardDono.css";

export default function CardDono({ user, rota }) {
  const navigate = useNavigate();
  const [texto, setTexto] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      await adicionarMensagem(texto)
    }catch(error) {
      alert('Erro ao enviar mensagem para usúario')
      console.error(`Erro ao enviar mensagem ${error.message}`);
      
    }

  }

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
          <button onClick={handleSubmit} className="button-message">Enviar Mensagem</button>
          <button className="button-troca">Propor Troca</button>
        </div>
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
      {/* Card de Dicas de Segurança */}
    </div>
  );
}
