import api from './api';

// Buscar todos os itens
export const buscarDadosItem = async () => {
  try {
    const res = await api.get('/api/itens');
    return res.data;
  } catch (error) {
    throw new Error('Falha ao listar itens: ' + error.message);
  }
};

// Buscar item por ID
export const buscarDadosItemId = async (id_item) => {
  try {
    const res = await api.get(`/api/itens/${id_item}`);
    return res.data;
  } catch (error) {
    throw new Error('Erro ao buscar item pelo id: ' + error.message);
  }
};

// Cadastrar novo item
export const cadastrarItem = async (payload) => {
  try {
    const res = await api.post('/api/itens', payload);
    return res.data;
  } catch (error) {
    console.error("Erro na API ao cadastrar item:", error.response?.data || error.message);
    throw new Error('Falha ao cadastrar item: ' + (error.response?.data?.error || error.message));
  }
};

// Atualizar item existente
export const atualizarItem = async (id_item, payload) => {
  try {
    const res = await api.put(`/api/itens/${id_item}`, payload);
    return res.data;
  } catch (error) {
    throw new Error('Falha ao atualizar item: ' + error.message);
  }
};

// Deletar item
export const deletarItem = async (id_item) => {
  try {
    const res = await api.delete(`/api/itens/${id_item}`);
    return res.status === 204 ? true : res.data;
  } catch (error) {
    throw new Error('Falha ao deletar item: ' + error.message);
  }
};