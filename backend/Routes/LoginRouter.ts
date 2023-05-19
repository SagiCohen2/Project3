import express, { NextFunction, Request, Response } from "express";
import LoginLogicMYSQL from "../Logic/LoginLogicMYSQL";

const loginRouter = express.Router();

// Register     => POST
// Login        => GET
// deleteUser   => DELETE

//POST Method check
loginRouter.post(
    "/checkOK",
    async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(`{"msg":"OK"}`);
    }
);

loginRouter.get(
    "/login",
    async(request:Request,response:Response,next:NextFunction) => {
        console.log("logged in");
        response.status(200).json(`{'msg':'Logged in successfully, welcome back'}`);
    }
)

loginRouter.post(
    "/register",
    async (request:Request,response:Response,next:NextFunction) => {
        const newUser = request.body;
        const result = await LoginLogicMYSQL.register(newUser);
        console.log("register", newUser);
        response.status(201).json(result);
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
