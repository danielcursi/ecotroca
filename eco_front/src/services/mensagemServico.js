import api from './api';
const sufix = '/api/mensagens';

exports.buscarMensagens = async () => {
  try {
    const response = await api.get(sufix);
    return response.data;
  } catch (error) {
    console.error(`Erro ao procurar mensagens: ${error.message}`);
    throw error;
  }
};

exports.buscarMensagemPorId = async (id_mensagem) => {
  try {
    const response = await api.get(`${sufix}/${id_mensagem}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar mensagem por ID: ${error.message}`);
    throw error;
  }
};

exports.adicionarMensagem = async (dadosMensagem) => {
  try {
    const response = await api.post(sufix, dadosMensagem);
    return response.data;
  } catch (error) {
    console.error(`Erro ao adicionar mensagem: ${error.message}`);
    throw error;
  }
};

exports.editarMensagem = async (id_mensagem, mensagemAtualizada, token) => {
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

exports.deletarMensagem = async (id_mensagem, token) => {
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
