import { NextFunction, Response, Request } from "express";
import { getAuth } from "firebase-admin/auth";

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.headers.authorization) {
    const authorizationList = req.headers.authorization.split(" ");
    if (authorizationList.length > 1) {
      try {
        await getAuth().verifyIdToken(authorizationList[1]);
        return next();
      } catch (_err) {
        return res.status(401).send({ message: "No authorizado" });
      }
    }
  }
  return res.status(401).send({ message: "No autorizado" });
};
