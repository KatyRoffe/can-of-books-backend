'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/can-of-books');
const Book = mongoose.model('book', {name: String});
const novel = new Book({name: 'novel'});
novel.save().then(() => console.log('I am a book.'))

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
