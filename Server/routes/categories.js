const express = require('express');
const { createCategories, getCategories, getCategoriesId, updateCategories, deleteCategories } = require('../controllers/categories');
const router = express.Router();

router.post('/category/create', createCategories);
router.get('/category', getCategories);
router.get('/category/:id', getCategoriesId);
router.put('/category/:id', updateCategories);
router.delete('/category/:id', deleteCategories);

module.exports = router;

