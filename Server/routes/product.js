const express = require('express');
const { getProduct, createProducts, deleteProduct, getProductId, updateProduct } = require('../controllers/product');
const router = express.Router();


router.get('/all-Product', getProduct)
router.post('/all-Product/create', createProducts)
router.get('/all-Product/:id', getProductId)
router.put('/all-Product/:id', updateProduct)
router.delete('/all-Product/:id', deleteProduct)

module.exports = router;