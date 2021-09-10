const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log("Database connected"))
.catch(err => console.log(err));


const app = express();
app.use(bodyParser.json());


app.get( "/" , (req , res) => {
    res.send('hello vikas');
});


const port = process.env.Port || 5000;
app.listen(port , () => console.log('server is runnig on port no. 5000'));
