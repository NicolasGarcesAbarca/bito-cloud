import {Request, Response} from "express";
import {getAuth} from "firebase-admin/auth";

export const createUser = async (req:Request, res:Response)=>{
  const {email, password} = req.body;
  console.log(email);
  try {
    const user = await getAuth().createUser({email, password});
    console.log(user);
    return res.status(200).send({message: user.uid});
  } catch (err) {
    return res.status(500).send({message: "error11"});
  }
};
