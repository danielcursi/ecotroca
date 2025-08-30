const express = require ('express');
const router = express.Router();
const{ getAllItemHandler,getItemByIdHandler,addItemHandler,updateItemHandler,deleteItemHandler} = require('../controllers/itemController');

router.get('/', getAllItemHandler);
router.get('/:id_item', getItemByIdHandler);
router.post('/', addItemHandler);
router.put('/:id_item', updateItemHandler);
router.delete('/:id_item', deleteItemHandler);

module.exports = router;