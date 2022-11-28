import { Request, Response } from "express";

export const asyncWrap = (fn: Function) => {
  return async (req: Request, res: Response) => {
    try {
      await fn(req, res);
    } catch (err: any) {
      console.log(err);
      res.status(err.statusCode ? err.statusCode : 500).json({ message: err.message });
    }
  };
};
