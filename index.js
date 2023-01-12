import dotenv from "dotenv";
dotenv.config();
import express, { Router } from "express";
import cors from "cors";

import { mongoDb } from "./dataBase/mongoDB/connect.js";
import { makeCreate } from "./factories/createFactories.js";
import { makeDelete } from "./factories/deleteFactories.js";
import { makeFindAll } from "./factories/findallFactories.js";
import { makeFindById } from "./factories/findbyidFactories.js";
import { makeUpdate } from "./factories/updateFactories.js";

mongoDb.connection();

const port =  process.env.PORT || 6666;
const app = express();
const router = Router();

const create = makeCreate(router);
const update = makeUpdate(router);
const findAll = makeFindAll(router);
const findById = makeFindById(router);
const deleted = makeDelete(router);

app.use(express.json());
app.use(cors());

app.use("/cards", create.route());
app.use("/cards", update.route());
app.use("/cards", findAll.route());
app.use("/cards", findById.route());
app.use("/cards", deleted.route());

app.listen(port, () =>
  console.info(`Servidor rodando em http://localhost:${port}`)
);
