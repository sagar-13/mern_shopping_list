const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const items = require('./routes/api/items');


const app = express();


// Bodyparser Middleware

app.use(bodyParser.json());


// Make sure the keys file is in the config folder

const db = require('./config/keys').mongoURI;

// connect to mongoDB
// This is promise based, we leave a message to show it worked, otherwise catch the error

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


 // use Routes
 app.use('/api/items', items);

// ENV.POR is for HEROKU
const port = process.env.POR || 5000;

// Listen on that port, and log
app.listen(port, ()=> console.log(`Server started on port ${port}`))




 