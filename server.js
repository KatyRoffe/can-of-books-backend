'use strict';

//server setup
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// initialize mongoose
const mongoose = require('mongoose');

const BookModel = require('./models/schema.js')


mongoose.connect('mongodb://localhost:27017/can-of-books');


//routes
app.get('/test', (request, response) => {

  response.send('test request received')
})

app.get('/books', async (req, res) => {
  const filterQuery = {};
  if (req.query.title) {
    filterQuery.title = req.query.title;
  }
  const books = await BookModel.find(filterQuery);

  res.send(books);
})


app.listen(PORT, () => console.log(`listening on ${PORT}`));
