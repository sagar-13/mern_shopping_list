const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Database schema, simple scheme for now, learning purposes
const ItemSchema = new Schema({
    name: {
        type: String, 
        required: true
        
    },
    date: {
        type: Date, 
        // default values
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);