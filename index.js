import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoutes.js';
import cors from 'cors';

const port = process.env.PORT || 5000;


// Routes
const app = express();

// middleware
app.use (cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true})



// .then(() => app.listen(process.env.PORT, () => console.log(`Social-Media Server Running at ${process.env.PORT}`)))
// .catch((error)=> console.log(error));

app.get ('/', async (req,res)=>{
    res.send('server is running');
});
app.listen(port, ()=> console.log(`server is running on ${port}`));


// usages of Routes
app.use('/auth', AuthRoute);