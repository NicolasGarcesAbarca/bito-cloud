import {Router} from "express";
import {createUser} from "./controller/User";

export const routes = Router()
  .post("/v1", createUser);
