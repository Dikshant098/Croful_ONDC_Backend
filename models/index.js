const mongoose = require('mongoose')
const DB = 'mongodb+srv://Croful:croful0132@cluster0.uki58l9.mongodb.net/ONDC'

mongoose.connect(DB, {
    family: 4
}).then(() => {
    console.log('connected');
}).catch((error) => {
    console.log('Connection failed', error);
})

const User = require('./User')
const Cart = require('./Cart')
