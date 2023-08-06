import {Request, Response} from "express";
import {createBeatDB} from "../service/firestore/Beat";


export const createBeat = async (req: Request, res: Response) => {
  const {title, price, imageURL, audioURL, uid} = req.body;
  try {
    await createBeatDB({title, price, imageURL, audioURL, uid});
    return res.status(200).send({message: "beat creado"});
  } catch (err) {
    return res.status(500).send({message: "error"});
  }
};