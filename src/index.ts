import express, { Request, Response } from "express";
import * as ResultEpt from "./endpoints/Result";
import { Result } from "./entities/Result";
import "reflect-metadata";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";

async function startServer() {
  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());

  try {
    await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      dropSchema: false,
      database: "insightful",
      synchronize: false,
      logging: false,
      entities: [Result]
    });
  } catch (err) {
    console.log(err);
  }
  app.get("/", (req: Request, res: Response) => {
    res.send("Server for the insightful dashboard.");
  });

  app.get("/results", ResultEpt.get);
      subscribers: ["src/subscribers/**/*.js"]
  app.post("/results", ResultEpt.post);

  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
}

startServer();
