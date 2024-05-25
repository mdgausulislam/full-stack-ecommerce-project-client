const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    color: {
        type: String,
        required: true
    },
})

exports.Category = mongoose.model('Category', CategorySchema);