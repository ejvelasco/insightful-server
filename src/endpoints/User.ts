import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { validate } from "class-validator";
import { User } from "./../entities/User";
const uuidAPIKey = require("uuid-apikey");

const saltRounds = 10;

export async function post(req: Request, res: Response) {
  try {
    const { fields } = req.body;
    const user = new User();
    user.email = fields.email;
    const userDb = await User.findOne({
        email: fields.email
    });
    if (userDb || (fields.password != fields.confirmPassword)) {
        res.sendStatus(400);
        return; 
    }
    user.api_key = uuidAPIKey.create().apiKey;
    user.hash = await bcrypt.hash(fields.password, saltRounds)
    const errors = await validate(user);
    if (errors.length > 0) {
      console.log(errors);
      res.sendStatus(400);
      return;
    }
    await user.save();
    res.json({ id: user.id });
  } catch (err) {
      console.log(err)
    res.sendStatus(500);
  }
}
