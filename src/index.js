const express =require('express');
const connect =require('./config/database')
const Comment=require('./models/comment')

const TweetRepository =require('./repository/tweet-repository')
const app=express();
app.listen(3000,async()=>{
    console.log("server is running")
    await connect();
    console.log("mongodb connect")
    const tweetRepo =new TweetRepository()
    const tweet =await tweetRepo.getWithComments('65679cae00024220d36ce59e')
    console.log(tweet)
    
})