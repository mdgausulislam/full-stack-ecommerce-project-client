const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const mongoose = require('mongoose');
const CategoryRouter = require('./routes/categories')
const ProductRouter = require('./routes/product')

app.use(cors());
app.options('*', cors());

// middleware
app.use(bodyParser.json());


//Routes
app.use('/api', CategoryRouter)
app.use('/api', ProductRouter)

// database
mongoose.connect(process.env.CONNECTION_MONGODB)
    .then(() => {
        console.log("Database connection ready");

        // server
        app.listen(process.env.PORT, () => {
            console.log(`Ecommerce server running http://localhost:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
