import { getUserDb , getUserIDDb , insertUserDb , deleteUserDb , updateUserDb } from "../model/userDb.js";
import { hash } from "bcrypt";

const getUser =  async(req,res)=> {
    res.json(await getUserDb());
}

const getUserId =   async(req,res)=> {
    console.log(req.params.id);
    res.json(await getUserIDDb(req.params.id))
}

const insertUser = async (req,res) => {
    let {username, email, password} = req.body
    let hashedP = await hash(password, 10)
    await insertUserDb(username, email, password)
    res.send('Data was inserted successfully')
}

const deleteUser = async (req,res) => {
    let {id} = req.body
    await deleteUserDb(req.params.id)
    res.send('Data has been deleted')
}

const updateUser =  async(req,res)=>{
    let {username, email, password} = req.body
    let user = await getUserDb(req.params.id)
    username?username = username:username = user.username;
    email?email = email:email = user.email;
    password?password = password:password = user.password;

    await updateUserDb(username, email , password , req.params.id);
    res.send('Data has been updated successfully.')
}

const loginUser = (req,res)=>{
    res.json({message:"you have signed in successfully",token:req.body.token})
}

export {getUser , getUserId , insertUser, deleteUser , updateUser , loginUser }