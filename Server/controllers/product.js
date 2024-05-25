const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const { Product } = require('../models/products');
const { Category } = require('../models/category');

const getProduct = async (req, res) => {
    const productList = await Product.find().populate('category')

    if (!productList) {
        res.status(500).json({ success: false, message: "No products found" })
    }
    res.status(200).json(productList);
}

const createProducts = async (req, res) => {
    const category = await Category.findById(req.body.category)

    if (!category) {
        return res.status(404).send('Invalid Category...!')
    }

    const pLimit = (await import('p-limit')).default;

    const limit = pLimit(2);
    const imageToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        });
    });

    const uploadStatus = await Promise.all(imageToUpload);
    const imgurl = uploadStatus.map((item) => item.secure_url);

    if (!uploadStatus) {
        return res.status(500).json({
            message: "images cannot upload...!",
            success: false
        })
    }

    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        images: imgurl,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
        dateCreated: req.body.dateCreated,

    });
    product = await product.save()

    if (!product) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
    res.status(201).json(product)
}


const deleteProduct = async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    if (!deleteProduct) {
        return res.status(404).json({ success: false, message: "Product not found...!" });
    }
    res.status(200).json({ success: true, message: "Product deleted successfully!" });

}


module.exports = {
    getProduct,
    createProducts
}
