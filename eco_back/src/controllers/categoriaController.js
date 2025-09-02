const { getAllCategorias, getCategoriaById, addCategoria, updateCategoria, deleteCategoria } = require('../services/categoriaService');

exports.getAllCategoriasHandler = async (req, res) => {
  try {
    res.status(200).json(await getAllCategorias());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategoriaByIdHandler = async (req, res) => {
  try {
    const categoria = await getCategoriaById(parseInt(req.params.id_categoria));
    if (!categoria) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.status(200).json(categoria);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addCategoriaHandler = async (req, res) => {
  try {
    res.status(201).json(await addCategoria(req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCategoriaHandler = async (req, res) => {
  try {
    res.status(200).json(await updateCategoria(parseInt(req.params.id_categoria), req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCategoriaHandler = async (req, res) => {
  try {
    await deleteCategoria(parseInt(req.params.id_categoria));
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
