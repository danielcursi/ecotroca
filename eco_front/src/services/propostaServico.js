import api from "./api";

// ===================== ROTAS PÚBLICAS =====================

const buscarPropostas = async () => {
  try {
    const response = await api.get("/api/propostas");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar propostas:", error);
    throw error;
  }
};

const buscarPropostaPorId = async (id) => {
  try {
    const response = await api.get(`/api/propostas/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar proposta ${id}:`, error);
    throw error;
  }
};

const adicionarProposta = async (dadosProposta) => {
  try {
    const response = await api.post("/api/propostas", dadosProposta);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar proposta:", error);
    throw error;
  }
};

// ===================== ROTAS PROTEGIDAS (só proponente) =====================

const atualizarProposta = async (id, dadosProposta) => {
  try {
    const response = await api.put(`/api/propostas/${id}`, dadosProposta);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar proposta ${id}:`, error);
    throw error;
  }
};

const deletarProposta = async (id) => {
  try {
    const response = await api.delete(`/api/propostas/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar proposta ${id}:`, error);
    throw error;
  }
};

const cancelarProposta = async (id) => {
  try {
    const response = await api.put(`/api/propostas/${id}/cancelar`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao cancelar proposta ${id}:`, error);
    throw error;
  }
};

// ===================== AÇÕES QUE DEPENDEM DO DESTINATÁRIO =====================

const aceitarProposta = async (id) => {
  try {
    const response = await api.put(`/api/propostas/${id}/aceitar`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao aceitar proposta ${id}:`, error);
    throw error;
  }
};

const recusarProposta = async (id) => {
  try {
    const response = await api.put(`/api/propostas/${id}/recusar`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao recusar proposta ${id}:`, error);
    throw error;
  }
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
/**
 // Rotas públicas / leitura
 router.get("/", getAllPropostasHandler);
 router.get("/:id_proposta", getPropostaByIdHandler);
 router.post("/", addPropostaHandler);
 
 // Rotas protegidas (só o proponente pode alterar ou cancelar)
 router.put("/:id_proposta", verificarDonoProposta, updatePropostaHandler);
 router.delete("/:id_proposta", verificarDonoProposta, deletePropostaHandler);
 router.put("/:id_proposta/cancelar", verificarDonoProposta, cancelarPropostaHandler);
 
 // Ações que dependem do destinatário (não aplicamos o middleware do proponente)
 router.put("/:id_proposta/aceitar", aceitarPropostaHandler);
 router.put("/:id_proposta/recusar", recusarPropostaHandler);
 
 module.exports = router;
 
 */