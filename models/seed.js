// objects would not seed by using this file. per JB, they are residing in the server.js for now until we can figure it out.

// const mongoose = require('mongoose');
// require('dotenv').config();

// async function seed() {

//   mongoose.connect('mongodb://localhost:27017/can-of-books');
//   const BookModel = require('./schema.js');

//     try {
//       await BookModel.create({
//       title: 'Jane Eyre',
//       description: 'Orphan girl becomes nanny',
//       status: 'Read',
//       email: 'brynthepigeon@gmail.com',  
//     })
      
//     await BookModel.create({
//         title: 'Divergent',
//         description: 'Angsty teens try to overthrow government',
//         status: 'Read',
//         email: 'fallingsnowglobes@gmail.com',  
//       })
    
//       await BookModel.create({
//         title: 'Little Book of Calm',
//         description: 'Mantras for daily calm',
//         status: 'Unread',
//         email: 'blahblahemailhere@gmail.com',  
//       })

//       await BookModel.create({
//         title: 'foo',
//         description: 'foo',
//         status: 'foo',
//         email: 'foomail@gmail.com',  
//       })
//     } catch (error) {
//         console.error(error);
//     }
//     mongoose.disconnect();
// }

// seed();
