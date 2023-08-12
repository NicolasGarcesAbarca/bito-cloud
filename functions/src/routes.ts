import { Router } from "express";
import { createUser } from "./controller/User";
import { beatList, createBeat } from "./controller/Beat";

export const routes = Router()
  .post("/v1/user", createUser)
  .post("/v1/beat", createBeat)
  .get("/v1/beats", beatList);
