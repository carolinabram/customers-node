const express = require('express');
const mongoose = require('mongoose');
const customers = require('./routes/customers');
const app = express();

mongoose.connect('mongodb://localhost/customers')
    .then(() => console.log("Connected to MongoDB"))
    .catch( err => console.log("Couldn't connect to MongoDB", err));

app.use(express.json());
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`) )