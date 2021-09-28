const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema ({
    title: {type: String, required: true},
    description: {type: String},
    status: {type: String}, // data type may changed based on what status actually refers to
    email: {type: String},
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;