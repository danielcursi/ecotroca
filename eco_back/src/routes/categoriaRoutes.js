const express = require ('express');
const router = express.Router();
const{ getAllCategoriaHandler,getCategoriaByIdHandler,  addCategoriaHandler, updateCategoriaHandler,deleteCategoriaHandler } = require('../controllers/categoriaController');

router.get('/', getAllCategoriaHandler);
router.get('/:id_categoria', getCategoriaByIdHandler);
router.post('/', addCategoriaHandler);
router.put('/:id_categoria', updateCategoriaHandler);
router.delete('/:id_categoria', deleteCategoriaHandler);

module.exports = router;