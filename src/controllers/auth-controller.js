import UserService from "../services/user-service.js";
const userService =new UserService()

export const signup=async(req,res)=>{
    try {
        const response =await userService.signup({
            email: req.body.email,
            password:req.body.password,
            name:req.body.name
        }) ;
        return res.status(201).json({
            success:true,
            message:'Successfully create a user',
            data:response,
            err:{}
          })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong',
            data:{},
            err:error
          })
    }

}