import express  from "express";
import bodyParser from "body-parser";
import mongoose  from "mongoose";
import cors from "cors";

import rentalRoutes from './routes/rentals.js';
import userRoutes from './routes/users.js';


const app = express();
app.use(cors());


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));


app.use('/rentals', rentalRoutes);
app.use('/user' , userRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/APPHR";


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=> console.log(`server is running on port: ${PORT} `)))
    .catch((error) => console.log(error));

// mongoose.set('useFindAndModify',false);

    




