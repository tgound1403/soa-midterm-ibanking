require('dotenv').config();
const userRoute = require('./routes/userRoute');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//middleware
app.use(express.json());

//routes
app.use('/api/user', userRoute);

//connect databases
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`listening on port ${process.env.PORT}... and connect to database...`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
