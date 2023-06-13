import express, { NextFunction, Request, Response } from "express";

const likesRouter = express.Router();

//POST Method check
likesRouter.post(
    "/checkOK",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(`check ok`);
    }
);


export default likesRouter;