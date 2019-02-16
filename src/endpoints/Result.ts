import { Request, Response } from "express";

export function get(req: Request, res: Response) {
    console.log("Getting results");
}

export function post(req: Request, res: Response){
    console.log("Creating results");
}