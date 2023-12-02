const { TweetRepository,HashtagRepository } = require('../repository/index')

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.HashtagRepository=new HashtagRepository()
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags=await  this.HashtagRepository.findByName(tags)
         let  titleOfPresentTags =alreadyPresentTags.map(tags=>tags.title)
        let newTags =tags.filter(tag=>!titleOfPresentTags.includes(tag))
          newTags =newTags.map(tag=>{
            return {
                title:tag,
                tweets:[tweet.id]
            }
          })
        await  this.HashtagRepository.bulkCreate(newTags)
        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id)
            tag.save()
        })
       
        // todo create hashtags and add here
        /**
         * 1.  bulcreate in mongoose 
         * 2. filter title of hashtag based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         */
        return tweet;
    }
}

module.exports = TweetService;