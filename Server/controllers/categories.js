const { Category } = require('../models/category');
const mongoose = require('mongoose')
const cloudinary = require('../utilities/cloudinary')




const createCategories = async (req, res) => {
    // Dynamically import p-limit
    const pLimit = (await import('p-limit')).default;

    const limit = pLimit(2);
    const imageToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        });
    });

    try {
        const uploadStatus = await Promise.all(imageToUpload);
        const imgurl = uploadStatus.map((item) => item.secure_url);

        if (!uploadStatus) {
            return res.status(500).json({
                message: "images cannot upload...!",
                success: false
            })
        }

        let category = new Category({
            name: req.body.name,
            images: imgurl,
            color: req.body.color,
        });

        category = await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({
            error: "Images cannot be uploaded or category creation failed!",
            success: false,
        });
    }
};

const getCategories = async (req, res) => {
    try {
        const categoryList = await Category.find();
        if (categoryList.length === 0) {
            return res.status(404).json({ success: false, message: "No categories found" });
        }
        res.status(200).send(categoryList);
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


const getCategoriesId = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

}

const updateCategories = async (req, res) => {
    const categoryId = req.params.id;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({ success: false, message: "Invalid category ID format" });
    }

    try {
        const { name, images, color } = req.body;

        const category = await Category.findByIdAndUpdate(categoryId, { name, images, color }, { new: true });

        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.status(200).json({ success: true, message: "Category updated successfully", category });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};



const deleteCategories = async (req, res) => {
    const categoryId = req.params.id;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({ success: false, message: "Invalid category ID format" });
    }

    try {
        const category = await Category.findByIdAndDelete(categoryId);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found!" });
        }
        res.status(200).json({ success: true, message: "Category deleted successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCategories,
    getCategories,
    getCategoriesId,
    updateCategories,
    deleteCategories
};
