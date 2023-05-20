import express, { NextFunction, Request, Response } from "express";
import LoginLogicMYSQL from "../Logic/LoginLogicMYSQL";

const loginRouter = express.Router();

// Register        => POST
// Login           => GET
// Delete User     => DELETE

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
        try {
            console.log("logged in");
            const loginResult = await LoginLogicMYSQL.login;
            
            // Check if the loginResult is empty or undefined
            if (!loginResult) {
                throw new Error("Details not found in the database."); // Throw an error if the details are not found
            }
            
            response.status(200).json(loginResult);
        } catch (error) {
            console.error(error);
        console.log("logged in successfully");
          // response.status(200).json(await LoginLogicMYSQL.login);
        }
    });


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
