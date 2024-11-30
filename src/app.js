const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const productRoutes = require('./routes/product.routes.js');
const cartRoutes = require('./routes/carts.routes.js');
const viewsRoutes = require('./routes/views.routes.js');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/', viewsRoutes);

module.exports = app;
