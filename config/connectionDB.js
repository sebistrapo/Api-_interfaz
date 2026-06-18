require('dotenv').config()
const mongoose = require('mongoose');

const URL = process.env.MONGOURI;
mongoose.connect(URL);

module.exports = mongoose;