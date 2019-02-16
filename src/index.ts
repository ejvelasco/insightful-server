import express, { Request, Response } from "express";
import * as Result from "./endpoints/Result";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Server for the insightful dashboard.");
});

app.get("/results", Result.get);
app.post("/results", Result.post);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});