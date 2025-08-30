const{ getAllCategoria,getCategoriaById, addCategoria,updateCategoria,deleteCategoria } = require ('../models/categoriaModel');

const getAllCategoriaHandler = async(req, res) => {
   try{
      const categoria = await getAllCategoria();
      
      res.status(200).json(categoria);
   } 
   catch (error) {
      res.status(500).json({ error: error.message });
   }
}

const getCategoriaByIdHandler = async(req, res) => {
  const id_categoria = parseInt(req.params.id_categoria);

  try{
    const categoria = await getCategoriaById(id_categoria);
    
    if(!categoria){
    return res.status(404).json({ error:"Categoria não encontrado!"});
    } 
      res.status(200).json(categoria);
  }
  catch(error){
            res.status(500).json({ error: "Erro ao buscar categoria"});
  }
  }
  
  const addCategoriaHandler = async(req, res) => {
    const {nome_categoria, descricao}= req.body;
  
  if(!nome_categoria){
  return res.status(400).json({ error: 'Nome obrigatório'})};
  }
  try{
    const novoCategoria = await addCategoria(nome_categoria, descricao);
    
       res.status(201).json(addCategoria);
  }
  catch(error){
            res.status(500).json({ error: error });
  }
  
  }
  
  const updateCategoriaHandler = async(req,res) => {
    const id_categoria = parseInt(req.params.id_categoria);
    
   const {nome_categoria, descricao} = req.body;
   
       if(!nome_categoria){
        return res.status(400).json({ error: 'Nome obrigatório'});
    }
    
    try {
      const categoriaAtualizado = await updateCategoria (nome_categoria, descricao);
      
              res.status(200).json(categoriaAtualizado);
    }
    catch(error) {
              if(error.message === 'Categoria não encontrado'){
            return res.status(404).json({ error: 'Categoria não encontrado'});
        }
        res.status(500).json({ error: 'Erro ao atualizar categoria' });
    }
    
  }
  
  const deleteCategoriaHandler = async(req, res) => {
    const id_categoria = parseInt(req.params.id_categoria);

    try{
        await deleteCategoria(id_categoria);

        res.status(204).send();
    }
    catch(error){
        if(error.message === 'Categoria não encontrado'){
            return res.status(404).json({ error: 'Categoria não encontrado'});
        }
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
  getAllCategoriaHandler,
  getCategoriaByIdHandler,
  addCategoriaHandler,
  updateCategoriaHandler,
  deleteCategoriaHandler
}