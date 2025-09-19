import api from "./api";

// ===================== ROTAS PÚBLICAS =====================
const buscarPropostas = async () => {
  const { data } = await api.get("/api/propostas");
  return data;
};

const buscarPropostaPorId = async (id) => {
  const { data } = await api.get(`/api/propostas/${id}`);
  return data;
};

// ===================== ROTAS PROTEGIDAS =====================
// Cria proposta + 1ª mensagem (mensagem_inicial) — requer login
const adicionarProposta = async ({ id_item_oferecido, id_item_desejado, mensagem_inicial }, token) => {
  const { data } = await api.post(
    "/api/propostas",
    { id_item_oferecido, id_item_desejado, mensagem_inicial },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
};
// Só o proponente pode atualizar/deletar/cancelar
const atualizarProposta = async (id, payload, token) => {
  const { data } = await api.put(`/api/propostas/${id}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const deletarProposta = async (id, token) => {
  const { data } = await api.delete(`/api/propostas/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const cancelarProposta = async (id, token) => {
  const { data } = await api.put(`/api/propostas/${id}/cancelar`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Ações do destinatário (dono do item_desejado)
const aceitarProposta = async (id, token) => {
  const { data } = await api.put(`/api/propostas/${id}/aceitar`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const recusarProposta = async (id, token) => {
  const { data } = await api.put(`/api/propostas/${id}/recusar`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export {
  buscarPropostas,
  buscarPropostaPorId,
  adicionarProposta,    
  atualizarProposta,    
  deletarProposta,      
  cancelarProposta,     
  aceitarProposta,      
  recusarProposta,     
};