import CommentService from "../services/comment-service.js";
const commentService =new CommentService()
export const createComment=async(req,res)=>{
    try {
       const response =await commentService.createComment(req.query.modelId,req.query.modelType,req.body.userId,req.body.content)
       return res.status(201).json({
         success:true,
         message:'Successfully created a comment',
         data:response,
         err:{}
       })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Something went wrong',
            data:{},
            err:error
          })
    }
}

//localhost:3000/api/v1/comments?modelId=656ecdb3dc1bc3ce74b81aa6&modelType=Tweet