const{ getAllItem,getItemById, getItemsByUsuario,getItemsByCategoria, addItem, updateItem,deleteItem } = require ('../models/itemModel');

const getAllItemHandler = async(req, res) => {
   try{
      const item = await getAllItem();
      
      res.status(200).json(item);
   } 
   catch (error) {
      res.status(500).json({ error: error.message });
   }
}

const getItemByIdHandler = async(req, res) => {
  const id_item = parseInt(req.params.id_item);

  try{
    const item = await getItemById(id_item);
    
    if(!item){
    return res.status(404).json({ error:"Item não encontrado!"});
    } 
      res.status(200).json(item);
  }
  catch(error){
            res.status(500).json({ error: "Erro ao buscar item"});
  }
  }
  
  const addItemHandler = async(req, res) => {
    const {}= req.body;
  
  if(!titulo){
  return res.status(400).json({ error: 'Titulo obrigatório'})};
  }
  try{
    const novoCategoria = await addItem(titulo, descricao, condicao,foto_uris, status_item);
    
       res.status(201).json(addItem);
  }
  catch(error){
            res.status(500).json({ error: error });
  }
  
  }
  
  const updateItemHandler = async(req,res) => {
    const id_item = parseInt(req.params.id_item);
    
   const {titulo, descricao, condicao,foto_uris, status_item} = req.body;
   
       if(!titulo){
        return res.status(400).json({ error: 'Titulo obrigatório'});
    }
    
    try {
      const itemAtualizado = await updateItem (titulo, descricao, condicao,foto_uris, status_item);
      
              res.status(200).json(itemAtualizado);
    }
    catch(error) {
              if(error.message === 'Item não encontrado'){
            return res.status(404).json({ error: 'Item não encontrado'});
        }
        res.status(500).json({ error: 'Erro ao atualizar item' });
    }
    
  }
  
  const deleteItemHandler = async(req, res) => {
    const id_item = parseInt(req.params.id_item);

    try{
        await deleteItem(id_item);

        res.status(204).send();
    }
    catch(error){
        if(error.message === 'Item não encontrado'){
            return res.status(404).json({ error: 'Item não encontrado'});
        }
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
  getAllItemHandler,
  getItemByIdHandler,
  addItemHandler,
  updateItemHandler,
  deleteItemHandler
}