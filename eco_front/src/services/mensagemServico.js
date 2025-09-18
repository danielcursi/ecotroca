import api from './api';
const sufix = '/api/mensagens';

const buscarMensagens = async (token) => {
  try {
    const response = await api.get(sufix, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao procurar mensagens: ${error.message}`);
    throw error;
  }
};

const buscarMensagemPorId = async (id_mensagem, token) => {
  try {
    const response = await api.get(`${sufix}/${id_mensagem}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar mensagem por ID: ${error.message}`);
    throw error;
  }
};

const adicionarMensagem = async (dadosMensagem, token) => {
  try {
    const response = await api.post(sufix, dadosMensagem, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao adicionar mensagem: ${error.message}`);
    throw error;
  }
};


const editarMensagem = async (id_mensagem, mensagemAtualizada, token) => {
  try {
    const response = await api.put(`${sufix}/${id_mensagem}`, mensagemAtualizada, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao editar mensagem: ${error.message}`);
    throw error;
  }
};

const deletarMensagem = async (id_mensagem, token) => {
  try {
    const response = await api.delete(`${sufix}/${id_mensagem}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar mensagem: ${error.message}`);
    throw error;
  }
};

export { buscarMensagens, buscarMensagemPorId, adicionarMensagem, editarMensagem, deletarMensagem };
