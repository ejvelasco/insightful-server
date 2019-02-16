import { Request, Response } from "express";
import { User } from "../entities/User";
import bcrypt from "bcrypt";

export async function post(req: Request, res: Response) {
  try {
    const { fields } = req.body;
    const user = await User.findOne({
      email: fields.email
    });
    if (!user) {
      res.json({
        err: "email"
      });
      return;
    }
    const result = await bcrypt.compare(fields.password, user.hash);
    if (!result) {
      res.json({
        err: "password"
      });
    } else {
      res.json({
        id: user.id
      });
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
