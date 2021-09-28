const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const BookModel = require('./schema.js');

async function seed() {
    try {
      await BookModel.create({
      title: 'Jane Eyre',
      description: 'Orphan girl becomes nanny',
      status: 'Read',
      email: 'brynthepigeon@gmail.com',  
    })
      
    // await BookModel.create({
    //     title: 'Divergent',
    //     description: 'Angsty teens try to overthrow government',
    //     status: 'Read',
    //     email: 'fallingsnowglobes@gmail.com',  
    //   })
    
    //   await BookModel.create({
    //     title: 'Little Book of Calm',
    //     description: 'Mantras for daily calm',
    //     status: 'Unread',
    //     email: 'blahblahemailhere@gmail.com',  
    //   })
    } catch (error) {
        console.error(error);
    }
    mongoose.disconnect();
}

seed();
