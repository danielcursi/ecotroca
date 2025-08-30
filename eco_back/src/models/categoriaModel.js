const prisma = require('../prisma');

const getAllCategoria = async () => {
  
  return prisma.Categoria.findMany({
    include:{
      item: true
    },
    orderBy: {
      nome_categoria: 'desc'
    }

  })
}

const getCategoriaById = async (id_categoria) => {
   return prisma.Categoria.findUnique({
     where: {
       id_categoria: id_categoria
     }
     include:{
      item: true
    }
   })
}

const addCategoria = async(nome_categoria,descricao) => {
  return prisma.Categoria.create({
     data:{
       nome_categoria:nome_categoria,
       descricao:descricao
     }
  });
}

const updateCategoria = async(id_categoria, nome_categoria, descricao) => {
  const categoria = await getCategoriaById(id_categoria);
  
  if(!categoria){
    throw new Error('Categoria não encontrado');
  }
  return prisma.Categoria.update({
    where:{
      id_categoria: id_categoria
    },
    data: {
      nome_categoria:nome_categoria,
      descricao:descricao
    },
    include:{
      item: true
    }
  });
}
 
const deleteCategoria = async(id_categoria) => {
  const categoria = await prisma.Categoria.findUnique ({
    
    where:{
      id_categoria: Number(id_categoria)
    }
  });
}

  if(!categoria){
    throw new Error('Categoria não encontrado');
  }
  return prisma.Categoria.delete({
    where:{
      id_categoria: Number(id_categoria)
    }
  });
}

module.exports = {
  getAllCategoria,
  getCategoriaById,
  addCategoria,
  updateCategoria,
  deleteCategoria
}