const express = require('express');
const Customer = require('../models/customer');
const router = express.Router();


router.get('/', async(req,res) => {
    const customers =  await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req,res) => {
    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    customer = await customer.save();
    res.send(customer);
});

router.put('/:id', async (req,res) => {
    let customer = await Customer.findByIdAndUpdate(req.params.id,
        { name: req.body.name, phone: req.body.phone, isGold: req.body.isGold }, { new: true });
    if(!customer) return res.status(404).send('The customer with the given ID was not found');
    res.send(customer);
});

router.delete('/:id', async(req,res) => {
    let customer = await Customer.findByIdAndRemove(req.params.id);
    if(!customer) return res.status(404).send('The customer wiht the given ID was not found');
    res.send(customer);
});

module.exports = router;