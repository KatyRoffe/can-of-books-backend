'use strict';

//server setup
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// initialize mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const BookModel = require('./models/schema.js');


//routes
app.get('/test', (request, response) => {

  response.send('test request received')
})

app.get('/books', async (req, res) => {
  const filterQuery = {};
  // console.log('books');
  if (req.query.email) {
    filterQuery.email = req.query.email;
  }
  const books = await BookModel.find(filterQuery);
  // console.log(books)
  res.send(books);
})


app.post('/books', async (req, res) => {

try {
  const bookInfo = req.body;

  const newBook = await BookModel.create(bookInfo)
  res.status(201).send(newBook);
} catch (error) {
  res.status(500).send('Error creating book')
}
});

app.delete('/books/:id', async (req, res) => {
  try {
    const email = req.query.email;
    const id = req.params.id;

    const book = await BookModel.findOne({ _id: id, email });

    if (!book) {
      res.status(400).send('unable to delete book');
      return;
    }

    if (book.email !== email) {
      res.status(400).send('unable to delete book');
      return;
    }

    await BookModel.findByIdAndDelete(id);
    res.send('success');

  } catch (error) {
    console.error(error);
    res.status(400).send('unable to delete book');
  }
})


app.listen(PORT, () => console.log(`listening on ${PORT}`));