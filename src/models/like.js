import mongoose from "mongoose";

const LikesSchema = new mongoose.Schema({
    onModel:{
        type:string,
        required:true,
        enum:['Tweet','Comment']
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
       
    },

},{timestamps:true})

const Like = mongoose.model('Like',LikesSchema)
export default Like