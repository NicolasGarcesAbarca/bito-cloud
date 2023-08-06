import {Request, Response} from "express";
import {getAuth} from "firebase-admin/auth";
import {createUserDB} from "../service/firestore/User";

export const createUser = async (req:Request, res:Response)=>{
  const {name, email, password} = req.body;
  try {
    const user = await getAuth()
      .createUser({email, password, displayName: name});
    await createUserDB({name, email, uid: user.uid});
    return res.status(200).send({message: user.uid});
  } catch (err) {
    return res.status(500).send({message: "error"});
  }
};
