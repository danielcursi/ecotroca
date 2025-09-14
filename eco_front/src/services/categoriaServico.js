import api from './api';

const buscarDadosCategoria = async () => {
   try{
     const res = await api.get('/api/categoria');
     return res.data;
   } catch(error){
     rethrow(error, 'Falhar ao listar categoria');
   }
};

const buscarDadosCategoriaId = async (id_categoria) => {
  try{
    const res = await api.get(`/api/categoria/${id_categoria}`);
    return res.data;
  } catch (error){
    rethrow(error, 'Error ao buscar categoria pelo id');
  }
};

const cadastrarCategoria = async (payload) => {
  try{
    const res = await api.post ('/api/categoria', payload);
    return res.data;
  } catch(error){
    rethrow(error,'Falha ao cadastrar categoria');
  }
};

const atualizarItem = async async(id_categoria, payload) => {
  try{
        const res = await api.put(`/api/categoria/${id_categoria}`, payload); 
        return res.data;
        console.log(res);
  } catch (error){
        rethrow(error, 'Falha ao atualizar categoria');
  }
};

const deletarItem = async (id_categoria) => {
  try{
    const res = await api.delete(`/api/categoria/${id_categoria`);
    return res.status === 204 ? true : res.data;
  } catch{
        rethrow(error, 'Falha ao deletar categoria');
  }
};

export default {
    buscarDadosCategoria,
    buscarDadosCategoriaId,
    cadastrarCategoria,
    atualizarCategoria,
    deletarCategoria
};