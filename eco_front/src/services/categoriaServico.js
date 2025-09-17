import api from "./api";

// Buscar todas as categorias
const buscarCategorias = async () => {
  try {
    const response = await api.get("/api/categorias");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw error;
  }
};

// Buscar categoria por ID
const buscarCategoriaPorId = async (id_categoria) => {
  try {
    const response = await api.get(`/api/categorias/${id_categoria}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar categoria ${id_categoria}:`, error);
    throw error;
  }
};

// Adicionar nova categoria
const cadastrarCategoria = async (categoria) => {
  try {
    const response = await api.post("/api/categorias", categoria);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar categoria:", error);
    throw error;
  }
};

// Atualizar categoria
const atualizarCategoria = async (id_categoria, categoria) => {
  try {
    const response = await api.put(`/api/categorias/${id_categoria}`, categoria);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar categoria ${id_categoria}:`, error);
    throw error;
  }
};

// Deletar categoria
const deletarCategoria = async (id_categoria) => {
  try {
    await api.delete(`/api/categorias/${id_categoria}`);
    return true;
  } catch (error) {
    console.error(`Erro ao deletar categoria ${id_categoria}:`, error);
    throw error;
  }
};

export {
  buscarCategorias,
  buscarCategoriaPorId,
  cadastrarCategoria,
  atualizarCategoria,
  deletarCategoria,
};


/*
router.get("/", getAllCategoriasHandler);
router.get("/:id_categoria", getCategoriaByIdHandler);
router.post("/", addCategoriaHandler);
router.put("/:id_categoria", updateCategoriaHandler);
router.delete("/:id_categoria", deleteCategoriaHandler);

module.exports = router;
 */