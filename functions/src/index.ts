
import {onRequest} from "firebase-functions/v2/https";
import * as express from "express";
import {routes} from "./routes";
import {initializeApp} from "firebase-admin/app";

const app = express();
app.use(express.json());
app.use(routes);
initializeApp();

export const bito = onRequest(app);
