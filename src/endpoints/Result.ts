import { Request, Response } from "express";
import { validate } from "class-validator";
import { Result } from "./../entities/Result";

export async function get(req: Request, res: Response) {
  try {
    const { api_key } = req.body;
    //@TODO: paginate request
    const results = await Result.find({
      api_key
    });
    res.json(results);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function post(req: Request, res: Response) {
  try {
    const { fields } = req.body;
    const result = new Result();
    result.api_key = fields.api_key;
    result.error = fields.error;
    result.message = fields.message;
    result.project = fields.project;
    result.created_at = new Date();
    const errors = await validate(result);
    if (errors.length > 0) {
      res.sendStatus(400);
      return;
    }
    await result.save();
    res.json({ id: result.id });
    res.json(true);
  } catch (err) {
    res.sendStatus(500);
  }
}
