import { useEffect, useState } from "react";
import { buscarMensagens } from "../services/mensagemServico";
import { buscarPropostas, aceitarProposta, recusarProposta } from "../services/propostaServico";
import { buscarUsuarioPorId } from "../services/usuarioServico";
import { buscarDadosItem } from "../services/itemServico";

export default function Inbox() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [mensagens, setMensagens] = useState([]);
  const [propostas, setPropostas] = useState([]);
  const [usuarios, setUsuarios] = useState({});
  const [itens, setItens] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (!usuarioSalvo) {
      setLoading(false);
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    const fetchInbox = async () => {
      try {
        // 🔑 Buscar dados completos mas manter token
        const dadosCompletos = await buscarUsuarioPorId(usuario.id_usuario);
        setUsuarioLogado({ ...dadosCompletos, token: usuario.token });

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
          (p) => p.item_desejado.id_usuario_proprietario === usuario.id_usuario
        );

        // Buscar dados de usuários
        const userIds = [
          ...new Set([
            ...minhasMensagens.map((m) => m.usuario_remetente.id_usuario),
            ...minhasPropostas.map((p) => p.usuario_proponente.id_usuario),
          ]),
        ];
        const usuariosData = {};
        for (let id of userIds) {
          usuariosData[id] = await buscarUsuarioPorId(id);
        }
        setUsuarios(usuariosData);

        // Buscar dados de itens
        const itemIds = [...new Set(minhasPropostas.map((p) => p.id_item_desejado))];
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
            <li key={p.id_proposta}>
              <b>De:</b> {usuarios[p.id_usuario_proponente]?.nome || "Usuário"} <br />
              <b>Item que deseja:</b> {itens[p.id_item_desejado]?.titulo || p.id_item_desejado} <br />
              <b>Mensagem:</b> {p.mensagem || "Sem mensagem"} <br />
              <button onClick={() => handleAceitar(p.id_proposta)}>Aceitar</button>
              <button onClick={() => handleRecusar(p.id_proposta)}>Recusar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
