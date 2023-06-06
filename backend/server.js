require('dotenv').config();
const userRoute = require('./routes/userRoute');
const historyRoute = require('./routes/historyRoute');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//middleware
app.use(express.json());

//routes
app.use('/api/user', userRoute);
app.use('/api/history', historyRoute);

//connect databases
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log('connect to database successfully!');
            console.log(`listening on port ${process.env.PORT}...`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
