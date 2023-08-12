import { Router } from "express";
import { createUser } from "./controller/User";
import { beatList, createBeat } from "./controller/Beat";
import { validateToken } from "./middleware/token";

export const routes = Router()
  .post("/v1/user", createUser)
  .post("/v1/beat", validateToken, createBeat)
  .get("/v1/beats", validateToken, beatList);
