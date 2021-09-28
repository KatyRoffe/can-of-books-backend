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

// const BookModel = require('./models/schema.js')
// mongoose.connect('mongodb://localhost:27017/can-of-books');

// this is hanging out in this file for now until we can get the seeding issue figured out.
// somehow we wound up with 12 book instances in our database due to experimentation and we need to figure out how to remove them
async function seed() {

  mongoose.connect(process.env.DATABASE_URL);
  const BookModel = require('./models/schema.js');

    try {
    await BookModel.create({
      title: 'Jane Eyre',
      description: 'Orphan girl becomes nanny',
      status: 'Read',
      email: 'brynthepigeon@gmail.com',  
    })
      
    await BookModel.create({
        title: 'Divergent',
        description: 'Angsty teens try to overthrow government',
        status: 'Read',
        email: 'fallingsnowglobes@gmail.com',  
      })
    
      await BookModel.create({
        title: 'Little Book of Calm',
        description: 'Mantras for daily calm',
        status: 'Unread',
        email: 'blahblahemailhere@gmail.com',  
      })
      await BookModel.create({
        title: 'foo',
        description: 'foo',
        status: 'foo',
        email: 'foomail@gmail.com',  
      })
    } catch (error) {
        console.error(error);
    }

    mongoose.disconnect();
}

seed();


//routes
app.get('/test', (request, response) => {

  response.send('test request received')
})

app.get('/books', async (req, res) => {
  // const filterQuery = {};
  console.log('books');
  // if (req.query.title) {
  //   filterQuery.title = req.query.title;
  // }
  // const books = await BookModel.find(filterQuery);

  res.send('test pending ');
})



app.listen(PORT, () => console.log(`listening on ${PORT}`));
