import express, { NextFunction, Request, Response } from "express";

const loginRouter = express.Router();

//POST Method check
loginRouter.post(
    "/checkOK",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(`{"msg":"OK"}`);
    }
);

loginRouter.post(
    "/login",
    async(request:Request,response:Response,next:NextFunction) => {
        console.log("logged in");
        response.status(200).json(`{'msg':'Logged in successfully, welcome back'}`);
    }
)

loginRouter.post(
    "/register",
    async(request:Request,response:Response,next:NextFunction) => {
        console.log("register");
        response.status(201).json(`{'msg':'Register successfully, welcome'}`);
    }
)

loginRouter.delete(
    "/deleteUser/:userId",
    (request:Request,response:Response,next:NextFunction) => {
        console.log("delete user");
        response.status(204).json(`{'msg':'User deleted.'}`);
    }
)

loginRouter.put(
    "/updateUser/",
    async(request:Request,response:Response,next:NextFunction) => {
        console.log("update");
        response.status(201).json(`{'msg':'User successfully updated'}`);
    }
)

export default loginRouter;
