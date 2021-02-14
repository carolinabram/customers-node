const mongoose = require('mongoose');

const Customer = mongoose.model('Customer',new mongoose.Schema({
    name: String,
    phone: Number,
    isGold: Boolean 
 }));

module.exports = Customer;