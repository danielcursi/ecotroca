const { getAllItens, getItemById, addItem, updateItem, deleteItem } = require('../services/itemService');

exports.getAllItensHandler = async (req, res) => {
  try {
    const itens = await getAllItens();
    res.status(200).json(itens);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItemByIdHandler = async (req, res) => {
  const id_item = parseInt(req.params.id_item);
  try {
    const item = await getItemById(id_item);
    if (!item) return res.status(404).json({ error: 'Item não encontrado' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addItemHandler = async (req, res) => {
  try {
    const novoItem = await addItem(req.body);
    res.status(201).json(novoItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateItemHandler = async (req, res) => {
  const id_item = parseInt(req.params.id_item);
  try {
    const atualizado = await updateItem(id_item, req.body);
    res.status(200).json(atualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteItemHandler = async (req, res) => {
  const id_item = parseInt(req.params.id_item);
  try {
    await deleteItem(id_item);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
