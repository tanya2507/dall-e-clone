import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();
//used to pull env variables from dot env file

//initializing express application
const app = express();

//adding middlewares
app.use(cors());
app.use(express.json({limit : '50mb'})) /*sets up middleware to handle JSON payloads in incoming requests, with a size limit of 50 megabytes. to parse JSON payloads in incoming requests, but only if they are 50 megabytes or smaller. If a request exceeds this size limit, it will be rejected with an error.*/

//created api to use in our application that we can hook onto from our frontend side
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

//to ensure our application is running once we visit our url of server
app.get('/', async(req,res)=>{
    res.send('hello from dall-e')
}) 

//creating a server
const startServer = async()=>{

    try {
        connectDB(process.env.MONGO_DB);
        app.listen(8080,()=> console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error)
    }
}
startServer()