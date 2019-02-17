import express, { Request, Response } from "express";
import path from "path";
import * as ResultEpt from "./endpoints/Result";
import * as UserEpt from "./endpoints/User";
import * as SessionEpt from "./endpoints/Session";
import { Result } from "./entities/Result";
import { User } from "./entities/User";

import "reflect-metadata";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";

async function startServer() {
  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());
  app.use(express.static("dist"))

  try {
    await createConnection({
      type: "mysql",
      host: "us-cdbr-iron-east-03.cleardb.net",
      port: 3306,
      username: "bbd92dfba4e611",
      password: "6db659b7",
      dropSchema: false,
      database: "heroku_933f21ba379dd9d",
      synchronize: false,
      logging: false,
      entities: [Result, User]
    });
  } catch (err) {
    console.log(err);
  }
  // users
  app.post("/users", UserEpt.post);
  // session
  app.post("/sessions", SessionEpt.post);
  // results
  app.get("/results", ResultEpt.get);
  subscribers: ["src/subscribers/**/*.js"];
  app.post("/results", ResultEpt.post);
  // dashboard
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });
  //start
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
}

startServer();
