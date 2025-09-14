import api from './api';

const buscarDadosItem = async () => {
  try {
    const res = await api.get('/api/item');
    return res.data;
  } catch (error) {
    throw new Error('Falha ao listar item: ' + error.message);
  }
};

const buscarDadosItemId = async (id_item) => {
  try {
    const res = await api.get(`/api/item/${id_item}`);
    return res.data;
  } catch (error) {
    throw new Error('Erro ao buscar item pelo id: ' + error.message);
  }
};

const cadastrarItem = async (payload) => {
  try {
    const res = await api.post('/api/item', payload);
    return res.data;
  } catch (error) {
    throw new Error('Falha ao cadastrar item: ' + error.message);
  }
};

const atualizarItem = async (id_item, payload) => {
  try {
    const res = await api.put(`/api/item/${id_item}`, payload);
    return res.data;
  } catch (error) {
    throw new Error('Falha ao atualizar item: ' + error.message);
  }
};

const deletarItem = async (id_item) => {
  try {
    const res = await api.delete(`/api/item/${id_item}`);
    return res.status === 204 ? true : res.data;
  } catch (error) {
    throw new Error('Falha ao deletar item: ' + error.message);
  }
};

export default {
  buscarDadosItem,
  buscarDadosItemId,
  cadastrarItem,
  atualizarItem,
  deletarItem
};