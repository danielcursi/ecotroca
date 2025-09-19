import { useEffect, useState } from "react";
import { buscarMensagens, adicionarMensagem } from "../services/mensagemServico";
import {
  buscarPropostas,
  aceitarProposta,
  recusarProposta,
  cancelarProposta,
} from "../services/propostaServico";
import { buscarUsuarioPorId } from "../services/usuarioServico";
import { buscarDadosItem } from "../services/itemServico";

export default function Inbox() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [mensagens, setMensagens] = useState([]);
  const [propostas, setPropostas] = useState([]);
  const [usuarios, setUsuarios] = useState({});
  const [itens, setItens] = useState({});
  const [loading, setLoading] = useState(true);
  const [novasMensagens, setNovasMensagens] = useState({}); // texto por proposta

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (!usuarioSalvo) {
      setLoading(false);
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    const fetchInbox = async () => {
      try {
        setUsuarioLogado(usuario);

        // Mensagens
        const todasMensagens = await buscarMensagens();
        const minhasMensagens = todasMensagens.filter(
          (m) =>
            m.proposta_troca?.item_desejado?.id_usuario_proprietario === usuario.id_usuario ||
            m.proposta_troca?.id_usuario_proponente === usuario.id_usuario
        );

        // Propostas
        const todasPropostas = await buscarPropostas();
        const minhasPropostas = todasPropostas.filter(
          (p) =>
            p.item_desejado.id_usuario_proprietario === usuario.id_usuario ||
            p.id_usuario_proponente === usuario.id_usuario
        );

        // Buscar dados de usuários
        const userIds = [
          ...new Set([
            ...minhasMensagens.map((m) => m.usuario_remetente.id_usuario),
            ...minhasPropostas.map((p) => p.usuario_proponente.id_usuario),
            ...minhasPropostas.map((p) => p.item_desejado.id_usuario_proprietario),
          ]),
        ];
        const usuariosData = {};
        for (let id of userIds) {
          usuariosData[id] = await buscarUsuarioPorId(id);
        }
        setUsuarios(usuariosData);

        // Buscar dados de itens
        const itemIds = [
          ...new Set([
            ...minhasPropostas.map((p) => p.id_item_desejado),
            ...minhasPropostas.map((p) => p.id_item_oferecido),
          ]),
        ];
        const itensData = {};
        const allItens = await buscarDadosItem();
        for (let id of itemIds) {
          itensData[id] = allItens.find((item) => item.id_item === id);
        }
        setItens(itensData);

        setMensagens(minhasMensagens);
        setPropostas(minhasPropostas);
      } catch (error) {
        console.error("Erro ao buscar inbox:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInbox();
  }, []);

  if (!usuarioLogado) return <p>Faça login para acessar sua Inbox.</p>;
  if (loading) return <p>Carregando inbox...</p>;

  // Enviar nova mensagem
  const handleEnviarMensagem = async (id_proposta) => {
    const texto = novasMensagens[id_proposta]?.trim();
    if (!texto) return;

    try {
      await adicionarMensagem({ id_proposta_troca: id_proposta, conteudo_mensagem: texto });
      alert("Mensagem enviada!");
      setNovasMensagens({ ...novasMensagens, [id_proposta]: "" });
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.error || "Erro ao enviar mensagem.");
    }
  };

  const handleAceitar = async (id) => {
    try {
      await aceitarProposta(id);
      setPropostas(propostas.filter((p) => p.id_proposta !== id));
      alert("Proposta aceita!");
    } catch (error) {
      console.error(error);
      alert("Erro ao aceitar proposta");
    }
  };

  const handleRecusar = async (id) => {
    try {
      await recusarProposta(id);
      setPropostas(propostas.filter((p) => p.id_proposta !== id));
      alert("Proposta recusada!");
    } catch (error) {
      console.error(error);
      alert("Erro ao recusar proposta");
    }
  };

  const handleCancelar = async (id) => {
    try {
      await cancelarProposta(id);
      setPropostas(propostas.filter((p) => p.id_proposta !== id));
      alert("Proposta cancelada!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cancelar proposta");
    }
  };

  return (
    <div className="inbox-container">
      <h2>Mensagens Recebidas ({mensagens.length})</h2>
      {mensagens.length === 0 ? (
        <p>Você não tem mensagens.</p>
      ) : (
        <ul className="mensagens-list">
          {mensagens.map((msg) => (
            <li key={msg.id_mensagem}>
              <b>De:</b> {usuarios[msg.id_usuario_remetente]?.nome || "Usuário"} <br />
              <b>Mensagem:</b> {msg.conteudo_mensagem}
            </li>
          ))}
        </ul>
      )}

      <h2>Propostas de Troca ({propostas.length})</h2>
      {propostas.length === 0 ? (
        <p>Você não recebeu propostas de troca.</p>
      ) : (
        <ul className="propostas-list">
          {propostas.map((p) => (
            <li key={p.id_proposta} style={{ marginBottom: "1.5rem", border: "1px solid #ccc", padding: "0.5rem" }}>
              <b>De:</b> {usuarios[p.id_usuario_proponente]?.nome || "Usuário"} <br />
              <b>Item Desejado:</b> {itens[p.id_item_desejado]?.titulo || p.id_item_desejado} <br />
              <b>Item Oferecido:</b> {itens[p.id_item_oferecido]?.titulo || p.id_item_oferecido} <br />
              <b>Status:</b> {p.status_proposta} <br />

              <textarea
                placeholder="Escreva sua mensagem..."
                value={novasMensagens[p.id_proposta] || ""}
                onChange={(e) =>
                  setNovasMensagens({ ...novasMensagens, [p.id_proposta]: e.target.value })
                }
                style={{ width: "100%", margin: "0.5rem 0" }}
              />

              <button onClick={() => handleEnviarMensagem(p.id_proposta)}>Enviar Mensagem</button>

              {p.status_proposta === "PENDENTE" && usuarioLogado.id_usuario === p.item_desejado.id_usuario_proprietario && (
                <>
                  <button onClick={() => handleAceitar(p.id_proposta)}>Aceitar</button>
                  <button onClick={() => handleRecusar(p.id_proposta)}>Recusar</button>
                </>
              )}

              {p.status_proposta === "PENDENTE" && usuarioLogado.id_usuario === p.id_usuario_proponente && (
                <button onClick={() => handleCancelar(p.id_proposta)}>Cancelar</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
