import express from 'express';
import {connect} from './config/database.js'
import TweetService from './services/tweet-service.js';





const app = express();
app.listen(3000, async () => {
    console.log("server is running")
    await connect();
    console.log("mongodb connect")

    let ser =new TweetService();
    await ser.create({
        content:'Done with #refactor'
    })


 

});
