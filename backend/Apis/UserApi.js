    import exp from 'express'
    import { UserModel } from '../model/UserModel.js'

    export const UserApi= exp.Router()

    UserApi.get('/users',async(req,res)=>{
        const users= await UserModel.find();
        return res.status(200).json({message:'hello world',payload:users})
    })
    UserApi.post('/adduser',async(req,res)=>{
        const user = req.body
        const UserObjDb = new UserModel(user);
        const savedUser=await UserObjDb.save()
        return res.status(201).json({message:'user created ',payload:savedUser})
    })
